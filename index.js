const getUserInput = () => {
  const $ = (e) => document.querySelector(e); //Make life easy
  !$(".userInput").value ? getWeather("winnipeg") : null; // Default starting city
  $(".submit").onclick = () => getWeather($(".userInput").value);
  return { $ };
};
getUserInput();

async function getWeather(userInput) {
  document.querySelector("#display").classList.add("bounce"); //Animation
  let apiKey = "fce51865df10c606b4200dd86db4fdd5";
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;
  let response = await fetch(weatherApi);
  let data = await response.json();
  return displayWeather(data);
}

function displayWeather(data) {
  const { $ } = getUserInput();
  const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  $(".description").textContent = data.weather[0].description;
  $(".icon").src = weatherIcon;
  $(".temp").textContent = `Temp: ${data.main.temp}\xB0 C`;
  $(".feelsLike").textContent = `Feels like: ${data.main.feels_like}\xB0 C`;
  $(".humidity").textContent = `Humidity: ${data.main.humidity}%`;
}
