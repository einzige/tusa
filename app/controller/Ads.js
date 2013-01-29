Ext.define('Tusa.controller.Ads', {
    extend: 'Tusa.controller.Tab',
    requires: ['Tusa.view.AdsList'],

    config: {
        contentClass: 'Tusa.view.AdsList',

        routes: {
            'categories/:category_id/ads': 'index'
        },

        refs: {
            tab: '#ads'
        }
    }
});
