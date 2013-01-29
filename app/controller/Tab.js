Ext.define("Tusa.controller.Tab", {
    extend: "Ext.app.Controller",

    config: {
        before: {
            index: ['setTab', 'initContainer'],
            show:  ['setTab', 'initContainer']
        },

        contentContainer: undefined,
        contentClass: undefined,

        refs: {
            tabs: '#Tabs',
            tab: '#please-set-the-tab'
        }
    },

    index: function() {

    },

    initContainer: function(action) {
        console.log(this.getTab().id + ' loaded');

        if( ! this.getContentContainer()) {
            var contentContainer = Ext.create(this.getContentClass());

            this.setContentContainer(contentContainer);
            this.getTab().add(contentContainer);
        }

        action.resume();
    },

    setTab: function(action) {
        var tabs       = this.getTabs();
        var activeItem = tabs.getActiveItem();
        var tab        = this.getTab();

        if (activeItem !== tab) {
            tabs.setActiveItem(tab);
        }

        action.resume();
    }
});
