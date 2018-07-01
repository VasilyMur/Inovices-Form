function selectedInvoices(state = [], action) {

    switch (action.type) {

        case 'INVOICE_ADD':
        const isIncluded = state.some(res => {
            return res.number === action.invoice.number;
        });

        if (!isIncluded) {
            return [
                ...state, action.invoice
            ]
        } else {
            return state;
        }

        case 'INVOICE_DELETE':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]

            default: 
                return state;
    }
        
}

export default selectedInvoices;