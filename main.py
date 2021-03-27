import time
import json
from os import environ
from pathlib import Path

import eel
import requests
from dotenv import load_dotenv

from lib.myquery import MyQuery

load_dotenv()

databaseHost = "https://opendata.cwb.gov.tw/"
retrievingDataId = "/v1/rest/datastore/F-C0032-001"
dataSrc = MyQuery(databaseHost + "api" + retrievingDataId) \
    .query("Authorization", environ.get("AUTHKEY")) \
    .query("sort", "time")
apiDocSrc = databaseHost + "apidoc/v1"

eel.init("web")

weather_data = None


def parse_time(timestamp: str):
    # date = time.strptime(timestamp, '%Y-%m-%d %H:%M:%S')
    return time.strftime("%m/%d %H時", time.strptime(timestamp, '%Y-%m-%d %H:%M:%S'))


def fetch_weather_data():
    global weather_data
    print("Fetching weather data...")
    try:
        raw_data = requests.get(dataSrc).json()
        Path("./weather.json").write_text(json.dumps(raw_data, indent=2, ensure_ascii=False), encoding="utf-8")
        if raw_data["success"] != "true":
            raise requests.exceptions.RequestException(
                "Something went wrong on the database server when fetching weather weather_data!")
    except requests.exceptions.RequestException:
        print("Failed on fetching weather data!")
        print("Loading from cached weather_data instead...")
        raw_data = json.loads(Path("./weather.json").read_text(encoding="utf-8"))

    weather_data = dict()

    for loc in raw_data["records"]["location"]:
        dloc = dict()
        for el in loc["weatherElement"]:
            for d in el["time"]:
                if d["startTime"] not in dloc:
                    dloc[d["startTime"]] = {"startT": parse_time(d["startTime"]), "endT": parse_time(d["endTime"])}
                dloc[d["startTime"]][el["elementName"]] = d["parameter"]["parameterName"]
                if el["elementName"] == "Wx":
                    dloc[d["startTime"]]["WxImg"] = d["parameter"]["parameterValue"]
        weather_data[loc["locationName"]] = dloc


@eel.expose
def get_weather_data():
    global weather_data
    if weather_data is None:
        fetch_weather_data()
    return weather_data


if __name__ == "__main__":
    eel.start("index.html", mode="chrome-app")
