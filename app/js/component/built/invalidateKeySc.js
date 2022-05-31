document.addEventListener("keydown", (e) =>
{
    if (e.ctrlKey && e.key === "f") 
    {
        e.preventDefault();
        e.stopPropagation();
    }
});