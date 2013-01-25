Ext.define('Tusa.controller.Ads', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'ads': 'index'
        },

        refs: {
            tabs: '#Tabs',
            adsTab: '#AdsTab'
        },
    },

    index: function() {
        this.getTabs().setActiveItem(this.getAdsTab());
        console.log('Ads loaded');
    }
});
