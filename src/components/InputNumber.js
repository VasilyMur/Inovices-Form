import React from 'react';
import InvoicesData from '../invoices';

class InputNumber extends React.Component {
    
    state = {
        input: '',
        match: [],
        number: ''
    } 

    searchNumber = (e) => {
        const num = {...this.state};
        let { input, match, number} = num;

        input = e.target.value.toString();
        number = '';
        this.props.removeCurrent();
       

        if (input) {
            const regex = new RegExp(input, 'gi');
            match = InvoicesData.invoices.map(res => {
                return res.number.toString();
            }).filter(res => {
                return res.match(regex)
            });
        
        this.setState({ input: input, match: match, number: number });
        return
        }
        match = [];
        this.setState({ input: input, match: match });
        return;
    }

    selectInvoice = (e) => {
  
        const num = {...this.state};
        let { input, number, match } = num;
        input = e.target.textContent;
        number = e.target.textContent;
        match = [];

        this.props.setCurrentInvoice(parseFloat(number));
        this.setState({ input: input, number: number, match: match} );
    }

    clearInputField = () => {
        const state = {...this.state, input: ''};
        this.setState({ input: state.input });
    }

    render() {
        return(
            <div className="invoice__form--item">
                <label>Number</label>
                <div className="invoice-search">
                    <input onChange={this.searchNumber} 
                    type="text" 
                    name="number" 
                    value={ this.props.currentInvoiceNumber ? this.props.currentInvoiceNumber : this.state.input }
                    placeholder="Start typing..."
                    /> 

                    <ul className="results">
                        {this.state.input && !this.state.number ? this.state.match.map((res, index) => {
                            return <li onClick={this.selectInvoice} key={index}>{res}</li>
                        }) : ''}
                    </ul>
                </div>

            </div>
        )
    }
}



export default InputNumber;