import React from "react";

// Stateless functional component
const Option = (props) => {
    return (
        <div className='option'>
            <p className='option__text'>{props.count}. {props.text}</p>

            <button className='btn btn--link' onClick={(e) => {
                props.handleDeleteOption(props.text)
            }}>
                Delete
            </button>
        </div>
    );
};

export default Option;