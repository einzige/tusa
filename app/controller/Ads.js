Ext.define('Tusa.controller.Ads', {
    extend: 'Tusa.controller.Tab',

    config: {
        contentClass: 'Tusa.view.AdsList',

        routes: {
            'ads': 'index'
        },

        refs: {
            tab: '#ads',
        },
    }
});
