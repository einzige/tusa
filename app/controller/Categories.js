Ext.define('Tusa.controller.Categories', {
    extend:   'Tusa.controller.List',
    requires: ['Tusa.view.Categories'],

    config: {
        routes: {
            'categories':     'index',
            'categories/:id': 'show'
        }
    },

    index: function () {
        this.getList().goToRootNode();
    },

    show: function (categoryId) {
        this.getSeeAllButton().show();

        var list = this.getList();
        var store = list.getStore();

        list.setActiveItem(list.getLastActiveList());

        var navigate = function () {
            var currentNode = store.findRecord('slug', categoryId);

            if (currentNode) {
                if (currentNode.data.leaf) {
                    Tusa.app.redirectTo(['categories', categoryId, 'ads'].join('/'));
                } else {
                    list.goToCategoryNode(currentNode);
                }
            } else {
                Tusa.app.redirectTo('categories');
            }
        };

        store.isLoaded() ? navigate() : store.on('load', navigate);
    }
});
