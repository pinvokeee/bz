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

            _bodyText: "",
            _isChanged: false,

            treeViewProperty:
            {
                _selectionNode: null,
            },

            categoryViewProperty:
            {
                _selectionNode: null,
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
                return this._bodyText;
            },

            set(value)
            {
                this._isChanged = true;
                this._bodyText = value;
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

        changeTreeViewSelectionNode(newNode)
        {
            this.treeViewProperty._selectionNode = newNode;
            this.bodyText = newNode.body.body;
        },
        
        changeTreeViewSelectionNode(newNode)
        {
            this.treeViewProperty._selectionNode = newNode;
            this.bodyText = newNode.body.body;
        },

        changeSelectBreadCrumb(node)
        {
            this.$refs.comTreeView.setSelectionNode(node);
        },

        keyDown(e)
        {
            console.log(e);
        },

        drop(e)
        {
            e.preventDefault();
            e.stopPropagation();
            this.store.generateFromDirectory (e.dataTransfer.items)
        },

        a(e)
        {
            console.log(e);

            this.store.generateFromFiles(e.target.files);

            // for (let i = 0; i < e.target.files.length; i++) 
            // {

            //     let file = e.target.files[i];
        
            //     // ディレクトリの相対パス
            //     let relativePath = file.webkitRelativePath;
        
            //     // ここではテキストファイルとして読み出してみる.
            //     let fileReader = new FileReader();
            //     fileReader.onload = event => {
                    
            //         // 内容を取得する.
            //         let text = event.target.result;
        
            //         // 表示してみる.
            //         console.log(relativePath, text);
            //     }
            //     fileReader.readAsText(file);
            // }
        }
    },

    template:`

        <input id="file" type="file" name="upfile[]" @change="a" webkitdirectory>

        <div class="box" tabIndex="0" @drop="drop" @keydown="keyDown">

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
                        <treeView ref="comTreeView" :nodes="store.nodes" :onChangeSelectionNode="changeTreeViewSelectionNode">
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