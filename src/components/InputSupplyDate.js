import React from 'react';
import InvoicesData from '../invoices';

class InputSupplyDate extends React.Component {
 
    state = {
        input: '',
        match: [],
        date: ''
    }

searchDate = (e) => {
    const num = {...this.state};
    let { input, match, date} = num;

    input = e.target.value.toString();
    date = '';
    this.props.removeCurrent();

    if (input) {
        const regex = new RegExp(input, 'gi');
        match = InvoicesData.invoices.map(res => {
            return res.date_supply;
        }).filter(res => {
            return res.match(regex)
        });

    this.setState({ input: input, match: match, date: date });
    return
    }
    match = [];
    this.setState({ input: input, match: match });
    return;
}

selectDate = (e) => {
    const num = {...this.state};
    let { input, date, match } = num;
    input = e.target.textContent;
    date = e.target.textContent;
    match = [];

    InvoicesData.invoices.filter(res => {
        return res.date_supply === date;
    }).map(res => {
        return this.props.setCurrentInvoice(res.number);  
    })

    this.setState({ input: input, date: date, match: match} );
}

clearInputField = () => {
    const state = {...this.state, input: ''};
    this.setState({ input: state.input });
}

    render() {
        return(
            <div className="invoice__form--item">
                <label>Supply Date</label>
                <div className="invoice-search">
                    <input onChange={this.searchDate} 
                                type="text" name="supply-date" 
                                value={this.props.currentInvoiceDate ? this.props.currentInvoiceDate : this.state.input}
                                placeHolder="Start typing..."
                            /> 
                    <ul className="results">
                        {this.state.input && !this.state.date ? this.state.match.map((res, index) => {
                        return <li onClick={this.selectDate} key={index}>{res}</li>
                        }) : ''}
                    </ul>
                </div>
            </div>
        )
    }
}



export default InputSupplyDate;