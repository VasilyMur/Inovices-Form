import React from 'react';

class InputComment extends React.Component {

    render() {
        return(
            <div className="invoice__form--item comment">
                <label>Comment</label>
                <textarea name="comment" value={this.props.currentComment ? this.props.currentComment : ''} /> 
            </div>
        )
    }
}


export default InputComment;