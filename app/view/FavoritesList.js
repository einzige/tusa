Ext.define("Tusa.view.FavoritesList", {
    extend: 'Ext.dataview.List',
    xtype: 'favoriteslist',

    config: {
        favorites: undefined,
        id: 'FavoritesList',

        itemTpl: new Ext.XTemplate(
            '<tpl if="this.special(ordering)">',
            "<div class='Ad ad special'>",
            '<tpl else>',
            '<div class="Ad ad">',
            '</tpl>',
            "<div>{text}<div>", "<b>{tel}</b>", "&nbsp;<small>{date}</small>",
            "</div>",
            {
                special: function(ordering) { return ordering == '1'; }
            })
    },

    initialize: function() {
        this.callParent(arguments);
        this.setStore(Tusa.app.favorites);
    }
});