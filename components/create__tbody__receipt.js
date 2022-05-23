"use strict"

import {Receipt} from "./create__receipt.js";
import { orderDates } from "../service/data.js";

export const createTbodyReceipt = (dateYm, formId) => {
    const receipts = JSON.parse(localStorage.getItem(`${formId}`)) || [];

    const createTbody = document.createElement('tbody')
    createTbody.classList.add("table-receipt")
    
    orderDates(receipts)
    createTbody.setAttribute( "value" , dateYm)
    const tBodyValue = createTbody.getAttribute("value");
    
    receipts.forEach((receipt) => {
        
        const day = dayjs(receipt.dateFormat, 'DD/MM/YYYY')
        const dayFormatYm = dayjs(day).format('YYYYMM')

        if(tBodyValue === dayFormatYm ) {
            
            createTbody.appendChild(Receipt(receipt, formId))
        }

    });

    return createTbody;
}