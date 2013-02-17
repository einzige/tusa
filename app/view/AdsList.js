Ext.define('Tusa.view.AdsList', {
    extend: 'Ext.dataview.List',
    xtype: 'adslist',

    requires: ['Ext.plugin.ListPaging', 'Ext.plugin.PullRefresh'],

    config: {
        store: 'Ads',
        id: 'AdsList',
        disableSelection: true,

        onItemDisclosure: {
            scope: 'addToFavorites',
            handler: function(record, element) {
                element.toggleCls('favorite');

                if (Tusa.app.favorites.findRecord('id', record.data.id)) {
                    Tusa.app.favorites.remove(record);
                    element.removeCls('favorite');
                } else {
                    Tusa.app.favorites.add(record);
                    element.addCls('favorite');
                }
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
                  '<tpl if="this.favorite(id)">',
                  "<div style='float:fight'>STAR</div>",
                  '</tpl>',
                  {
                      special: function(ordering) { return ordering == '1'; },
                      favorite: function(id) { return !!Tusa.app.favorites.findRecord('id', id); }
                  })
    }
});
