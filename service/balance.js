"use strict"
export const balance = () => {
    const store1 = document.querySelector(".tableReceiptStore1");
    const store2 = document.querySelector(".tableReceiptStore2");
    const expensesTable = document.querySelector(".expensesTable");
    const totalStore1 = store1.querySelectorAll(".total");
    const totalStore2 = store2.querySelectorAll(".total");
    const qtClient1 = store1.querySelectorAll(".qtClient");
    const qtClient2 = store2.querySelectorAll(".qtClient");
    const totalExpenses = expensesTable.querySelectorAll(".totalExpense");
    
    
    let totalMonthStore1 = 0;
    let totalMonthStore2 = 0;
    let totalClientStore1 = 0;
    let totalClientStore2 = 0;
    let totalExpenseMonth = 0;

    
    //
    for (let i = 0; i < totalStore1.length; i++) {

        
        const total = totalStore1[i];
        const totalValue = total.textContent
        const valor = parseFloat(totalValue);
    
        
        totalMonthStore1 += valor;   

    }

    let totalMonth1 = parseFloat(totalMonthStore1).toFixed(2);
        
    const tableTotalStore1 = document.querySelector(".totalStore1");
    if(totalStore1.length == 0){
        tableTotalStore1.innerHTML = "0";
    }
    else{
        tableTotalStore1.innerHTML = totalMonth1;
    }
    //
    //
    for (let i = 0; i < totalStore2.length; i++) {

        
        const total = totalStore2[i];
        const totalValue = total.textContent
        const valor = parseFloat(totalValue);
    
        
        totalMonthStore2 += valor;   
        
    }

    let totalMonth2 = parseFloat(totalMonthStore2).toFixed(2);
        
    const tableTotalStore2 = document.querySelector(".totalStore2");
    if(totalStore2.length == 0){
        tableTotalStore2.innerHTML = "0";
    }
    else{
        tableTotalStore2.innerHTML = totalMonth2;
    }
    //
    //
    for (let i = 0; i < totalExpenses.length; i++) {

        
        const total = totalExpenses[i];
        const totalValue = total.textContent;
        const valor = parseFloat(totalValue);
    
        
        totalExpenseMonth += valor;   

        
        
    }
    let expenseTotal = parseFloat(totalExpenseMonth).toFixed(2);
    const tableTotalExpense = document.querySelector(".total-expense");
    if(totalExpenses.length == 0){
        tableTotalExpense.innerHTML = "0";
    }
    else{
        tableTotalExpense.innerHTML = expenseTotal;
    }
    //
    for (let i = 0; i < qtClient1.length; i++) {

        
        const total = qtClient1[i];
        const totalValue = total.textContent;
        const valor = parseInt(totalValue);
    
        
        totalClientStore1 += valor;   

    }
    let clientTotal = parseInt(totalClientStore1);
        
    const tableTotalClient1 = document.querySelector(".qt1");
    if(qtClient1.length == 0){
        tableTotalClient1.innerHTML = "0";
    }
    else{
        tableTotalClient1.innerHTML = clientTotal;
    }
    //
    for (let i = 0; i < qtClient2.length; i++) {

        
        const total = qtClient2[i];
        const totalValue = total.textContent;
        const valor = parseInt(totalValue);
    
        
        totalClientStore2 += valor;   
        
    }
    let clientTotal2 = parseInt(totalClientStore2);
        
    const tableTotalClient2 = document.querySelector(".qt2");
    if(qtClient2.length == 0){
        tableTotalClient2.innerHTML = "0";
    }
    else{
        tableTotalClient2.innerHTML = clientTotal2;
    }
    //

    let balance = parseFloat((totalMonthStore1 + totalMonthStore2) - totalExpenseMonth).toFixed(2);
    let tableBalance = document.querySelector(".balance")
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
