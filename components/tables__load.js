
import { createTbodyExpense } from "./create__tbody__expense.js";
import { createTbodyReceipt } from "./create__tbody__receipt.js";
import { balance } from "../service/balance.js";


export const tablesLoad = () => {
    const listReceiptStore = document.querySelectorAll('[data-table-receipt-store]');
    
    for (let i = 0; i < listReceiptStore.length; i++) {
        const listsStore = listReceiptStore[i];
        
        const arrayData = JSON.parse(localStorage.getItem('monthYear')) || [];


        const listThead = `<thead>
                            <th>Data</th>
                            <th>Dinheiro</th>
                            <th>Débito</th>
                            <th>Credito</th>
                            <th>Voucher</th>
                            <th>Total</th>
                            <th>Qt.Clientes</th>
                            <th>Ações</th>
                        </thead>`;
        const listTfoot = `<tfoot data-tfoot>
                                <th>Data</th>
                                <th>Dinheiro</th>
                                <th>Débito</th>
                                <th>Credito</th>
                                <th>Voucher</th>
                                <th>Total</th>
                                <th>Qt.Clientes</th>
                                <th>Ações</th>
                            </tfoot>`;

        listsStore.innerHTML = " ";
        listsStore.innerHTML = `${listThead} ${listTfoot}`;

        const listId = listsStore.getAttribute("id");

        const listValueStore = listsStore.getAttribute("value");

        arrayData.forEach( (dataYm) => {
            
            if(listValueStore === dataYm && listId === "receiptStore1" ){
                listsStore.insertBefore(createTbodyReceipt(dataYm, listId) ,listsStore.children[1]);
            }
            if(listValueStore === dataYm && listId === "receiptStore2" ){
                listsStore.insertBefore(createTbodyReceipt(dataYm, listId) ,listsStore.children[1]);
            }
            
        })

    }
    const listExpense = document.querySelector("[data-table-expense]");

    const arrayData = JSON.parse(localStorage.getItem('monthYear')) || [];
    const listTheadExpense = `<thead>
                                <th>Data</th>
                                <th class="report__table__name">Nome</th>
                                <th class="report__table__name">Valor</th>
                                <th>Ações</th>
                              </thead>`;
    const listTfootExpense = `<tfoot data-tfoot>
                                <th>Data</th>
                                <th class="report__table__name">Nome</th>
                                <th class="report__table__name">Valor</th>
                                <th>Ações</th>
                             </tfoot>`;

    listExpense.innerHTML = " ";
    listExpense.innerHTML = `${listTheadExpense} ${listTfootExpense}`;
    const listExpenseId = listExpense.getAttribute("id");

    const listValueExpense = listExpense.getAttribute("value");
    arrayData.forEach( (dataYm) => {
            
        if(listValueExpense === dataYm && listExpenseId === "expenses" ){
            listExpense.insertBefore(createTbodyExpense(dataYm, listExpenseId) ,listExpense.children[1]);
        }
        
    })
    //const teste = document.querySelectorAll(".table-receipts");
    //console.log(teste)

    balance()
}