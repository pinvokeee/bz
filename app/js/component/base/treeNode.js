const treeNodeComponent = 
{
    name: "treeNode",

    props:
    {
        body:
        {
            default: null,
            type: Object
        },

        parentNode:
        {
            type: Object
        },

        onClickNode:
        {
            type: Function
        },

        onChangeSelectionNode:
        {
            type: Function
        }
    },

    data()
    {
        return {
                
            _selected: false,
            _isOpen: false,
        };
    },

    computed:
    {
        selected:
        {
            get()
            {
                return this._selected;
            },
            set(value)
            {
                this._selected = value;
            }
        },

        classObject:
        {
            get()
            {
                if (this.selected) return ["summary", "selected"];
                return "summary";
            }
        },

        isOpen:
        {
            get()
            {
                return this._isOpen;
            },

            set(value)
            {
                this._isOpen = value;
            }
        }
    },

    methods:
    {
        isExistsChild()
        {
            return this.body != null && this.body.childNodes.length > 0;
        },

        sngClick(e)
        {
            this.onClickNode(this);
            console.log("SING");
        },

        dblClick(e)
        {
            this.isOpen = !this.isOpen;
        },
    },

    template:`
        <div >
            <div class="container">
                <div :class="classObject" @click="sngClick" @dblclick="dblClick">{{body.caption}}</div>
                <template v-if="isExistsChild()">
                <div v-show="isOpen">
                    <template v-for="child in body.childNodes" :key="child.caption">
                        <treeNode class="treeNode" :body="child" :parentNode="this" :onClickNode="onClickNode">
                        </treeNode>
                    </template> 
                </div>
                </template>
            </div>
        </div>
    `
    

    // template:
    // `
    //     <details v-if="isExistsChild()" @toggle="opened" :open="isOpen ? '' : null">
    //         <summary :class="classObject" @click="clickSummary" @dblclick="dblClick">{{body.caption}}</summary>
    //         <template v-for="child in body.childNodes" :key="child.caption">
    //             <treeNode class="treeNode" :body="child" :parentNode="this" :onClickNode="onClickNode">
    //             </treeNode>
    //         </template> 
    //     </details> 
    //     <div v-else :class="classObject" @click="clickSummary">
    //         <span>{{body.caption}}</span>
    //     </div>
    // `
}