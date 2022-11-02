const key = "7d3c336ea0f76d099742f9efdbd1654d"

async function loadWeather(searchTerm){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${key}`, {mode: 'cors'})
    const weatherData = await response.json()
    const city = weatherData.city.name // e.g. Warsaw
    const country = weatherData.city.country // e.g. PL
    const forecastDescription = weatherData.list[0].weather[0].description // e.g. overhead clouds
    const temperature = weatherData.list[0].main.temp // e.g. 285 (Kelvin) 
    const humidity = weatherData.list[0].main.humidity // e.g. 95
    const pressure = weatherData.list[0].main.pressure // e.g. 1017
    return [city, country, forecastDescription, temperature, humidity, pressure]
  }

async function renderWeather(weatherData) {
    const response = await weatherData

    countryText.innerHTML = response[1]
    cityText.innerHTML = response[0]
    descriptionText.innerHTML = response[2]
    dateText.innerHTML = new Date()
    temperatureText.innerHTML = Math.round((response[3] - 273.15) / 0.5) * 0.5 + " °C" // Convert from Kelvin to Celsius (round to nearest 0.5)
}

form.onsubmit = function() {
    let forecast = loadWeather(userInput.value)
    renderWeather(forecast)
    return false
}

const userInput = document.querySelector("#search")
const cityText = document.querySelector("#city")
const countryText = document.querySelector("#country")
const descriptionText = document.querySelector("#description")
const dateText = document.querySelector("#date")
const temperatureText = document.querySelector("#temperature")

