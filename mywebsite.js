addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
        btn_menu.addEventListener ('click', () => {
            const menu_items = document.querySelector ('.menu_items')
            menu_items.classList.toggle ('show')
        })
});

function hideMenu(){
    const menu = document.getElementById("menu");
    menu.classList.remove("show");
    // menu.classList.toggle("hide");
}