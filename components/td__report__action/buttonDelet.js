"use strict"

const deletTr = (loadtable, id, formId) => {
    const index = id;
    const elementSaved = JSON.parse(localStorage.getItem(`${formId}`)) || [];
    if(confirm("Deseja mesmo excluir?")){
        elementSaved.splice(index, 1);
    }
    

    localStorage.setItem(`${formId}`, JSON.stringify(elementSaved));
    updateId(formId)
    loadtable()
}

const buttonDelet = (loadtable, id, formId) => {
    const deletButton = document.createElement("button");
    deletButton.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;

    deletButton.addEventListener("click" , () => deletTr( loadtable, id, formId) )
    return deletButton;
    /* vou transformar o parametro recebido pela função em outra função, 
    isso servira para reativar a função receiptsLoad(), que carregar de novo as
    tds na tela
    */

}

const updateId = (elementId) =>{
    const elementsSaved = JSON.parse(localStorage.getItem(`${elementId}`, 'dados')) || [];
    elementsSaved.forEach((element,id) => {
        element.id = id;
    });

    localStorage.setItem(`${elementId}`, JSON.stringify(elementsSaved));
}

export default buttonDelet;