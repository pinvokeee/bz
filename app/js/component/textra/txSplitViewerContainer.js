const txSplitViewerContainerComponent = 
{
    components:
    {
        "treeView": treeViewComponent,
        "breadCrumbBar": breadCrumbBarComponent
    },

    data()
    {
        return {
            
            store: new templateStore(),
            
            treeViewProperty:
            {
                _selectionNode: null,
                _bodyText: "",
            },
        }
    },

    props:
    {

    },

    computed:
    {
        selectionNode:
        {
            get()
            {
                return this.treeViewProperty._selectionNode;
            }
        },

        bodyText:
        {
            get()
            {
                return this.treeViewProperty._bodyText;
            },

            set(value)
            {
                this.treeViewProperty._bodyText = value;
            }
        },
    },

    methods:
    {
        changeSelectionNode(newNode)
        {
            this.treeViewProperty._selectionNode = newNode;
            this.bodyText = newNode.body.body;
        },

        changeSelectBreadCrumb(node)
        {
            this.$refs.comTreeView.setSelectionNode(node);
        }
    },

    template:`

        <div class="box">

            <treeView ref="comTreeView" :nodes="store.nodes" :onChangeSelectionNode="changeSelectionNode">
            </treeView>
            
            <div class="browser">

                <breadCrumbBar :targetNode="selectionNode" :onClickBreadCrumb="changeSelectBreadCrumb"></breadCrumbBar>

                <textarea v-model="bodyText">
                </textarea>

            </div>
        </div>
        
    `

}