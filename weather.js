const KEY = 'a7521c82bbd14ce88a2164713232012'
let city = 'Malaga';

let cityInfo = null;
let cityWeatherData = null;
let cityForecast = null;


const showCityData = () => {
    let cityElement = document.getElementById('city');
    let cityName = cityInfo.name;
    let countryName = cityInfo.country;

    let cityData = `
    <div>
    <span> ${cityName} </span>
    </br>
    <span>${countryName} </span>

    </div>`;
    cityElement.innerHTML += cityData;

}

const showClimateData = () => {
    let climateElement = document.getElementById('climate');
    let currentCondition =  cityWeatherData.condition.text;

    let cityCondition = `
    <div>
    <span> ${currentCondition} </span>
    </div>`;
    climateElement.innerHTML += cityCondition;

}

const showTemperatureData = () => {
    let temperatureElement = document.getElementById('temperature');
    let currentTemp = cityWeatherData.temp_c;

    let cityTemp = `
    <div>
    <span> ${currentTemp} ºC </span>
    </div>`;

    temperatureElement.innerHTML += cityTemp;
}

const showWeatherData = () => {
    let weatherElement = document.getElementById('weather');
    let humidity = cityWeatherData.humidity;
    let rain = cityWeatherData.precip_mm;
    let wind = cityWeatherData.wind_kph;

    let climatePhenoms = `
    <div>
    <span> ${humidity} </span>
    </br>
    <span>${rain} </span>
    </br>
    <span>${wind} </span>
    </div>`;

    weatherElement.innnerHTML += climatePhenoms;
}

const showWeatherPrevisionData = () => {
    let weatherPrevision = document.getElementById('weatherPrevision');

    let hoursArray = cityForecast.forecastday[0].hour;

    hoursArray.forEach((hour, i) => {

        let card = `
        <div style="width: 100px; height:100px; background-color: tomato;">
            <span> ${hour.time.slice(hour.time.length - 5)}  </span>
            </br>
            <span>${hour.temp_c} </span>
        
        </div>`

        weatherPrevision.innerHTML += card;
    });
}


const getWeatherInfo = () => {

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=1`)
        .then((response) => response.json())
        .then((data) => {
            cityInfo = data.location;
            cityWeatherData = data.current;
            cityForecast = data.forecast;
        })
        .finally(() => {
            showCityData();
            showClimateData();
            showTemperatureData();
            showWeatherData();
            showWeatherForecast();
        });
};

getWeatherInfo();