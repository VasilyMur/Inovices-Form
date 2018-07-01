// Submit Invoice
export function submitInvoice(invoice) {
    return {
        type: 'INVOICE_ADD', 
        invoice: invoice
    }
}

// Delete Invoice
export function deleteInvoice(i) {
    return { 
        type: 'INVOICE_DELETE', 
        i
    }
}