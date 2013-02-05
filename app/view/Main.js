Ext.define('Tusa.view.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'main',
    id:    'Tabs',

    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Img'
    ],

    initialize: function() {
        this.callParent(arguments);
        if (window.location.hash) {
            this.setActiveItem(window.location.hash.split('/')[0]);
        }
    },

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Главная',
                iconCls: 'home',
                id: 'home',

                styleHtmlContent: true,
                scrollable: true,
                style: 'background: white;',

                listeners: {
                    activate: function() {
                        if (this.visited) {
                            if (window.location.hash !== "#" + this.id) {
                                Tusa.app.redirectTo(this.id);
                            }
                        } else {
                            this.visited = true;
                        }
                    }
                },

                items: [
                    {
                        xtype: 'image',
                        src: 'http://gazetashans.ru/img/logo.png',
                        height: 100
                    },
                    {
                      xtype: 'spacer',
                      height: 20
                    }
                ]
            },
            {
                title: 'Объявы',
                iconCls: 'search',
                id: 'categories',
                layout: 'fit',

                listeners: {
                    activate: function() {
                        if (window.location.hash && window.location.hash.split('/')[0] !== "#" + this.id) {
                            Tusa.app.redirectTo(this.id);
                        }
                    }
                }
            },
            {
                title: 'О нас',
                iconCls: 'info',
                scrollable: true,
                id: 'about',

                listeners: {
                    activate: function() {
                        if (window.location.hash !== "#" + this.id) {
                            Tusa.app.redirectTo(this.id);
                        }
                    }
                },

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Об издании'
                    }
                ]
            }
        ]
    }
});
