Ext.define('Tusa.controller.List', {
    extend: 'Tusa.controller.Tab',

    config: {
        contentClass: 'Tusa.view.Categories',
        containerId:  'Categories',

        control: { seeAllButton: { tap: 'goToAds' } },

        before: {
            index: ['setTab', 'initContainer', 'hideSeeAllLink'],
            show:  ['setTab', 'initContainer', 'hideSeeAllLink']
        },

        refs: {
            list:         '#CategoriesList',
            seeAllButton: '#SeeAllButton',
            tab:          '#categories'
        }
    },

    goToAds: function () {
        Tusa.app.redirectTo([window.location.hash.replace('#', ''), 'ads'].join('/'));
    },

    hideSeeAllLink: function(action) {
        if (this.getSeeAllButton()) {
            this.getSeeAllButton().hide();
        }
        action.resume();
    }
});