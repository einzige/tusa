//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Tusa': 'app'
});
//</debug>

Ext.application({
    name: 'Tusa',

    requires: [
        'Ext.MessageBox'
    ],

    models: ['Ad', 'Category'],
    views: ['Main', 'CategoriesList', 'Categories', 'AdsList', 'FavoritesList'],
    stores: ['Ads', 'Categories', 'Favorites'],
    controllers: ['Tab', 'About', 'Ads', 'Categories', 'Home', 'List', 'Favorites'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    config: {
        tabActivated: false
    },

    sourceHost: 'http://192.168.1.112:3000',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Tusa.view.Main'));

        Tusa.app.favorites = Ext.create('Tusa.store.Favorites');
        Tusa.app.tabsHistory = {};
    },

    restoreTabHistory: function(tabId) {
        var history = Tusa.app.tabsHistory;
        Tusa.app.redirectTo(history[tabId] ? history[tabId] : tabId);
    },

    saveTabHistory: function(tabId) {
        var history = Tusa.app.tabsHistory;

        var actions = Tusa.app.getHistory().getActions();
        var lastAction = actions[actions.length - 2];

        // Remember history for the stale tab
        if (lastAction) {
            history[tabId] = lastAction.getUrl();
        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
