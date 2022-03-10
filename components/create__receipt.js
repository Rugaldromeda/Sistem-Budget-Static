"use strict"

import { editTr } from "./td__report__action/buttonEdit.js";
import { createTd, actionArea } from "./createTd.js";
import { tablesLoad } from "./tables__load.js";
import { newArrayData } from "./create__array__data.js";


export const handleNewReceipt = (event) => {
    event.preventDefault();
    const formId = event.target.getAttribute("id");

    const formArea = document.querySelector(`#${formId}`);
    
    if(formId === "edit"){
        editTr(formId);
    }
    else{
        inputDataReceipt(formId);
    }
    
    
    
    formArea.reset();

    tablesLoad();
}
// captura os dados do formulario em questão
const inputDataReceipt = (formId) => {
    const tableTrs = JSON.parse(localStorage.getItem(`${formId}`)) || [];

    const id = tableTrs.length;
    const formBody = document.querySelector(`#${formId}`);

    const receiptDate = formBody.querySelector("[data-receipt-date]");
    const dateValue = moment(receiptDate.value);
    const dateFormat = dateValue.format('DD/MM/YYYY');
    const dataYm = dateValue.format('YYYYMM')
    const dataY = dateValue.format('YYYY')

    const receiptMoney = formBody.querySelector("[data-receipt-money]");
    const moneyValue = Number(receiptMoney.value);

    const receiptDebit = formBody.querySelector("[data-receipt-debit]");
    const debitValue = Number(receiptDebit.value);

    const receiptCredit = formBody.querySelector("[data-receipt-credit]");
    const creditValue = Number(receiptCredit.value);

    const receiptVoucher = formBody.querySelector("[data-receipt-voucher]");
    const voucherValue = Number(receiptVoucher.value);

    const totalDay = parseFloat(moneyValue + debitValue + creditValue + voucherValue).toFixed(2);

    const qtClients = formBody.querySelector("[data-receipt-qtclient]");
    const qtClientValue = Number(qtClients.value);

    const dados = {
        dateFormat,
        dataY,
        moneyValue,
        debitValue,
        creditValue,
        voucherValue, 
        totalDay,
        qtClientValue,
        id
    }

    const tableTrsUpdate = [...tableTrs, dados];

    localStorage.setItem(`${formId}`, JSON.stringify(tableTrsUpdate));

    newArrayData(dataYm , formId)
}

// insere os dados no html
export const Receipt = ({dateFormat, moneyValue, debitValue, creditValue, voucherValue, totalDay,qtClientValue, id }, formId ) => {
    
    const tableTr = document.createElement("tr");
    tableTr.classList.add("table-receipts");

    tableTr.appendChild(createTd(dateFormat));
    tableTr.appendChild(createTd(moneyValue));
    tableTr.appendChild(createTd(debitValue));
    tableTr.appendChild(createTd(creditValue));
    tableTr.appendChild(createTd(voucherValue));
    tableTr.appendChild(createTd(totalDay)).classList.add("total");
    tableTr.appendChild(createTd(`<a class="qtClient">${qtClientValue}</a>`));
    tableTr.appendChild(actionArea(tablesLoad, id, formId));
    
    return tableTr;

}
