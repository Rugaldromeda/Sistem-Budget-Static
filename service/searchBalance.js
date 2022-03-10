"use strict"

export const filterYear = (event) =>{
    event.preventDefault()
    let receiptsSt1 = JSON.parse(localStorage.getItem("receiptStore1", 'dados' )) || [];
    let receiptsSt2 = JSON.parse(localStorage.getItem("receiptStore2", 'dados' )) || [];
    let expenses = JSON.parse(localStorage.getItem("expenses", 'dados' )) || [];

    const yearValue = document.querySelector("[data-input-year]")

    let receiptFilter1 = receiptsSt1.filter(receiptSt1 => (receiptSt1.dataY == yearValue.value));
    let receiptFilter2 = receiptsSt2.filter(receiptSt2 => (receiptSt2.dataY == yearValue.value));
    let expenseFilter = expenses.filter(expense => (expense.dataY == yearValue.value));
    let totalReceipt1 = 0;
    let totalReceipt2 = 0;
    let clientTotal1 = 0;
    let clientTotal2 = 0;
    let totalExp = 0;

    const tableTotalReceipt1 = document.querySelector(".totalStore1");
    const tableTotalReceipt2 = document.querySelector(".totalStore2");
    const tableTotalqt1 = document.querySelector(".qt1");
    const tableTotalqt2 = document.querySelector(".qt2");
    const tableTotalExpense = document.querySelector(".total-expense");
    
    if(receiptFilter1.length == 0){
        tableTotalReceipt1.innerHTML = "0";
        tableTotalqt1.innerHTML = "0";
    }
    else{
        for (let i = 0; i < receiptFilter1.length; i++) {
            const yearSelected = receiptFilter1[i];
            const totalStore1 = parseFloat(yearSelected.totalDay);
            const totalClient1 = Number(yearSelected.qtClientValue);
            
            totalReceipt1 += totalStore1;
            clientTotal1 += totalClient1;
            const receiptTotal1 = parseFloat(totalReceipt1).toFixed(2);
            
            
            
            tableTotalReceipt1.innerHTML = receiptTotal1;
            tableTotalqt1.innerHTML = clientTotal1;
        }
    }
    
    if(receiptFilter2.length == 0){
        tableTotalReceipt2.innerHTML = "0";
        tableTotalqt2.innerHTML = "0";
    }
    else{
        for (let i = 0; i < receiptFilter2.length; i++) {
            const yearSelected = receiptFilter2[i];
            const totalStore2 = parseFloat(yearSelected.totalDay);
            const totalCliente2 = Number(yearSelected.qtClientValue);
    
            totalReceipt2 += totalStore2;
            clientTotal2 += totalCliente2;
            const receiptTotal2 = parseFloat(totalReceipt2).toFixed(2);
            
            tableTotalReceipt2.innerHTML = receiptTotal2;
            tableTotalqt2.innerHTML = clientTotal2;
            
        }
    }
    
    if(expenseFilter.length == 0){
        totalExp = 0;
        tableTotalExpense.innerHTML = "0";
    }
    else{
        for (let i = 0; i < expenseFilter.length; i++) {
            const yearSelected = expenseFilter[i];
            const totalExpense = parseFloat(yearSelected.value);
    
            totalExp += totalExpense;
            const expenseTotal = parseFloat(totalExp).toFixed(2);
           
            tableTotalExpense.innerHTML = expenseTotal;
            
        }
    }
    

    const balanceYear = parseFloat((totalReceipt1 + totalReceipt2) - totalExp).toFixed(2);
    const totalClientAll = clientTotal1 + clientTotal2;
    const tableTotalClient = document.querySelector(".qtTotal");
    let tableBalance = document.querySelector(".balance");
    if(balanceYear < 0){
        tableBalance.classList.add("negative-balance");
    }
    else{
        tableBalance.classList.remove("negative-balance");
    }
    tableBalance.innerHTML = balanceYear;
    tableTotalClient.innerHTML = totalClientAll;
}

