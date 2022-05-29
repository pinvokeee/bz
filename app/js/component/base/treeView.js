const treeViewComponent = 
{
    components:
    {
        "treeNode": treeNodeComponent,
    },

    props:
    {
        nodes:
        {
            default: null,
            type: Array
        },

        onChangeSelectionNode:
        {
            type: Function
        }
    },

    data()
    {
        return {
            _selectionNode: null,
        };
    },

    methods:
    {
        clickNode(e)
        {
            if (this.SelectionNode == e) return;
            this.SelectionNode = e;
        },

        setSelectionNode(node)
        {
            this.SelectionNode = node;
        }
    },

    computed:
    {
        SelectionNode:
        {
            get()
            {
                return this._selectionNode;
            },

            set(value)
            {
                if (this._selectionNode != null) this._selectionNode.selected = false;

                this._selectionNode = value;
                this._selectionNode.selected = true;

                if (this.onChangeSelectionNode != null) this.onChangeSelectionNode(value);
            }
        }
    },

    template:
    `
        <template v-if="nodes != null">
            <div class="list">
                <div v-for="node in nodes">
                    <treeNode class="treeNode" :body="node" :onClickNode="clickNode" :parentNode="node">
                        
                    </treeNode>
                </div>
            </div>
        </template>
    `


}