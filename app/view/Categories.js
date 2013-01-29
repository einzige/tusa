Ext.define("Tusa.view.Categories", {
    extend: "Ext.Panel",
    requires: ['Tusa.view.CategoriesList'],

    config: {
        layout: 'vbox',

        items: [
            {
                id: 'CategoriesList',
                xtype: 'categorieslist',
                flex: '3'
            }
        ]
    }
});
