Ext.define('Tusa.controller.Categories', {
    extend: 'Tusa.controller.Tab',
    requires: ['Tusa.view.Categories'],

    config: {
        contentClass: 'Tusa.view.Categories',

        routes: { 'categories': 'index',
                  'categories/:id': 'show' },

        refs: { tab: '#categories', list: '#CategoriesList' }
    },

    show: function(categoryId) {
        var list = this.getList();
        var store = list.getStore();

        var navigateToNode = function() {
            var currentNode = store.findRecord('slug', categoryId);

            if (currentNode) {
                if (currentNode.data.leaf) {
                    Tusa.app.redirectTo(['categories', categoryId, 'ads'].join('/'));
                } else {
                    list.goToNode(currentNode);
                }
            } else {
                Tusa.app.redirectTo('categories');
            }
        }

        if (store.isLoaded()) {
            navigateToNode();
        } else {
            store.on('load', function() {
                navigateToNode();
            });
        }
    }
});
