// my API key 58adba1842bb26530b9045ac5fb56baf

var searchFormEl = document.querySelector("#searchForm");
var cityInputEl = document.querySelector("#cityName");
var currentWeatherEl = document.querySelector(".container");
var fiveDayEl = document.querySelector(".futureConditions");
// var cityNameEl = document.getElementById("cityName");
// var cityTempEl = document.getElementById("cityTemp");
// var cityHumidityEl = document.getElementById("cityHumidity");
// var cityWindEl = document.getElementById("cityWindSpeed");
// var cityUVEl = document.getElementById("cityUV");

var formSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);
    var cityName = cityInputEl.value.trim();
    if (cityName) {
        getWeatherConditions(cityName);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name!");
    }
};
var getWeatherConditions = function () {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl.value + "&appid=58adba1842bb26530b9045ac5fb56baf" + "&units=imperial";
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            document.getElementById("cityNameMain").textContent = data.name + "   " + moment().format("dddd, MMMM Do, YYYY");
            document.getElementById("cityTemp").textContent = "Temperature: " + data.main.temp + " F";
            document.getElementById("cityHumidity").textContent = "Humidity: " + data.main.humidity + "%";
            document.getElementById("cityWindSpeed").textContent = "Wind Speed: " + data.wind.speed + " MPH";
        });
    });
    var apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&appid=58adba1842bb26530b9045ac5fb56baf" + "&units=imperial";
    fetch(apiUrl2).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            var city = document.createElement("h2").textContent = data.name
            var temp = document.createElement("p").textContent = "Temperature: " + data.main.temp + " F";
            var humidity = document.createElement("p").textContent = "Humidity: " + data.main.humidity + "%";
            var wind = document.createElement("p").textContent = "Wind Speed: " + data.wind.speed + " MPH";
            fiveDayEl.append(city, temp, humidity, wind);
        })
        
    })

};

// onecall?lat={lat}&lon={lon}   http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// var getWeatherConditions = function () {
//     // format the api url
//     var apiUrl = ("http://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&appid=58adba1842bb26530b9045ac5fb56baf");

//     fetch(apiUrl)
//     .then(function(response) {
//         if (response.ok) {
//             console.log(reponse);
//             response.json().then(function (data) {
//                 console.log(data);2
//                 // displayWeather(data, cityName);
//             });
//         } else {
//             alert("Error: City not found");
//         }
//     })
//     .catch(function(error) {
//         alert("Unable to connect to OpenWeather");
//     });

// };

searchFormEl.addEventListener("submit", formSubmitHandler);