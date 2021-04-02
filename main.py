import sys
import time
from os import environ

import eel
import requests
from dotenv import load_dotenv

load_dotenv()
# load_dotenv(dotenv_path=sys._MEIPASS + "/.env")
dataSrc = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?sort=time&Authorization=" \
          + environ.get('AUTHKEY')
weather_data = None
eel.init("web")


def parse_time(timestamp: str):
    return time.strftime("%m/%d %H時", time.strptime(timestamp, '%Y-%m-%d %H:%M:%S'))


def fetch_weather_data():
    global weather_data
    print("Fetching weather data...")
    try:
        raw_data = requests.get(dataSrc).json()
        if raw_data["success"] != "true":
            raise requests.exceptions.RequestException(
                "Something went wrong on the database server when fetching weather weather_data!")
    except requests.exceptions.RequestException:
        print("Failed on fetching weather data!")

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
    fetch_weather_data()
    eel.start("index.html")
