Ext.define('Tusa.controller.Categories', {
    extend: 'Tusa.controller.Tab',
    requires: ['Tusa.view.CategoriesList'],

    config: {
        contentClass: 'Tusa.view.CategoriesList',

        routes: {
            'categories': 'index'
        },

        refs: {
            tab: '#categories',
        },
    }
});
