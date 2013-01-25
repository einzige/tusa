Ext.define('Tusa.controller.Home', {
    extend: 'Tusa.controller.Tab',

    config: {
        routes: { 'home': 'index' },
        refs: { tab: '#home' },
    },

    index: function() {
        console.log('at home');
    }
});
