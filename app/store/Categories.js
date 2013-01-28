Ext.define('Tusa.store.Categories', {
    extend: 'Ext.data.TreeStore',

    config: {
        model: 'Tusa.model.Category',
        defaultRootProperty: 'items',

        proxy: {
            type: 'ajax',
            url: 'http://localhost/Tusa/json/categories.json'
        }
    }
});
