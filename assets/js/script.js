// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=58adba1842bb26530b9045ac5fb56baf

// my API key 58adba1842bb26530b9045ac5fb56baf

var cityInputEl = document.querySelector("#cityName");
var searchBtn = document.querySelector(".btn");

// var formSubmitHandler = function(event) {
//     event.preventDefault();
//     var cityName = cityInputEl.value.trim();

//     if (cityName) {
        // getWeatherConditions(cityName);
//     }
// }

fetch("http://api.openweathermap.org/data/2.5/forecast?q=paris&appid=58adba1842bb26530b9045ac5fb56baf")
.then(function (response) {
    console.log(response);
})
// var getWeatherConditions = function () {
//     // format the api url
//     var apiUrl = ("http://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&appid=58adba1842bb26530b9045ac5fb56baf");

//     fetch(apiUrl)
//     .then(function (response) {
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

// searchBtn.addEventListener("click", getWeatherConditions);