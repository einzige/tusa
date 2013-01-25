Ext.define('Tusa.controller.Home', {
    extend: 'Tusa.controller.Tab',
    requires: ['Tusa.view.Home'],

    config: {
        contentClass: 'Tusa.view.Home',
        routes: { 'home': 'index' },
        refs: { tab: '#home' },
    },
});
