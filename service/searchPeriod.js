export const getPeriod = (event) => {
    event.preventDefault();
    const initialTime = document.querySelector("[data-input-initial]");
    const finalTime = document.querySelector("[data-input-final]");
    const initialTimeValue = moment(initialTime.value);
    const initial = initialTimeValue.format('YYYYMMDD');
    const finalTimeValue = moment(finalTime.value);
    const final = finalTimeValue.format('YYYYMMDD');

    console.log(final)

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
        const dateRaw = moment(dateFormat, 'DD/MM/YYYY')
        const dateSelect = dateRaw.format('YYYYMMDD');
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
        const dateRaw = moment(dateFormat, 'DD/MM/YYYY')
        const dateSelect = dateRaw.format('YYYYMMDD');
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
        const dateRaw = moment(dateFormat, 'DD/MM/YYYY')
        const dateSelect = dateRaw.format('YYYYMMDD');
        const totalDay = listReceipt.totalDay;
        const totalClQt = listReceipt.qtClientValue;


        const dataReceipt2 = {
            dateSelect,
            totalDay,
            totalClQt
        }
        
        arrayReceiptsSt2.push(dataReceipt2)
        
    }
    console.log(arrayExpenses)
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
            const totalPeriod = Number(arrayPeriodExp.value);
    
            totalPeriodExp += totalPeriod;
    
            tableTotalExpense.innerHTML = totalPeriodExp;
            
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
            totalPeriodCl1 += totalPeriodCl;
            
            tableTotalReceipt1.innerHTML = totalPeriodSt1;
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
            totalPeriodCl2 += totalPeriodCl;
            tableTotalReceipt2.innerHTML = totalPeriodSt2;
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
    console.log(periodExpenses)
}
