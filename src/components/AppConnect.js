import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';


const mapStateToProps = (state) => {
    return {
      selectedInvoices: state.selectedInvoices
    }
  }
 
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnect;
