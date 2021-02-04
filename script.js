let now = new Date();

let h1 = document.querySelector(".weatherheader");
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday,`
];
let day = days[now.getDay()];
let months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];
let month = months[now.getMonth()];

h1.innerHTML = `${day}, ${month} ${date}, ${year}, ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("#change-city");
  currentCity.innerHTML = `📍 You're in ${cityInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);


function displayTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let currentTemp = document.querySelector("#current-temperature");
  
    currentTemp.innerHTML = `${temperature}`;
}

function showCity(city) {
    let apiKey =  "11c6b1943d69dd9ab2b79eb46ab8283b";
    let unit = "metric"
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=${unit}`;

    axios.get(apiUrl).then(displayTemperature);
}