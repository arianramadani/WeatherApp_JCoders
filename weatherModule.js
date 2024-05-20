class Weather {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetchWeather(location) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`);
        const data = await response.json();
        return data;
    }

    displayWeather(weatherData, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Description: ${weatherData.weather[0].description}</p>
        `;
    }
}
