Ext.define("Tusa.controller.Tab", {
    extend: "Ext.app.Controller",

    config: {
        before: {
            index: ['setTab', 'initContainer'],
            show:  ['setTab', 'initContainer']
        },

        contentContainer: undefined,
        contentClass:     undefined,
        containerId:      undefined,

        refs: {
            tabs: '#Tabs',
            tab: '#please-set-the-tab'
        }
    },

    index: function() {

    },

    initContainer: function(action) {
        console.log([this.self.getName(), action.getAction()].join('#'));

        if(this.getContentClass()) {
            var container = Ext.DomQuery.selectNode('#' + this.getContainerId());

            if(! container && ! this.getContentContainer()) {
                var contentContainer = Ext.create(this.getContentClass(), {id: this.getContainerId()});

                this.setContentContainer(contentContainer);
                this.getTab().add(contentContainer);
            }
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
