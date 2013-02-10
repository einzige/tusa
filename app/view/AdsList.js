Ext.define('Tusa.view.AdsList', {
    extend: 'Ext.dataview.List',
    xtype: 'adslist',

    requires: ['Ext.plugin.ListPaging', 'Ext.plugin.PullRefresh'],

    config: {
        store: 'Ads',
        id: 'AdsList',
        onItemDisclosure: {
            scope: 'addToFavorites',
            handler: function(record, element) {
                Tusa.app.favorites.add(record);
            }
        },

        plugins: [{
                      xclass: 'Ext.plugin.ListPaging',
                      autoPaging: true
                  },
                  {
                      xclass: 'Ext.plugin.PullRefresh',
                      pullRefreshText: 'Обновить список объявлений!'
                  }],
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
    }
});
