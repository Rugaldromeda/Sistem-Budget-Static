
export const balance = () => {
    const store1 = document.querySelector(".tableReceiptStore1");
    const store2 = document.querySelector(".tableReceiptStore2");
    const expensesTable = document.querySelector(".expensesTable");
    const totalStore1 = store1.querySelectorAll(".total");
    const totalStore2 = store2.querySelectorAll(".total");
    const totalExpenses = expensesTable.querySelectorAll(".totalExpense");

    let totalMonthStore1 = 0
    let totalMonthStore2 = 0
    let totalExpenseMonth = 0


    for (let i = 0; i < totalStore1.length; i++) {

        
        const total = totalStore1[i];
        const totalValue = total.textContent
        const valor = parseFloat(totalValue);
    
        
        totalMonthStore1 += valor;   

        let totalMonth1 = parseFloat(totalMonthStore1).toFixed(2);
        
        const tableTotalStore1 = document.querySelector(".totalStore1");
        tableTotalStore1.innerHTML = totalMonth1;
        
    }
    for (let i = 0; i < totalStore2.length; i++) {

        
        const total = totalStore2[i];
        const totalValue = total.textContent
        const valor = parseFloat(totalValue);
    
        
        totalMonthStore2 += valor;   

        let totalMonth2 = parseFloat(totalMonthStore2).toFixed(2);
        
        const tableTotalStore2 = document.querySelector(".totalStore2");
        tableTotalStore2.innerHTML = totalMonth2;
        
    }
    for (let i = 0; i < totalExpenses.length; i++) {

        
        const total = totalExpenses[i];
        const totalValue = total.textContent;
        const valor = parseFloat(totalValue);
    
        
        totalExpenseMonth += valor;   

        let expenseTotal = parseFloat(totalExpenseMonth).toFixed(2);
        
        const tableTotalExpense = document.querySelector(".total-expense");
        tableTotalExpense.innerHTML = expenseTotal;
        
    }

    let balance = parseFloat((totalMonthStore1 + totalMonthStore2) - totalExpenseMonth).toFixed(2);
    let tableBalance = document.querySelector(".balance")
    if(balance < 0){
        tableBalance.classList.add("negative-balance");
    }
    tableBalance.innerHTML = balance;
}
