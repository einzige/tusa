Ext.define('Tusa.view.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'main',
    id:    'Tabs',

    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Img',
        'Tusa.view.AdsList'
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
                      xtype: 'spacer'
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',

                        items: [
                            {
                                xtype: 'image',
                                src: 'http://gazetashans.ru/covers/pictures/674/main_Shans_03_01.jpg?1358486265',
                                height: 218,
                                width: 175,
                                flex: 1
                            },
                            {
                                xtype: 'panel',
                                styleHtmlContent: true,
                                html: '<h4 style="text-align: center">«Шанс» — полезный рекламно-информационный еженедельник.</h4><p style="text-align: justify">В «Шансе» как в справочнике, можно быстро найти нужную информацию о товарах и услугах для вас и вашего дома. Изучить полезные советы для потребителей, познакомиться с мнениями специалистов в различных областях. А также посмотреть программу телепередач и почитать новости о жизни "звезд".</p>',
                                flex: 3
                            }
                        ]
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
                      xtype: 'spacer'
                    },
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

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Поиск объявлений'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            },
/*            {
                title: 'Конкурсы',
                iconCls: 'star',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Конкурсы'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            },
*/
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

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Об издании'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
