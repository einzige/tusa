Ext.define('Tusa.controller.Ads', {
    extend:   'Tusa.controller.List',
    requires: ['Tusa.view.AdsList'],

    config: {
        routes: {
            'categories/:category_id/ads': 'index',
        },

        control: {
            adsList: {
                /*itemdoubletap: function(me, index, target, record) {
                    Tusa.app.favorites.add(record);
                    this.getFavoritesTab().tab.setBadgeText(Tusa.app.favorites.getCount());
                }*/
            }
        },

        refs: {
            favoritesTab: '#favorites',
            adsList: '#adsList',
            favoritesList: {
                xtype: 'adslist',
                store: 'Favorites'
            }
        }
    },

    // Loads ads by given categoryId
    index: function (categoryId) {
        var list = this.getList();
        var store = list.getStore();

        // Shows a list of ads in a detail view by given categoryId
        var navigate = function() {
            list.navigateBySlug(new RegExp(categoryId), {
                fail: function() {
                    Tusa.app.redirectTo('categories');
                }
            });
        };
        store.isLoaded() ? navigate() : store.on('load', navigate);

        // Loads ads into the detail card
        list.getDetailCard().getStore().loadCategory(categoryId);
    }
});
