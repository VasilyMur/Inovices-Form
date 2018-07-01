import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Invoice from './Invoice';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends React.Component {


  render() {
   
    return (

      <div className="App">
        <Header />

          <div className="content">
            <div className="inner">
              <div className="invoices__container">
                <div className="invoices__container--add">
                <h2>Actions</h2>
                <Link to='/form' ><button>Add Invoice</button></Link>
                </div>
                <div className="invoices__container--list">
                <h2>Invoices</h2>
                {this.props.selectedInvoices ? this.props.selectedInvoices.map((res, i) => {
                  return <Invoice key={res.number} 
                                          comment={res.comment}
                                          due={res.due}
                                          supply={res.supply}
                                          number={res.number}
                                          delete={this.props.deleteInvoice}
                                          index={i}
                  />
                }) : ''}
                </div>
              </div>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    selectedInvoices: state.selectedInvoices
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    deleteInvoice: (number) => {
      const action = { type: 'INVOICE_DELETE', number: number };
      dispatch(action);
    }
  }
}

export default connect(mapPropsToState, mapDispatchToState)(App);