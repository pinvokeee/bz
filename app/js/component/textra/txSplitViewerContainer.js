const txSplitViewerContainerComponent = 
{
    components:
    {
        "splitter": splitterComponent,
        "tabPage": tabPageComponent,
        "listBox": listBoxComponent,
        "treeView": treeViewComponent,
        "tripleList": tripleListComponent,
        "breadCrumbBar": breadCrumbBarComponent,
    },

    data()
    {
        return {
            
            store: new templateStore(),
            
            treeViewProperty:
            {
                _selectionNode: null,
                _bodyText: "",

                _isChanged: false,
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
                this._isChanged = true;
                this.treeViewProperty._bodyText = value;
            }
        },

        textareaBackground:
        {
            get() 
            {
                if (this._isChanged) return "#FFFFFF";

            }
        }
    },

    methods:
    {
        changeText()
        {

        },

        changeSelectionNode(newNode)
        {
            this.treeViewProperty._selectionNode = newNode;
            this.bodyText = newNode.body.body;
            this._isChanged = false;
        },

        changeSelectBreadCrumb(node)
        {
            this.$refs.comTreeView.setSelectionNode(node);
        },

        keyDown(e)
        {
            console.log(e);
        }
    },

    template:`

        <div class="box" tabIndex="0" @keydown="keyDown">

            <div class="list">
                <ul class="nav nav-pills mb-3">   
                    
                    <li class="nav-item">
                        <button class="nav-link active" data-bs-target="#treeview" data-bs-toggle="tab">ツリー</button>
                    </li>
                    
                    <li class="nav-item">
                        <button class="nav-link" data-bs-target="#a" data-bs-toggle="tab">トリプルリスト</button>
                    </li>

                    <li class="nav-item">
                        <a href="#a" class="nav-link" data-bs-toggle="tab">リスト</a>
                    </li>

                </ul>

                <div class="tab-content" style="height: 100%;">
                    <div id="treeview" class="tab-pane active">
                        <treeView ref="comTreeView" :nodes="store.nodes" :onChangeSelectionNode="changeSelectionNode">
                        </treeView>
                    </div>

                    <div id="a" class="tab-pane">
                        <tripleList ref="a" :nodes="store.nodes" :onChangeSelectionNode="changeSelectionNode">
                        </tripleList>
                    </div>
                </div>

            </div>

            <splitter></splitter>
            
            <div class="browser">

                <breadCrumbBar :targetNode="selectionNode" :onClickBreadCrumb="changeSelectBreadCrumb"></breadCrumbBar>

                <textarea v-model="bodyText">
                </textarea>

            </div>
        </div>
        
    `

}