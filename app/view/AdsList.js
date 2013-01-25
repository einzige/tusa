Ext.define('Tusa.view.AdsList', {
    extend: 'Ext.dataview.List',
    xtype: 'adslist',

    requires: ['Ext.plugin.ListPaging', 'Ext.plugin.PullRefresh'],

    config: {
        store: 'Ads',

        plugins: [{
                      xclass: 'Ext.plugin.ListPaging',
                      autoPaging: true
                  },
                  {
                      xclass: 'Ext.plugin.PullRefresh',
                      pullRefreshText: 'Обновить список объявлений!'
                  }],
        itemTpl: [
                  "<div class='Ad'>",
                    "<div>{text}<div>", "<b>{tel}</b>", "&nbsp;<small>{date}</small>",
                  "</div>"
                 ].join("")
    }
});
