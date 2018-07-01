import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Form from './Form';


const mapStateToProps = (state) => {
    return {
        selectedInvoices: state.selectedInvoices
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const FormConnect = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormConnect;
