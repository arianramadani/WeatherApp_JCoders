const apiKey = 'c647880c4df2690e069f163c7e1fffd8';
const weather = new Weather(apiKey);

function addFavorite() {
    const location = document.getElementById('locationInput').value.trim();
    if (location !== '') {
        localStorageModule.addFavorite(location);
        displayFavorites();
    }
}

function removeFavorite(location) {
    localStorageModule.removeFavorite(location);
    displayFavorites();
}

function displayFavorites() {
    const favorites = localStorageModule.getFavorites();
    const favoriteList = document.getElementById('favoriteLocations');
    favoriteList.innerHTML = '';
    favorites.forEach(location => {
        const listItem = document.createElement('li');
        listItem.textContent = location;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFavorite(location);
        listItem.appendChild(removeButton);
        favoriteList.appendChild(listItem);
    });
}

async function init() {
    displayFavorites();
    const defaultLocation = 'New York';
    const weatherData = await weather.fetchWeather(defaultLocation);
    weather.displayWeather(weatherData, 'weatherDisplay');
}

init();
