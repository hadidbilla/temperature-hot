const key = "3046d3b7ffbce27ad9bb7e2cd6d82238";
function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let showCity = (document.getElementById("show-city").innerText =
        data.name);
      let showTempter = (document.getElementById("temp").innerText =
        data.main.temp);
    });
}

function searchLocation() {
  const inputText = document.getElementById("input-text").value;
  getWeather(inputText);
  //console.log(dataOfCity);
}
