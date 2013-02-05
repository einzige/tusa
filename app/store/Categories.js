Ext.define('Tusa.store.Categories', {
    extend: 'Ext.data.TreeStore',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'Tusa.model.Category',
        autoLoad: true,
        defaultRootProperty: 'items',

        proxy: {
            type: 'jsonp',
            url: Tusa.app.sourceHost + '/categories',

            reader: {
                type: 'json',
                successProperty: 'success'
            }
        }
    }
});
