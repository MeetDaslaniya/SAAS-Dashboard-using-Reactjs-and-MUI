import React, { useState } from "react";
import AddInvoice from './AddInvoice';
import InvoiceList from "./InvoiceList";



function Invoice() {
    const [newInvoice,setNewInvoice]=useState(false)
    return(
        newInvoice?<AddInvoice/>:<InvoiceList setNewInvoice={setNewInvoice}/>
    )
  
}

export default Invoice;
