Ext.define("Tusa.view.FavoritesList", {
    extend: 'Ext.dataview.List',
    xtype: 'favoriteslist',

    config: {
        favorites: undefined,
        disableSelection: true,
        id: 'FavoritesList',

        itemTpl: new Ext.XTemplate(
            '<tpl if="this.special(ordering)">',
            "<div class='Ad ad special'>",
            '<tpl else>',
            '<div class="Ad ad">',
            '</tpl>',
            "<div>{text}<div>", "<b>{tel}</b>", "&nbsp;<small>{date}</small>",
            "</div>",
            {
                special: function(ordering) { return ordering == '1'; }
            })
    },

    initialize: function() {
        this.callParent(arguments);
        this.setStore(Tusa.app.favorites);

        var toolbar = Ext.create('Ext.Toolbar', {docked: 'top'});
        this.add(toolbar);

        toolbar.add({ xtype: 'spacer' });

        var searchField = {
            xtype: 'searchfield',
            placeHolder: 'Search...',
            listeners: {
                scope: this,
                clearicontap: this.onSearchClearIconTap,
                keyup: this.onSearchKeyUp
            }
        };

        toolbar.add(searchField);
        toolbar.add({ xtype: 'spacer' });
    },

    /**
     * Called when the search field has a keyup event.
     *
     * This will filter the store based on the fields content.
     */
    onSearchKeyUp: function(field) {
        //get the store and the value of the field
        var value = field.getValue(),
            store = this.getStore();

        //first clear any current filters on thes tore
        store.clearFilter();

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('text').match(search) || record.get('tel').match(search);

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
    },

    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function() {
        //call the clearFilter method on the store instance
        this.getStore().clearFilter();
    }
});