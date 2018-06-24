import { createStore } from 'redux';

const initialState = {
    selectedInvoices: []
}

const reducer = ( state = initialState, action ) => {
    console.log('Reducer: ', action);

    switch (action.type) {

        case 'INVOICE_ADD':
            const isIncluded = state.selectedInvoices.some(res => {
                return res.number === action.invoice.number;
            });

            if (!isIncluded) {
                return {
                    selectedInvoices: [...state.selectedInvoices, action.invoice]
                }
            } else {
                return state;
            }

        case 'INVOICE_DELETE':
            const newState = [...state.selectedInvoices]
            const upd = newState.filter(res => {
                return res.number !== action.number
            });
            
            return {
                selectedInvoices: upd
            }

        default:
            return state;
    } 
}

const store = createStore(reducer);

export default store;