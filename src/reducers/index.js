import { combineReducers } from "redux";

import selectedInvoices from "./invoices";

const rootReducer = combineReducers({
    selectedInvoices
});

export default rootReducer;