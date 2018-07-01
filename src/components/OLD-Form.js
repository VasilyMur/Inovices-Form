import React from 'react';
import Header from './Header';
import Footer from './Footer';

import InvoicesData from '../invoices';

import InputNumber from './InputNumber';
import InputInvoiceDate from './InputInvoiceDate';
import InputSupplyDate from './InputSupplyDate';
import InputComment from './InputComment';


import { connect } from 'react-redux';


class Form extends React.Component {
    numberRef = React.createRef();
    dueDateRef = React.createRef();
    supDateRef = React.createRef();

    state = {
        currentInvoice: {},
    }

setCurrentInvoice = (num) => {
    let currentInvoice = {...this.state.currentInvoice};
    currentInvoice = InvoicesData.invoices.find(res => {
        return res.number === num;
    });
    this.setState({ currentInvoice: currentInvoice });
}

removeCurrent = () => {
    this.setState({ currentInvoice: {} });
    return;
}


onDoSomeThingClicked = (e) => {
    e.preventDefault();

    const invoice = {
        number: e.target[0].attributes.value.value,
        due: e.target[1].attributes.value.value,
        supply: e.target[2].attributes.value.value,
        comment: e.target[3].innerHTML
    }

    if (invoice.number) {
        this.props.submitInvoice(invoice)
        this.removeCurrent();
    
        this.numberRef.current.clearInputField();
        this.dueDateRef.current.clearInputField();
    
        this.supDateRef.current.clearInputField();
    }
   
    return;
    
}




    render() {

        return(
            <div className="App">
                <Header />
                    <div className="inner">
                        <div className="invoice__form__container">
                            {/* <form className="invoice__form" onSubmit={this.props.submitInvoice}> */}
                            <form className="invoice__form" onSubmit={this.onDoSomeThingClicked}>
                                <InputNumber 
                                    currentInvoiceNumber={this.state.currentInvoice.number}
                                    setCurrentInvoice={this.setCurrentInvoice}
                                    removeCurrent={this.removeCurrent} 
                                    ref={this.numberRef}
                                />
                                
                                <InputInvoiceDate 
                                    currentInvoiceDate={this.state.currentInvoice.date_due}
                                    removeCurrent={this.removeCurrent}
                                    setCurrentInvoice={this.setCurrentInvoice}
                                    ref={this.dueDateRef}
                                />

                                <InputSupplyDate 
                                    currentInvoiceDate={this.state.currentInvoice.date_supply}
                                    removeCurrent={this.removeCurrent}
                                    setCurrentInvoice={this.setCurrentInvoice}
                                    ref={this.supDateRef}
                                />

                                <InputComment
                                    currentComment={this.state.currentInvoice.comment}
                                />

                                <button>Add</button>
                        </form>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}


const mapPropsToState = (state) => {
    return {
        selectedInvoices: state.selectedInvoices
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        submitInvoice: (invoice) => {
            const action = { type: 'INVOICE_ADD', invoice: invoice };
            dispatch(action);

        }
    }
}

export default connect(mapPropsToState, mapDispatchToState)(Form);