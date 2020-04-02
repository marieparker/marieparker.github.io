const forecastApiURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.42&lon=-116.31&units=imperial&appid=32b36f37051b2578eec25a9c85d88e8a"
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData); 

        //Icon image
        var imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
        var desc = weatherData.weather[0].description; 
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    
    //Temp Numbers
    document.getElementById('temp').textContent = Math.round(weatherData.main.temp);
    document.getElementById('feels').textContent = Math.round(weatherData.main.feels_like);
  
  });