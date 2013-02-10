Ext.define('Tusa.controller.Favorites', {
    extend:   'Tusa.controller.List',
    requires: ['Tusa.view.AdsList'],

    config: {
        contentClass: 'Tusa.view.Categories',
        containerId:  'Categories',

        routes: {
            'favorites': 'index'
        },

        refs: {
            favoritesList: {
                xtype: 'adslist',
                store: 'Favorites'
            }
        }
    },

    // Loads ads by given categoryId
    index: function (categoryId) {
    }
});
