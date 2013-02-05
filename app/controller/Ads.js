Ext.define('Tusa.controller.Ads', {
    extend:   'Tusa.controller.List',
    requires: ['Tusa.view.AdsList'],

    config: {
        routes: { 'categories/:category_id/ads': 'index' }
    },

    // Loads ads by given categoryId
    index: function (categoryId) {
        var list = this.getList();
        var store = list.getStore();

        // Shows a list of ads in a detail view by given categoryId
        var navigate = function() {
            list.navigateBySlug(new RegExp(categoryId), {
                fail: function() {
                    Tusa.app.redirectTo('categories');
                }
            });
        };
        store.isLoaded() ? navigate() : store.on('load', navigate);

        // Loads ads into the detail card
        list.getDetailCard().getStore().loadCategory(categoryId);
    }
});
