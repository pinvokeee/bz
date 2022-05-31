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
