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

  let forecast = loadWeather("Warsaw")
  console.log(forecast)