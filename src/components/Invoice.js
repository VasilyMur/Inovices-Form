import React from 'react';

class Invoice extends React.Component {

    deleteSelected = () => {
        this.props.delete(this.props.number)
    }

    render() {
        return (
            <React.Fragment>
                <div className="invoice__single">
                    <div className="invoice__single--fields">
                        <div className="invoice__single__item"><span className="spanKey">Number:</span> <span className="spanVal">{this.props.number}</span></div>
                        <div className="invoice__single__item"><span  className="spanKey">Due Date:</span> <span className="spanVal">{this.props.due}</span></div>
                        <div className="invoice__single__item"><span className="spanKey">Supply Date:</span> <span className="spanVal">{this.props.supply}</span></div>
                        <div className="invoice__single__item"><span className="spanKey">Comment:</span> <span className="spanVal">{this.props.comment}</span></div>
                    </div>
                    <button onClick={this.deleteSelected}>Delete Invoice</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Invoice;