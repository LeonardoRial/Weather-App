const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const weather = document.querySelector(".weather");
const icon = document.querySelector(".icon");

btn.addEventListener("click", () => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=374fbf091349541b2aefe15b63576863`
  )
    .then((response) => response.json())
    .then((data) => {
      const celsius = data.main.temp - 273.15;
      city.innerHTML = `${data.name}, ${data.sys.country}`;
      temp.innerHTML = `Temperature: ${celsius.toFixed(1)}` + "&#8451";
      humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
      weather.innerHTML =
        data.weather[0].description[0].toUpperCase() +
        data.weather[0].description.slice(1);
      icon.style.backgroundImage = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}.png)`;
      console.log(data);
    });
});
