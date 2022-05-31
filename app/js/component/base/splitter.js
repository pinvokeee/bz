const splitterComponent =
{
    data()
    {
        return {
            
            startPosX: false,
            _canDrag: false

        }
    },

    computed:
    {
        canDrag:
        {
            get()
            {
                return this._canDrag;
            },

            set(value)
            {
                this._canDrag = value;

                if (this._canDrag)
                {
                    document.addEventListener("mouseup", this.mouseUp);
                    document.addEventListener("mousemove", this.mouseMove);
                }
                else
                {
                    document.removeEventListener("mouseup", this.mouseUp);
                    document.removeEventListener("mousemove", this.mouseMove);
                }
            }
        }
    },

    methods:
    {
        mouseDown(e)
        {
            const target = this.$el.previousElementSibling;

            this.startPosX = e.x;
            this.canDrag = true;

            console.log(e.x, e);
        },

        mouseUp(e)
        {
            const target = this.$el.previousElementSibling;  
            this.canDrag = false;
            
            document.activeElement.blur();
        },

        mouseMove(e)
        {
            if (this.canDrag)
            {
                const target = this.$el.previousElementSibling;                
                target.style.width = e.x;
            }
        }
    },

    template: `

        <div @mousedown="mouseDown" tabindex="0" class="splitter">
        </div>

    `
}