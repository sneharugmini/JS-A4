document.addEventListener('DOMContentLoaded', function () {
    
    var studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = 'Student ID: 200533731 | Name: Sneha Rugmini';

    
    var apiKey = 'adcc8c96c1msh7b6e311b45da198p171c3djsn334bc4ec39be';
    
    
    var apiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';

    
    fetch(apiUrl + '?q=city_name&appid=' + apiKey)
        .then(response => response.json())
        .then(data => {
            
            var weatherDataContainer = document.getElementById('weather-data');
            weatherDataContainer.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
