Ext.define('Tusa.view.AdsList', {
    extend: 'Ext.dataview.List',
    xtype: 'adslist',

    requires: ['Ext.plugin.ListPaging', 'Ext.plugin.PullRefresh'],

    config: {
        store: 'Ads',
        id: 'AdsList',
        disableSelection: true,

        /*onItemDisclosure: {
            handler: function() {
            }
        },*/

        listeners: {
            itemtap: function(me, not_me, element, record) {
                var cnt = Tusa.app.favorites.getCount();

                if (Tusa.app.favorites.findRecord('id', record.data.id)) {
                    Tusa.app.favorites.remove(record);
                    //element.removeCls('favorite');
                } else {
                    Tusa.app.favorites.add(record);
                    //element.addCls('favorite');
                }
                Ext.getCmp('favorites').tab.setBadgeText(cnt);
                Ext.getCmp('favoritesButton').setBadgeText(cnt);
                me.refresh();
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
                  '<tpl if="this.special(ordering) && !this.favorite(id)">',
                  "<div class='Ad ad special'>",
                  '<tpl elseif="!this.special(ordering) && this.favorite(id)">',
                  "<div class='Ad ad favorite'>",
                  '<tpl elseif="this.special(ordering) && this.favorite(id)">',
                  "<div class='Ad ad special favorite'>",
                  '<tpl else>',
                  '<div class="Ad ad">',
                  '</tpl>',
                    "<div>{text}</div>", "<b>{tel}</b>", "&nbsp;<small>{date}</small>",
                  "</div>",
                  {
                      special: function(ordering) { return ordering == '1'; },
                      favorite: function(id) { return !!Tusa.app.favorites.findRecord('id', id); }
                  })
    }
});
