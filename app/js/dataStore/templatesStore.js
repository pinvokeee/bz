class templateStore
{
    constructor()
    {
        this.name = "Test1";
        this.nodes = [];

        this.SelectionNode = null;

        this.Test();
    }

    onChangeSelectionNode(value)
    {
        this.componentStates.selectionNode = value;
        this.bodyText = value.body.body;
    }

    getBodyText()
    {
        return this.componentStates.bodyText;
    }

    setBodyText(value)
    {
        console.log(value);
        this.componentStates.bodyText = value;
    }

    Test = () =>
    {
        const temp = new template();
        temp.caption = "ABC";
        temp.text = "Test";

        const temp2 = new template();
        temp2.caption = "DEF";
        temp2.body = "あかさたな";
        temp2.text = "AIUEO";

        const temp3 = new template();
        temp3.caption = "GHR";
        temp3.text = "TESt";

        const temp4 = new template();
        temp4.caption = "XYZ";
        temp4.text = "XYZ";

        const temp5 = new template();
        temp5.caption = "GHJ";
        temp5.text = "GHJ";

        temp.childNodes.push(temp2);
        temp2.childNodes.push(temp3);

        temp4.childNodes.push(temp5);

        temp2.childNodes.push(temp4);

        temp3.body = "aaaaiiii\nccccc\nbbbb";

        const temp11 = new template();
        temp11.caption = "!!!";
        temp11.body = "表示される？"

        const temp12 = new template();
        temp12.caption = "???";
        temp12.body = "AAAAAAAAAAAAAAAAAAAAAAAAA";

        temp11.childNodes.push(temp12);

        this.nodes.push(temp);
        this.nodes.push(temp11);



    }

    
    generateFromFiles = (files) =>
    {
        const dir = [];

        for (const file of files)
        {
            const path = file.webkitRelativePath;
            let last_dir = dir;

            path.split("/").forEach((name, index) =>    
            {
                if (path.split("/").length - 1 > index)
                {
                    if (last_dir[name] == null) last_dir[name] = [];
                    last_dir = last_dir[name];
                }
                else
                {
                    last_dir.push(name);
                }
            });
        }

        console.log(dir);
    }

    generateFromDirectory = async (dataTransferItems) =>
    {
        const files = dataTransferItems;

        console.log(files);

        const arr = [];

        for (const f of files)
        {
            const entry = f.webkitGetAsEntry();   
            console.log(entry);         
            await this.createNodeFromEntry(entry, []);
        }

        console.log(arr);
    }

    createNodeFromEntry = async (entry, nodes) =>
    {    
        // const d_node = new template();
        // d_node.caption = entry.name;

        // window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        // window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;        

        // let dirReader = entry.createReader();
        // let entries = [];
      
        // let getEntries = function() {
        //   dirReader.readEntries(function(results) {
        //     if (results.length) {
        //       entries = entries.concat(toArray(results));
        //       getEntries();
        //     }
        //   }, function(error) {
        //       console.log(error);
        //     /* handle error -- error is a FileError object */
        //   });
        // };
      
        // getEntries();
        // return entries;
      

        // if (entry.isDirectory)
        // {
        //     console.log(entry);

        //     entry.getDirectory("", {}, (e) =>
        //     {
        //         console.log(e);
        //     }, (aa) => console.log(aa));

        //     // const directoryReader = entry.createReader();

        //     // directoryReader.readEntries(entries => 
        //     // {
        //     //     entries.forEach(e => console.log(e));
        //     //     console.log(entries);
        //     // }, (ee) => console.log(ee));

        //     // const entries = await new Promise(resolve => 
        //     // {
        //     //     directoryReader.readEntries(entries => 
        //     //     {
        //     //         console.log(entries);
        //     //       resolve(entries);
        //     //       console.log(entries);
        //     //     });
        //     // });

            
      
        // }

        // console.log(info);

        // info.getDirectory(info.fullPath, null, (e) =>
        // {
        //     console.log(e);
        // });

        // console.log()

        // for (const dir of info.getDirectory())
        // {
        //     this.createNode(dir, d_node.childNodes);  
        // }

        // for (const file of info.getFile())
        // {
        //     const f_node = new template();
        //     f_node.caption = file.name;
        // }

        //nodes.push(d_node);
        //console.log(nodes);
    }
}

class template
{
    constructor()
    {
        this.caption = "";
        this.text = "";
        this.body = "";

        this.childNodes = [];
    }
}
