"use strict"
export const balance = () => {
    // estruturas
    const totalStore1 = document.querySelector(".tableReceiptStore1").querySelectorAll(".total");
    const totalStore2 = document.querySelector(".tableReceiptStore2").querySelectorAll(".total");
    const qtClient1 = document.querySelector(".tableReceiptStore1").querySelectorAll(".qtClient");
    const qtClient2 = document.querySelector(".tableReceiptStore2").querySelectorAll(".qtClient");
    const totalExpenses = document.querySelector(".expensesTable").querySelectorAll(".totalExpense");
    // estruturas no balanço
    const tableTotalStore1 = document.querySelector(".totalStore1");
    const tableTotalStore2 = document.querySelector(".totalStore2");
    const tableTotalExpense = document.querySelector(".total-expense");
    const tableTotalClient1 = document.querySelector(".qt1");
    const tableTotalClient2 = document.querySelector(".qt2");
    let tableBalance = document.querySelector(".balance");
    // calcula totais
    let totalMonthStore1 = calcTotalMoney(totalStore1);
    let totalMonthStore2 = calcTotalMoney(totalStore2);
    let totalClientStore1 = calcTotalQt(qtClient1);
    let totalClientStore2 = calcTotalQt(qtClient2);
    let totalExpenseMonth = calcTotalMoney(totalExpenses);
    //
    //parsea valor a ser escrito no html
    let totalMonth1 = parseFloat(totalMonthStore1).toFixed(2);
    let totalMonth2 = parseFloat(totalMonthStore2).toFixed(2);    
    let expenseTotal = parseFloat(totalExpenseMonth).toFixed(2);

    let clientTotal = parseInt(totalClientStore1);
    let clientTotal2 = parseInt( totalClientStore2);
    
    // verifica campos zerados
    checkValue(totalStore1, tableTotalStore1, totalMonth1)
    checkValue(totalStore2, tableTotalStore2, totalMonth2);
    checkValue(totalExpenses, tableTotalExpense, expenseTotal);
    checkValue(qtClient1, tableTotalClient1, clientTotal);
    checkValue(qtClient2,tableTotalClient2, clientTotal2);

    let balance = parseFloat((totalMonthStore1 + totalMonthStore2) - totalExpenseMonth).toFixed(2);
    
    const clientAll = totalClientStore1 + totalClientStore2;
    const tableTClient = document.querySelector(".qtTotal");
    if(balance < 0){
        tableBalance.classList.add("negative-balance");
    }
    else{
        tableBalance.classList.remove("negative-balance");
    }
    tableBalance.innerHTML = balance;
    tableTClient.innerHTML = clientAll;
}

const calcTotalMoney = (arr) => {

    let varTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        
        const total = arr[i];
        const totalValue = total.textContent;
        const valor = parseFloat(totalValue);
     
        varTotal += valor; 

    }
    
    return varTotal;
}
const calcTotalQt = (arr) => {
    let varTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        
        const total = arr[i];
        const totalValue = total.textContent;
        const valor = parseInt(totalValue);
            
        varTotal += valor;        
    }
    return varTotal;
}
// confirmação se existem valores para o campo
const checkValue = (qtDiv, htmlContent, valueToAttribute) =>{
    if(qtDiv.length == 0){
        htmlContent.innerHTML = "0";
    }
    else{
        htmlContent.innerHTML = valueToAttribute;
    } 
}