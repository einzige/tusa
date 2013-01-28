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
            this.setActiveItem(window.location.hash);
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
                layout: 'fit',
                id: 'ads',

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
                        title: 'Поиск объявлений'
                    }
                ]
            },
            {
                title: 'Статьи',
                iconCls: 'compose',
                id: 'categories',

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
                        title: 'Категории'
                    }
                ]
            },
            {
                title: 'Размещение',
                iconCls: 'add',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Разместить объявление'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
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
