Ext.define('Tusa.controller.Ads', {
    extend: 'Tusa.controller.Tab',

    config: {
        routes: {
            'ads': 'index'
        },

        refs: {
            tab: '#ads'
        },
    },

    index: function() {
        this.callParent(arguments);
    }
});
