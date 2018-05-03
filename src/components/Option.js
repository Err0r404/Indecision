import React from "react";

// Stateless functional component
const Option = (props) => {
    return (
        <div>
            {props.text}
            <button onClick={(e) => {
                props.handleDeleteOption(props.text)
            }}>
                Delete
            </button>
        </div>
    );
};

export default Option;