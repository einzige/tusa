Ext.define("Tusa.view.Categories", {
    extend: "Ext.Panel",
    requires: ['Tusa.view.CategoriesList'],

    config: {
        layout: 'vbox',

        items: [

            {
                id: 'CategoriesList',
                xtype: 'categorieslist',
                flex: 3
            },
            {
                docked: 'bottom',
                xtype: 'button',
                id: 'SeeAllButton',
                hidden: true,
                layout: { pack: 'center', align: 'center' },
                flex: 1,
                text: 'смотреть все объявления этой рубрики'
            }
        ]
    }
});
