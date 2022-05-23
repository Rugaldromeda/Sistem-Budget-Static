"use strict"

import { editExpenseTr } from "./td__report__action/buttonExpenseEdit.js";
import { createTd, actionAreaExpense } from "./createTd.js";
import { tablesLoad } from "./tables__load.js";
import { newArrayData } from "./create__array__data.js";


export const handleNewExpense = (event) => {
    event.preventDefault();
    const formId = event.target.getAttribute("id");

    const formArea = document.querySelector(`#${formId}`);
    
    if(formId === "edit"){
        editExpenseTr(formId);
    }
    else{
        inputDataExpense(formId);
    }
    
    formArea.reset();

    tablesLoad();
}
// captura os dados do formulario em questão
const inputDataExpense = (formId) => {
    const tableTrs = JSON.parse(localStorage.getItem(`${formId}`)) || [];

    const id = tableTrs.length;
    const formBody = document.querySelector(`#${formId}`);

    const expenseDate = formBody.querySelector("[data-expense-date]");
    const dateValue = dayjs(expenseDate.value);
    const dateFormat = dateValue.format('DD/MM/YYYY');
    const dataYm = dateValue.format('YYYYMM');
    const dataY = dateValue.format('YYYY');

    const expenseName = formBody.querySelector("[data-expense-name]");
    const nameValue = expenseName.value;

    const expenseValue = formBody.querySelector("[data-expense-value]");
    const value = parseFloat(expenseValue.value.replace(",",".")).toFixed(2);

    


    const dados = {
        dateFormat,
        dataY,
        nameValue,
        value,
        id
    }

    const tableTrsUpdate = [...tableTrs, dados];

    localStorage.setItem(`${formId}`, JSON.stringify(tableTrsUpdate));

    newArrayData(dataYm , formId)
}

// insere os dados no html
export const Expense = ({dateFormat,nameValue,value, id }, formId ) => {
    
    const tableTr = document.createElement("tr");
    tableTr.classList.add("table-expenses");

    tableTr.appendChild(createTd(dateFormat));
    tableTr.appendChild(createTd(nameValue));
    tableTr.appendChild(createTd(value)).classList.add("totalExpense");
    tableTr.appendChild(actionAreaExpense(tablesLoad, id, formId))
    
    
    return tableTr;

}
