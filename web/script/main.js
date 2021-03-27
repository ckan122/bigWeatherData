let weather_data;

eel.get_weather_data()(raw_data => {
    weather_data = raw_data;
    for (const [cityName, cityData] of Object.entries(weather_data)) {
        let city = $(`<div class="weather-city" data-city-name="${cityName}"><div class="city-name">${cityName}</div></div>`);
        let info = $('<div class="weather-infos"></div>');
        city.append(info);
        Object.values(cityData).forEach(wdata => {
            info.append(`<div class="weather-info">
            <div class="weather-info-time">${wdata.startT}</div>
            <div class="weather-info-time">${wdata.endT}</div>
            <img src="assets/weather/${wximg[wdata.WxImg]}.svg" alt="${wdata.Wx}" width="50" height="50"/>
            <div class="weather-info-wc">
                <div class="weather-info-wx">${wdata.Wx}</div>
                <div class="weather-info-ci">${wdata.CI}</div>
            </div>
            <p class="weather-info-t">
            <img src="assets/weather/1f321.svg" alt="氣溫：" height="24" width="24"/>
            <span style="color: skyblue">${wdata.MinT}</span> ~ 
            <span style="color: firebrick">${wdata.MaxT}</span>⁰C
            </p>
            <p class="weather-info-pp">
            <img src="assets/weather/${(30 < parseInt(wdata.PoP)) ? "2614" : "2602"}.svg" alt="降雨機率：" height="24" width="24">${wdata.PoP}%
            </p>
            </div>`);
        });
        $("#weather-cities").append(city);
    }

    for (let city of cities) {
        let node = $(`<area shape="poly" coords="${city.coords}" alt="${city.name}" class="city-box" title="${city.name}">`)
        $("#city-map").append(node);
        node.on("mouseenter", () => {
            $(`.weather-city`).hide()
            // $(`.weather-city:visible:not([data-city-name=${city.name}])`).hide()
            $(`.weather-city[data-city-name=${city.name}]`).show()
            let pos = $("#city-select").position();
            let cur = $("#city-map-cursor");
            if (city.pos === undefined) city.pos = [0, 0];
            cur.css({left : pos.left + city.pos[0], top: pos.top + city.pos[1]})
        });
    }
});

/*
$(document).on("mousemove", function getCursorXY(e) {
    let pos = $("#city-select").position();
    $("#cursorX").text(Math.round(e.pageX - pos.left).toString());
    $("#cursorY").text(Math.round(e.pageY - pos.top).toString());
    $("#foo").css({left: e.pageX, top: e.pageY})
})*/
