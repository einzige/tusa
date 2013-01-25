Ext.define('Tusa.controller.Home', {
    extend: 'Ext.app.Controller',

    config: {
        routes: { 'home': 'show' },

        refs: {
            tabs: '#Tabs',
            homeTab: '#HomeTab'
        },
    },

    show: function() {
        this.getTabs().setActiveItem(this.getHomeTab());
        console.log('Home loaded');
    }
});
