Ext.define("Tusa.view.Home", {
    extend: "Tusa.view.Page",
    requires: ['Ext.field.Search'],
    xtype: 'homepanel',

    config: {
        pageId: 'home',

        items: [
            {
                xtype: 'toolbar',
                layout: 'fit',

                items: [
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            pack : 'center',
                            align: 'middle'
                        },

                        items: [
                            {
                                xtype: 'searchfield',
                                placeHolder: 'Поиск по объявлениям...',
                                flex: 10,
                            },
                            {
                                xtype: 'button',
                                flex: 2,
                                text: 'Найти!'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
