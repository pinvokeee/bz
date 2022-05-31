const tabPageComponent = 
{
    props:
    {
        tabName:
        {
            default: "tab",
            type: String
        }
    },

    methods:
    {
        
    },

    template:`
    
        <li class="nav-item" role="presentation">
        <button class="nav-link active" data-bs-toggle="tab" type="button">{{tabName}}</button>
        </li>

        <div style="padding: 6px">          
        <slot></slot>
        </div>
    
    `
}