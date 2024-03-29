"use strict"
export const getPeriod = (event) => {
    event.preventDefault();
    const initialTime = document.querySelector("[data-input-initial]");
    const finalTime = document.querySelector("[data-input-final]");
    const initialTimeValue = dayjs(initialTime.value);
    const initial = dayjs(initialTimeValue).format('YYYYMMDD');
    const finalTimeValue = dayjs(finalTime.value);
    const final = dayjs(finalTimeValue).format('YYYYMMDD');


    searchPeriod(initial,final);

}
const searchPeriod = (startTime, finishTime) => {
    const expensesSaved = JSON.parse(localStorage.getItem("expenses" , 'dados')) || [];
    const receiptsSaved1 = JSON.parse(localStorage.getItem("receiptStore1" , 'dados')) || [];
    const receiptsSaved2 = JSON.parse(localStorage.getItem("receiptStore2" , 'dados')) || [];
    const arrayReceiptsSt1 = [];
    const arrayReceiptsSt2 = [];
    const arrayExpenses = [];
    for (let i = 0; i < expensesSaved.length; i++) {
        const listExpense = expensesSaved[i];
        const dateFormat = listExpense.dateFormat;
        const dateRaw = dayjs(dateFormat, 'DD/MM/YYYY')
        const dateSelect = dayjs(dateRaw).format('YYYYMMDD');
        const value = listExpense.value;


        const dataExpenses = {
            dateSelect,
            value
        }
        
        arrayExpenses.push(dataExpenses)
        
    }
    for (let i = 0; i < receiptsSaved1.length; i++) {
        const listReceipt = receiptsSaved1[i];
        const dateFormat = listReceipt.dateFormat;
        const dateRaw = dayjs(dateFormat, 'DD/MM/YYYY')
        const dateSelect = dayjs(dateRaw).format('YYYYMMDD');
        const totalDay = listReceipt.totalDay;
        const totalClQt = listReceipt.qtClientValue;


        const dataReceipt1 = {
            dateSelect,
            totalDay,
            totalClQt
        }
        
        arrayReceiptsSt1.push(dataReceipt1)
        
    }
    for (let i = 0; i < receiptsSaved2.length; i++) {
        const listReceipt = receiptsSaved2[i];
        const dateFormat = listReceipt.dateFormat;
        const dateRaw = dayjs(dateFormat, 'DD/MM/YYYY')
        const dateSelect = dayjs(dateRaw).format('YYYYMMDD');
        const totalDay = listReceipt.totalDay;
        const totalClQt = listReceipt.qtClientValue;


        const dataReceipt2 = {
            dateSelect,
            totalDay,
            totalClQt
        }
        
        arrayReceiptsSt2.push(dataReceipt2)
        
    }
    
    let periodExpenses = arrayExpenses.filter(arrayExpenses => (arrayExpenses.dateSelect >= `${startTime}` && arrayExpenses.dateSelect <= `${finishTime}`));
    let periodReceitpsSt1 = arrayReceiptsSt1.filter(arrayReceipt1 => (arrayReceipt1.dateSelect >= `${startTime}` && arrayReceipt1.dateSelect <= `${finishTime}`));
    let periodReceitpsSt2 = arrayReceiptsSt2.filter(arrayReceipt2 => (arrayReceipt2.dateSelect >= `${startTime}` && arrayReceipt2.dateSelect <= `${finishTime}`));
    
    let totalPeriodExp = 0;
    let totalPeriodSt1 = 0;
    let totalPeriodCl1 = 0;
    let totalPeriodSt2 = 0;
    let totalPeriodCl2 = 0;

    const tableTotalReceipt1 = document.querySelector(".totalStore1");
    const tableTotalReceipt2 = document.querySelector(".totalStore2");
    const tableTotalqt1 = document.querySelector(".qt1");
    const tableTotalqt2 = document.querySelector(".qt2");
    const tableTotalExpense = document.querySelector(".total-expense");

    if(periodExpenses.length == 0){
        tableTotalExpense.innerHTML = "0";
    }
    else{
        for (let i = 0; i < periodExpenses.length; i++) {
            const arrayPeriodExp = periodExpenses[i];
            const totalPeriod = parseFloat(arrayPeriodExp.value);
    
            totalPeriodExp += totalPeriod;

            const totalPExp = parseFloat(totalPeriodExp).toFixed(2);
    
            tableTotalExpense.innerHTML = totalPExp;
            
        }
    }
    if(periodReceitpsSt1.length == 0){
        tableTotalReceipt1.innerHTML = "0";
        tableTotalqt1.innerHTML = "0";
    }
    else{
        for (let i = 0; i < periodReceitpsSt1.length; i++) {
            const arrayPeriodR1 = periodReceitpsSt1[i];
            const totalPeriodR1 = Number(arrayPeriodR1.totalDay);
            const totalPeriodCl = Number(arrayPeriodR1.totalClQt);
    
            totalPeriodSt1 += totalPeriodR1;
            const totalPReceipt1 = parseFloat(totalPeriodSt1).toFixed(2);
            totalPeriodCl1 += totalPeriodCl;
            
            tableTotalReceipt1.innerHTML = totalPReceipt1;
            tableTotalqt1.innerHTML = totalPeriodCl1;
        }
    }
    if(periodReceitpsSt2.length == 0){
        tableTotalReceipt2.innerHTML = "0";
        tableTotalqt2.innerHTML = "0";
    }
    else{
        for (let i = 0; i < periodReceitpsSt2.length; i++) {
            const arrayPeriodR2 = periodReceitpsSt2[i];
            const totalPeriodR2 = Number(arrayPeriodR2.totalDay);
            const totalPeriodCl = Number(arrayPeriodR2.totalClQt);
    
            totalPeriodSt2 += totalPeriodR2;
            const totalPReceipt2 = parseFloat(totalPeriodSt2).toFixed(2);
            totalPeriodCl2 += totalPeriodCl;
            tableTotalReceipt2.innerHTML = totalPReceipt2;
            tableTotalqt2.innerHTML = totalPeriodCl2;
            
        }
    }
    

    const balancePeriod = parseFloat((totalPeriodSt1 + totalPeriodSt2) - totalPeriodExp).toFixed(2);
    const totalClientPeriod = totalPeriodCl1 + totalPeriodCl2;
    const tableTotalClient = document.querySelector(".qtTotal");
    let tableBalance = document.querySelector(".balance");
    if(balancePeriod < 0){
        tableBalance.classList.add("negative-balance");
    }
    else{
        tableBalance.classList.remove("negative-balance");
    }
    tableBalance.innerHTML = balancePeriod;
    tableTotalClient.innerHTML = totalClientPeriod;
    
}
