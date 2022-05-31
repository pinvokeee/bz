const searchBoxComponent =
{
    props:
    {
        onInputChange:
        {
            type: Function,
            default: this.input
        }
    },

    methods:
    {
        input(e)
        {
            console.log(e);
        }

    },

    template:`
        <div class="searchBoxComponent">
            <input class="searchBoxComponent keyword" @input="onInputChange" type="text" value="">
        </div>

    `
}