Ext.define("Tusa.view.Page", {
    extend: "Ext.Panel",
    xtype: 'pagepanel',

    config: {
        baseUrl: Tusa.app.sourceHost + '/pages/',
        pageId: '',
        styleHtmlContent: true
    },

    initialize: function() {
        this.callParent(arguments);
        var panel = this;

        Ext.data.JsonP.request({
            url: this.getUrl(),
            method: 'GET',

            success: function(resp) {
                panel.setHtml(resp.html);
            },

            failure: function(resp) {
                panel.setHtml("Failed to load requested url --" + resp.responseText);
            }
        });
    },

    getUrl: function() {
        return this.getBaseUrl() + this.getPageId();
    }
});
