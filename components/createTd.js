"use strict"
import {buttonEdit} from "./td__report__action/buttonEdit.js";
import { buttonEditExpense } from "./td__report__action/buttonExpenseEdit.js";
import buttonDelet from "./td__report__action/buttonDelet.js";

export const actionArea = (loadtable, id, formId) =>{
    const areaAction = document.createElement("td");

    areaAction.appendChild(buttonEdit(loadtable, id, formId));
    areaAction.appendChild(buttonDelet(loadtable, id, formId));

    return areaAction;
}
export const actionAreaExpense = (loadtable, id, formId) =>{
    const areaAction = document.createElement("td");

    areaAction.appendChild(buttonEditExpense(loadtable, id, formId));
    areaAction.appendChild(buttonDelet(loadtable, id, formId));

    return areaAction;
}


export const createTd = (data) => {
    const td = document.createElement("td");
    const typeData = typeof(data);
    if(typeData === "number") {
        const formatNumber = parseFloat(data).toFixed(2)
        td.innerHTML = `<a>R$ ${formatNumber}</a>`;
    }
    else{
        td.innerHTML = `<a>${data}</a>`;
    }


    return td;
}   
