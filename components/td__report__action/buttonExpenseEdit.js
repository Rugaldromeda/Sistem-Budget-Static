"use strict"

const loadExpenseInput = (loadtable, id, trId) => {
    const index = id;

    const formClass = document.querySelector(`.${trId}`)
    formClass.setAttribute("id", "edit");

    const expenseSaved = JSON.parse(localStorage.getItem(`${trId}` , 'dados')) || [];
    const dateFormat = expenseSaved[index].dateFormat;
    const dateRaw = dayjs(dateFormat, 'DD/MM/YYYY')
    const dateSelect = dayjs(dateRaw).format('YYYY-MM-DD');
    const name = expenseSaved[index].nameValue;
    const value = expenseSaved[index].value;

    const data = {
        dateSelect,
        name,
        value
    }


    formClass.querySelector("[data-expense-date]").setAttribute("value" ,data.dateSelect );

    formClass.querySelector("[data-expense-name]").value = data.name;

    formClass.querySelector("[data-expense-value]").value = data.value;


    formClass.querySelector("[data-index]").value = index;
    formClass.querySelector("[data-tr-id]").value = `${trId}`

    const buttonSave = formClass.querySelector("[data-submit-form]");
    buttonSave.textContent = "Salvar"
    
    return loadtable, id, trId
}

export const editExpenseTr = (editId) => {
    const editBody = document.querySelector(`#${editId}`);
    editBody.setAttribute("class", "edit");
    const editInputs = document.querySelector(`.${editId}`)

    const expenseDate = editInputs.querySelector("[data-expense-date]");
    const dateValue = dayjs(expenseDate.value);
    const dateFormat = dayjs(dateValue).format('DD/MM/YYYY');

    const expenseName = editInputs.querySelector("[data-expense-name]");
    const nameValue = expenseName.value;

    const expenseValue = editInputs.querySelector("[data-expense-value]");
    const value = expenseValue.value;


    const inputHiddenIndex = editInputs.querySelector("[data-index");
    const index= inputHiddenIndex.value;

    const inputHiddenTrId = editInputs.querySelector("[data-tr-id]");
    const trIdValue = inputHiddenTrId.value;


    const buttonSave = editInputs.querySelector("[data-submit-form]");
    buttonSave.textContent = "Adicionar"

    const dados = {
        dateFormat,
        nameValue,
        value
    }
    const receiptSaved = JSON.parse(localStorage.getItem(`${trIdValue}`)) || [];

    receiptSaved.splice(index, 1, dados);

    localStorage.setItem(`${trIdValue}`, JSON.stringify(receiptSaved));
    editBody.setAttribute("class", `${trIdValue}`);
    editBody.setAttribute("id", `${trIdValue}`);
}

export const buttonEditExpense = (loadtable, id, trId) => {
    const editExpenseButton = document.createElement("button");
    editExpenseButton.innerHTML = `<img src="https://img.icons8.com/external-becris-lineal-becris/17/000000/external-edit-mintab-for-ios-becris-lineal-becris.png"/>`;

    editExpenseButton.addEventListener("click" , () => loadExpenseInput(loadtable, id, trId))
    
    return editExpenseButton;
}