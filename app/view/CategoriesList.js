Ext.define('Tusa.view.CategoriesList', {
    extend: 'Ext.NestedList',
    xtype: 'categorieslist',
    require: ['Ext.view.categories.TitleBar'],

    config: {
        store: 'Categories',
        displayField: 'name',
        title: 'Категории объявлений',


        toolbar: {
            docked: 'top', xtype: 'titlebar', ui: 'dark', inline: true,
            items: [
                {
                    iconCls: 'home',
                    iconMask: true,
                    align: 'right'
                }
            ]
        },

        listeners: {
            itemtap: function(that, list, index, target, record, e, eOpts) {
                Tusa.app.redirectTo("categories/"+record.data.slug);
            }
        }
    },
});
