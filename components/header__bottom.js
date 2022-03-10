"use strict"
const menuOnscroll = () => {
    const headerMenu = document.querySelector('[data-header-menu]');

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ){
        headerMenu.classList.add("menu_onscroll");
    }
    if(document.body.scrollTop = 0 || document.documentElement.scrollTop <= 0 ){
        headerMenu.classList.remove("menu_onscroll");
    }
}


export default menuOnscroll;