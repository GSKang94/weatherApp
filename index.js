let userInput = document.querySelector(".userInput");
let submitBtn = document.querySelector(".submit");

let input = "";

userInput.onchange = (e) => (input = e.target.value);

submitBtn.onclick = () => getWeather();

async function getWeather() {
  let apiKey = "fce51865df10c606b4200dd86db4fdd5";
  let weatherApi = `api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
  //   let response = await fetch(weatherApi);
  //   let data = await response.json();
  //   console.log(data);
  console.log(weatherApi);
  //   fetch(weatherApi)
  //     .then((response) => response.json())
  //     .then((text) => console.log(text));
}

//   fetch(weatherApi).then((response) => console.log(response.json()));

//   fetch(weatherApi)
//     .then((response) => response.json())
//     .then((data) => appendData(data));

//   function appendData(data) {
//     console.log(data);
//   }
//   appendData();
