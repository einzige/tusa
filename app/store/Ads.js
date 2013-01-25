Ext.define('Tusa.store.Ads', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'Tusa.model.Ad',
        autoLoad: true,

        proxy: {
            type: 'jsonp',
            url: 'http://192.168.1.111:3000/ads',

            reader: {
                type: 'json',
                totalProperty: 'total_count',
                rootProperty: 'ads',
                successProperty: 'success'
            }
        }
    }
});
