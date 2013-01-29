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

        if (store.isLoaded()) {
            var currentNode = store.findRecord('slug', categoryId);
            list.goToNode(currentNode);
        } else {
            store.on('load', function() {
                var currentNode = store.findRecord('slug', categoryId);
                console.log(currentNode.data.leaf);
                if (currentNode.data.leaf) {
                    console.log(['categories', categoryId, 'ads'].join('/'));
                    Tusa.app.redirectTo(['categories', categoryId, 'ads'].join('/'));
                } else {
                    list.goToNode(currentNode);
                }
            });
        }
    }
});
