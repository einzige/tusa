Ext.define('Tusa.store.Ads', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'Tusa.model.Ad',
        autoLoad: false,

        proxy: {
            type: 'jsonp',
            url: Tusa.app.sourceHost,

            reader: {
                type: 'json',
                totalProperty: 'total_count',
                rootProperty: 'ads',
                successProperty: 'success'
            }
        }
    },

    loadCategory: function(categoryId) {
        this.getProxy().setUrl([Tusa.app.sourceHost, 'categories', categoryId, 'ads'].join('/'));
        this.load();
    }
});
