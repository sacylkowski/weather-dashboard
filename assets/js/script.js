// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=58adba1842bb26530b9045ac5fb56baf

// my API key 58adba1842bb26530b9045ac5fb56baf

var searchFormEl = document.querySelector("#searchForm");
var cityInputEl = document.querySelector("#cityName");
var searchBtn = document.querySelector(".btn");

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
    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&appid=58adba1842bb26530b9045ac5fb56baf";
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

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