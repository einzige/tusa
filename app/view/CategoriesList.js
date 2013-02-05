Ext.define('Tusa.view.CategoriesList', {
    extend:  'Ext.NestedList',
    xtype:   'categorieslist',
    require: ['Ext.view.categories.TitleBar'],

    config: {
        store:        'Categories',
        displayField: 'name',
        title:        'Категории объявлений',

        detailCard:   { xtype: 'adslist' },

        toolbar: {
            cls:    'small-text',
            docked: 'top',
            xtype:  'titlebar',
            ui:     'dark',
            inline: true,
            layout: {
                align:     'center',
                pack:      'center',
                animation: 'fade'
            },
            items: [
                {
                    iconCls:  'home',
                    align:    'right',
                    iconMask: true
                }
            ]
        },

        listeners: {
            back: function(that, record) {
                var parent = record.parentNode;

                if (parent.data.leaf) {
                    if (parent.parentNode) { parent = parent.parentNode; }
                }

                if (parent.data.slug) {
                    Tusa.app.redirectTo(["categories", parent.data.slug].join('/'));
                } else {
                    Tusa.app.redirectTo('categories');
                }
            },

            itemtap: function(that, list, index, target, record, e, eOpts) {
                if(record.data.leaf) {
                    Tusa.app.redirectTo(["categories", record.data.slug, 'ads'].join('/'));
                } else {
                    Tusa.app.redirectTo(["categories", record.data.slug].join('/'));
                }
            }
        }
    },

    goToCategoryNode: function(currentNode) {
        //this.getLayout().setAnimation('fade');
        this.goToNode(currentNode);
        //this.fireEvent('listchange', this, this.getLastActiveList());
        //this.setLastNode(currentNode);
        //this.syncToolbar();
    },

    goToRootNode: function() {
        this.goToNode(this.getStore().getRoot());
    },

    navigateBySlug: function(slug, opts) {
        var list  = this;
        var store = this.getStore();

        var navigate = function () {
            var currentNode = store.findRecord('slug', slug);

            if (currentNode) {
                if (currentNode.data.leaf) {
                    list.goToLeaf(currentNode);
                } else {
                    var fakeNode = currentNode.appendChild({text: 'LeafFakeNode', leaf: 'true'});
                    list.goToLeaf(fakeNode);
                }
            } else {
                if (opts) {
                    if (typeof(opts['fail']) === 'function') { opts['fail'](); }
                }
            }
        };
        store.isLoaded() ? navigate() : store.on('load', navigate);
    },

    /**
     * Method to handle going to a specific node within this nested list. Node must be part of the
     * internal {@link #store}.
     * @param {Ext.data.NodeInterface} node The specified node to navigate to.
     */
    goToNode: function (node) {
        if (!node) {
            return;
        }

        var me = this,
            activeItem = me.getActiveItem(),
            detailCard = me.getDetailCard(),
            detailCardActive = detailCard && me.getActiveItem() == detailCard,
            reverse = me.goToNodeReverseAnimation(node),
            firstList = me.firstList,
            secondList = me.secondList,
            layout = me.getLayout(),
            animation = (layout) ? layout.getAnimation() : null,
            list;

        //if the node is a leaf, throw an error
        if (node.isLeaf()) {
            throw new Error('goToNode: passed a node which is a leaf.');
        }

        //if we are currently at the passed node, do nothing.
        if (node == me.getLastNode() && !detailCardActive) {
            return;
        }

        // NOTE: changed
        if (detailCardActive && animation) {
            animation.setReverse(true);
        }

        if (firstList && secondList) {
            //firstList and secondList have both been created
            activeItem = me.getActiveItem();

            me.setLastActiveList(activeItem);
            list = (activeItem == firstList) ? secondList : firstList;
            list.getStore().setNode(node);
            node.expand();

            if (animation) {
                animation.setReverse(reverse);
            }
            me.setActiveItem(list);
            list.deselectAll();
        }
        else if (firstList) {
            //only firstList has been created
            me.setLastActiveList(me.getActiveItem());
            me.setActiveItem(me.getList(node));
            me.secondList = me.getActiveItem();
        }
        else {
            //no lists have been created
            me.setActiveItem(me.getList(node));
            me.firstList = me.getActiveItem();
        }

        me.fireEvent('listchange', this, me.getActiveItem());

        me.setLastNode(node);

        me.syncToolbar();
    },

    /**
     * @private
     */
    renderTitleText: function (node, forBackButton) {
        if (!node) {
            return 'error';
        }
        this.callParent([node, forBackButton]);
    }
});
