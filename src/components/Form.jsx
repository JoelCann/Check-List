import React from 'react';

function Form(props) {
    return (
        <div className="form">
            <input value={props.input_value} type={props.input_type} onChange={props.input_onChange} />
            <button onClick={props.btn_onClick}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Form;


//Returns the Input Text area and the add button with the corresponding.