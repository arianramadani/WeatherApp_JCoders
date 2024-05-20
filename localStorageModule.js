const localStorageModule = {
    getFavorites() {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    },

    addFavorite(location) {
        const favorites = this.getFavorites();
        favorites.push(location);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    },

    removeFavorite(location) {
        let favorites = this.getFavorites();
        favorites = favorites.filter(fav => fav !== location);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};
