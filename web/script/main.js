let weather_data;
const factor = 0.8;

let img = $("#city-map-img");
img.width(img.width() * factor).height(img.height() * factor)

eel.get_weather_data()(raw_data => {
    weather_data = raw_data;
    for (const [cityName, cityData] of Object.entries(weather_data)) {
        let city = $(`<div class="weather-city" data-city-name="${cityName}"><div class="city-name">${cityName}</div></div>`);
        let info = $('<div class="weather-infos"></div>');
        city.append(info);
        Object.values(cityData).forEach(wdata => {
            info.append(`<div class="weather-info">
            <div>${wdata.startT}</div><div>${wdata.endT}</div>
            <img src="assets/weather/${wximg[wdata.WxImg]}.svg" alt="${wdata.Wx}2" width="50" height="50"/>
            <div>${wdata.Wx}</div><div>${wdata.CI}</div>
            <p>
            <img src="assets/weather/1f321.svg" alt="氣溫：" height="24" width="24"/>
            <span style="color: skyblue">${wdata.MinT}</span> ~ <span style="color: firebrick">${wdata.MaxT}</span>⁰C
            </p>
            <p>
            <img src="assets/weather/${(30 < parseInt(wdata.PoP)) ? "2614" : "2602"}.svg" alt="降雨機率：" height="24" width="24">${wdata.PoP}%
            </p>
            </div>`);
        });
        $("#weather-cities").append(city);
    }

    for (let city of cities) {
        let node = $(`<area shape="poly" coords="${city.coords.map(x => x * factor)}" alt="${city.name}" class="city-box" title="${city.name}">`)
        $("#city-map").append(node);
        node.on("mouseenter", () => {
            $(`.weather-city`).hide()
            $(`.weather-city[data-city-name=${city.name}]`).show()
            let pos = $("#city-select").position();
            let cur = $("#city-map-cursor");
            if (city.pos === undefined) city.pos = [0, 0];
            cur.css({left : pos.left + city.pos[0] * factor, top: pos.top + city.pos[1] * factor})
        });
    }
});
