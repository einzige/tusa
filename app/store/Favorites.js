Ext.define('Tusa.store.Favorites', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Tusa.model.Ad',

        listeners: {
            addrecords: function(store) {
                Ext.getCmp('favorites').tab.setBadgeText(store.getCount());
                Ext.getCmp('favoritesButton').setBadgeText(store.getCount());
            },

            removerecords: function(store) {
                Ext.getCmp('favoritesButton').setBadgeText(store.getCount());
                Ext.getCmp('favoritesButton').setBadgeText(store.getCount());
            }
        }
    }
});
