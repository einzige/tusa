Ext.define('Tusa.store.Categories', {
    extend: 'Ext.data.TreeStore',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'Tusa.model.Category',
        autoLoad: true,
        defaultRootProperty: 'items',

        proxy: {
            type: 'jsonp',
            url: 'http://192.168.1.111:3000/categories',

            reader: {
                type: 'json',
                successProperty: 'success'
            }
        }
    }
});
