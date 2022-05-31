const tripleListComponent = 
{
    components:
    {
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
                console.log(value);
            }
        }

    },

    methods:
    {
        selectNodeChange(e)
        {
            
        }
    },

    template: `

        <div class="tripleListComponent flex">
            <div class="twinSplitBox">
                <div class="twinList">
                    <select class="parentNodeListBox" size="2" v-model="node1">
                        <option v-for="node in nodes" :key="node.caption" @select="selectNodeChange">{{node.caption}}</option>
                    </select>
                    <select class="parentNodeListBox" size="2">
                    </select>
                </div>
                <splitter></splitter>
                <div class="singleList"> 
                    <select class="parentNodeListBox" size="2">
                    </select>
                </div>
            </div>
        </div>

    `
}