"use strict"

const loadTrInput = (loadtable, id, trId) => {
    const index = id;

    const formClass = document.querySelector(`.${trId}`)
    formClass.setAttribute("id", "edit");

    const receiptSaved = JSON.parse(localStorage.getItem(`${trId}` , 'dados')) || [];
    const dateFormat = receiptSaved[index].dateFormat;
    const dateRaw = dayjs(dateFormat, 'DD/MM/YYYY')
    const dateSelect = dayjs(dateRaw).format('YYYY-MM-DD');
    const money = receiptSaved[index].moneyValue;
    const debit = receiptSaved[index].debitValue;
    const credit = receiptSaved[index].creditValue;
    const voucher = receiptSaved[index].voucherValue;
    const total = receiptSaved[index].totalDay;
    const qtClient = receiptSaved[index].qtClientValue;

    const data = {
        dateSelect,
        money,
        debit,
        credit,
        voucher,
        total,
        qtClient
    }


    formClass.querySelector("[data-receipt-date]").setAttribute("value" ,data.dateSelect );

    formClass.querySelector("[data-receipt-money]").value = data.money;

    formClass.querySelector("[data-receipt-debit]").value = data.debit;

    formClass.querySelector("[data-receipt-credit]").value = data.credit;

    formClass.querySelector("[data-receipt-voucher]").value = data.voucher;

    formClass.querySelector("[data-receipt-qtclient]").value = data.qtClient;

    formClass.querySelector("[data-index]").value = index;
    formClass.querySelector("[data-tr-id]").value = `${trId}`

    const buttonSave = formClass.querySelector("[data-submit-form]");
    buttonSave.textContent = "Salvar"
    
    return loadtable, id, trId
}

export const editTr = (editId) => {
    const editBody = document.querySelector(`#${editId}`);
    editBody.setAttribute("class", "edit");
    const editInputs = document.querySelector(`.${editId}`)

    const receiptDate = editInputs.querySelector("[data-receipt-date]");
    const dateValue = dayjs(receiptDate.value);
    const dateFormat = dayjs(dateValue).format('DD/MM/YYYY');

    const receiptMoney = editInputs.querySelector("[data-receipt-money]");
    const moneyValue = Number(receiptMoney.value);

    const receiptDebit = editInputs.querySelector("[data-receipt-debit]");
    const debitValue = Number(receiptDebit.value);

    const receiptCredit = editInputs.querySelector("[data-receipt-credit]");
    const creditValue = Number(receiptCredit.value);

    const receiptVoucher = editInputs.querySelector("[data-receipt-voucher]");
    const voucherValue = Number(receiptVoucher.value);

    const totalDay = moneyValue + debitValue + creditValue + voucherValue;

    const qtClients = editInputs.querySelector("[data-receipt-qtclient]");
    const qtClientValue = Number(qtClients.value);

    const inputHiddenIndex = editInputs.querySelector("[data-index");
    const index= inputHiddenIndex.value;

    const inputHiddenTrId = editInputs.querySelector("[data-tr-id]");
    const trIdValue = inputHiddenTrId.value;


    const buttonSave = editInputs.querySelector("[data-submit-form]");
    buttonSave.textContent = "Adicionar"

    const dados = {
        dateFormat,
        moneyValue,
        debitValue,
        creditValue,
        voucherValue, 
        totalDay,
        qtClientValue
    }
    const receiptSaved = JSON.parse(localStorage.getItem(`${trIdValue}`)) || [];

    receiptSaved.splice(index, 1, dados);

    localStorage.setItem(`${trIdValue}`, JSON.stringify(receiptSaved));
    editBody.setAttribute("class", `${trIdValue}`);
    editBody.setAttribute("id", `${trIdValue}`);
}


//const receiptData = (data) => {

//}
export const buttonEdit = (loadtable, id, trId) => {
    const editButton = document.createElement("button");
    editButton.innerHTML = `<img src="https://img.icons8.com/external-becris-lineal-becris/17/000000/external-edit-mintab-for-ios-becris-lineal-becris.png"/>`;

    editButton.addEventListener("click" , () => loadTrInput(loadtable, id, trId))
    
    return editButton;
}


