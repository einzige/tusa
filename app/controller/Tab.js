Ext.define("Tusa.controller.Tab", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            tabs: '#Tabs',
            tab: '#please-set-the-tab'
        },
        before: {
            index: 'setTab'
        }
    },

    index: function() {
        console.log(this.getTab().id + ' loaded');
    },

    setTab: function(action) {
        var tabs = this.getTabs();
        var activeItem = tabs.getActiveItem();
        var tab = this.getTab();

        console.log(activeItem, tab);

        if (activeItem !== tab) {
            tabs.setActiveItem(tab);
        }

        action.resume();
    }
});
