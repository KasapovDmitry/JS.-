// Пример API запроса: https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=273a46912cc4a393030104c5610c7a63&units=metric

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKay = "273a46912cc4a393030104c5610c7a63";

function pageLoaded() {
  let input = document.getElementById("input");
  let button = document.getElementById("button");
  let output = document.getElementById("output");

  button.addEventListener("click", sendRequest);

  function sendRequest() {
    if (!validateInput()) return;

    let requestURL = formatURL();
    fetch(requestURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        writeOutput(formatOutput(data));
      })
  }

  function formatOutput(data) {
    let htmlString = `
      <p>Погода: ${data.weather[0].description}</p>
      <p>Температура: ${data.main.temp} C</p>
    `;
    return htmlString;
  }

  function writeOutput(message) {
    output.innerHTML = message;
  }

  function formatURL() {
    let url = new URL(apiUrl);
    url.searchParams.set("q", input.value);
    url.searchParams.set("appid", apiKay);
    url.searchParams.set("units", "metric");
    url.searchParams.set("lang", "ru");
    return url;
  }

  function validateInput() {
    return input.value !== "";
  }

}

document.addEventListener("DOMContentLoaded", pageLoaded);