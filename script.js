const key = "7d3c336ea0f76d099742f9efdbd1654d"


async function loadWeather(searchTerm){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${key}`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData)
    
  }

  loadWeather("Warsaw")