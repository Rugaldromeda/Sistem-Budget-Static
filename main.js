
// menu muda de cor ao descer a pagina
import menuOnscroll from "./components/header__bottom.js";
//
// menu muda de cor ao descer a pagina
window.onscroll = function() {menuOnscroll()};
//

// ativa as tabs
import {tabActive , closeContent} from "./components/tabs.js"; 
//
const listaTabs = document.querySelectorAll(".tabs__button");
for (let contador = 0; contador < listaTabs.length; contador++) {
    const tabsList = listaTabs[contador];
    const divConteudo = tabsList.classList[2];
    const idConteudo = `#tabs__${divConteudo}`;
    const idTab = `.tabs__${divConteudo}`;

    tabsList.onclick = () => {
        closeContent()
        tabActive(idConteudo, idTab);
    }
   
}
//
// função para adicionar receitas
import { handleNewReceipt } from "./components/create__receipt.js";
import { handleNewExpense } from "./components/create__expenses.js";

// carrega o conteudo apartir do local storage 
import { tablesLoad } from "./components/tables__load.js";
import { setDateCurrent, filterDate } from "./service/setDateCurrent.js";
import { balance } from "./service/balance.js"
import { filterYear } from "./service/searchBalance.js";
import { clearForm } from "./components/cancel.js";
import { getPeriod } from "./service/searchPeriod.js";

const formFilter = document.querySelector("[data-filter]")
formFilter.addEventListener("submit", filterDate)

setDateCurrent()
// formulario para receitas
const formReceipt = document.querySelectorAll("[data-receipt-form]");
const formCancel = document.querySelectorAll("[data-submit-cancel]");

for (let i = 0; i < formCancel.length; i++) {
    const cancel = formCancel[i];
    cancel.addEventListener("click" , clearForm )
}

for (let i = 0; i < formReceipt.length; i++) {
    const receiptFormAdd = formReceipt[i];
    
    receiptFormAdd.addEventListener("submit", handleNewReceipt);
}

const formExpense = document.querySelector("[data-expense-form");

formExpense.addEventListener("submit", handleNewExpense );

tablesLoad();

balance()

const formFilterYear = document.querySelector("[data-filter-year]")

formFilterYear.addEventListener("submit", filterYear );


const filterPeriod = document.querySelector("[data-filter-period]");
filterPeriod.addEventListener("submit", getPeriod );
