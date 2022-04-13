"use strict"
export const tabActive = (seletorDiv, seletorTab) =>{
    const conteudo = document.querySelector(seletorDiv);
    const tab = document.querySelector(seletorTab);
    
    tab.classList.add("tabs__button__active");
    conteudo.classList.remove("invisible");
    
};

export const closeContent = ()=>{
    // desativa as tabs active
    let tabsAll = document.querySelectorAll(".tabs__button");
    for (let i = 0; i < tabsAll.length; i++) {
        tabsAll[i].className = tabsAll[i].className.replace("tabs__button__active", "");
    }
    //deixa as divs inativas invisiveis 
    let conteudoDiv = document.getElementsByClassName("tab__content");
    for (let z = 0; z < conteudoDiv.length; z++) {
        conteudoDiv[z].classList.add("invisible");
        
    }
    
}