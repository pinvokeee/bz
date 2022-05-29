const breadCrumbBarComponent = 
{
    props:
    {
        targetNode:
        {
            type: Object
        },

        onClickBreadCrumb:
        {
            type: Function
        }
    },

    computed:
    {
        crumbList:
        {
            get()
            {
                let n = this.targetNode;
                if (n == null) return;

                const breadCrumb = [];
                
                while (n.parentNode != null)
                {
                    breadCrumb.push(n);
                    n = n.parentNode;
                }

                breadCrumb.reverse();
                return breadCrumb;
            }
        },
    },

    methods:
    {
        getCaption(node)
        {
            return node.body.caption;
        }
    },

    template:
    `
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="crumb in crumbList">
                <a href="#" @click="onClickBreadCrumb(crumb);">{{getCaption(crumb)}}</a>             
            </li>
            </ol>
        </nav>
    `

}