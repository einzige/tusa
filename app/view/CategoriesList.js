Ext.define('Tusa.view.CategoriesList', {
    extend: 'Ext.NestedList',
    xtype: 'categorieslist',

    config: {
        store: 'Categories',
        displayField: 'name'
    }
});
