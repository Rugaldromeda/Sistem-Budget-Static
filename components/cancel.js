"use strict"

export const clearForm = (event) => {
    const idForm = event.target.getAttribute("id");
    const formClear = document.querySelector(`.${idForm}`);
    const modForm = formClear.getAttribute("id")
    if(modForm === "edit"){
        formClear.setAttribute("id", `${idForm}` )
    }
    formClear.reset()
}