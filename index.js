const getUserInput = () => {
  let userInput = document.querySelector(".userInput").value;
  document.querySelector(".submit").onclick = () => getWeather();
  return { userInput };
};
getUserInput();

async function getWeather() {
  const user = getUserInput();
  let apiKey = "fce51865df10c606b4200dd86db4fdd5";
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${user.userInput}&appid=${apiKey}&units=metric`;
  let response = await fetch(weatherApi);
  let data = await response.json();
  return displayWeather(data);
}

function displayWeather(data) {
  let display = document.querySelector("#display");
  console.log(data);
}
