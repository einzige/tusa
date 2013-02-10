Ext.define('Tusa.controller.Favorites', {
    extend:   'Tusa.controller.Tab',
    requires: ['Tusa.view.FavoritesList'],

    config: {
        contentClass: 'Tusa.view.FavoritesList',
        containerId:  'favoritesList',

        routes: {
            'favorites': 'index'
        },

        refs: {
            favoritesList: '#favoritesList',
            tab: '#favorites'
        }
    },

    // Loads ads by given categoryId
    index: function () {
    }
});
