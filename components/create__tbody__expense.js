import { Expense } from "./create__expenses.js";
import { orderDates } from "../service/data.js";

export const createTbodyExpense = (dateYm, formId) => {
    const expenses = JSON.parse(localStorage.getItem(`${formId}`)) || [];

    
    const createTbody = document.createElement('tbody');
    createTbody.classList.add("table-expense");

    orderDates(expenses);

    createTbody.setAttribute( "value" , dateYm);
    const tBodyValue = createTbody.getAttribute("value");

    expenses.forEach((expense) => {
        
        const day = moment(expense.dateFormat, 'DD/MM/YYYY');
        const dayFormatYm = day.format('YYYYMM');

        if(tBodyValue === dayFormatYm ) {
            createTbody.appendChild(Expense(expense, formId));
        }

    });

    return createTbody;
}