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

// Searching a city and displaying the temperature
function displayTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temperature");

  currentTemp.innerHTML = `${temperature}°C`;
}

function showCity() {
  let apiKey = "11c6b1943d69dd9ab2b79eb46ab8283b";
  let unit = "metric";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(displayTemperature);
}

function enterCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  showCity(city);
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", enterCity);

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  
  //Bonus Part
  let heading = document.querySelector("#current-temperature");
  heading.innerHTML = `The outside temperature is ${temperature}°C in ${response.data.name}`;
}
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitute;
  let apiKey = "11c6b1943d69dd9ab2b79eb46ab8283b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}
let currentLocation = document.querySelector(".btn-success");
currentLocation.addEventListener("click", showPosition);

function showPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
