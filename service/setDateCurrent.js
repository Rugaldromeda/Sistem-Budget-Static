import { tablesLoad } from "../components/tables__load.js";
let dateToday = new Date();
const dateYm = new Date()
export const filterDate = (event) =>{
    event.preventDefault()
    const form = document.querySelector("[data-filter]")
    //const monthYear = document.querySelector("[data-month-year]");
    const dateYm = form.dateYm.valueAsDate;
    const dateAdjust = dateYm.setDate(dateYm.getDate() + 1);
    dateToday = new Date(dateAdjust)
    //const getms = filterValue.getMilliseconds()
    
    setDateCurrent()

    tablesLoad()

}
export const setDateCurrent = () =>{
    const tables = document.querySelectorAll(".report__table");
    const monthValue = String(dateToday.getMonth() + 1).padStart(2, '0');
    const year = dateToday.getFullYear();
    const dateCurrent =  year + monthValue;

    const monthName = dateToday.toLocaleString("pt-BR", { month: "long" });
    
    const legendMonth = document.querySelectorAll(".monthName");
    const legendYear = document.querySelectorAll(".yearName");
    for (let i = 0; i < legendMonth.length; i++) {
        const legMonth = legendMonth[i];
        legMonth.innerHTML = monthName
    }
    for (let i = 0; i < legendYear.length; i++) {
        const legYear = legendYear[i];
        legYear.innerHTML = year;
    }
    
    for (let i = 0; i < tables.length; i++) {
        const tablesI = tables[i];

        

        tablesI.setAttribute("value", dateCurrent)
        
    }
}