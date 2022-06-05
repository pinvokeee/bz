const tripleListComponent = 
{
    components:
    {
        "treeNode": treeNodeComponent,
        "splitter": splitterComponent
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
            
            _node1: null,
            _node2: null,
            _templateNode: null
        }
    },

    computed:
    {

        node1: 
        {
            get()
            {
                return this._node1;
            },
            set(value)
            {
                this._node1 = value;
                this._node2 = null;
                this._templateNode = null;
                //this.onChangeSelectionNode(value);
            }
        },

        node2: 
        {
            get()
            {
                return this._node2;
            },
            set(value)
            {
                this._node2 = value;
                this._templateNode = null;
                // this.onChangeSelectionNode(value);
            }
        },

        templateNode:
        {
            get()
            {
                return this._templateNode;
            },
            set(value)
            {
                this._templateNode = value;
                this.onChangeSelectionNode(value);
            }
        }
    },

    methods:
    {
        selectNodeChange(e)
        {
            console.log(e);            
        }
    },

    template: `

        <div class="tripleListComponent flex">
            <div class="twinSplitBox">
                <div class="twinList">
                    <div>
                        <treeNode v-for="node in nodes" class="treeNode" :body="node" >
                                    
                        </treeNode>
                    </div>
                
                    <!--
                    <select class="parentNodeListBox" size="2">
                
                        <option v-for="node in nodes" :key="node.caption" @click="node1=node">{{node.caption}}</option>
                    </select>-->

                    <select class="parentNodeListBox" size="2">
                        <option v-if="node1 != null" v-for="node in node1.childNodes" :key="node.caption" @click="node2=node">{{node.caption}}</option>
                    </select>

                </div>
                <splitter></splitter>
                <div class="singleList"> 
                    
                    <select class="parentNodeListBox" size="2">
                        <option v-if="node2 != null" v-for="node in node2.childNodes" :key="node.caption" @click="templateNode=node">{{node.caption}}</option>
                    </select>

                </div>
            </div>
        </div>

    `
}