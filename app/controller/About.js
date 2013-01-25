Ext.define('Tusa.controller.About', {
    extend: 'Tusa.controller.Tab',
    requires: ['Tusa.view.About'],

    config: {
        contentClass: 'Tusa.view.About',
        routes: { 'about': 'index' },
        refs: { tab: '#about' },
    },
});
