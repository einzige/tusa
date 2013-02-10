Ext.define('Tusa.store.Favorites', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Tusa.model.Ad',

        listeners: {
            addrecords: function(store, records) {
            },

            removerecords: function(store, records) {
            }
        }
    }
});
