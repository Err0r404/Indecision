import React from "react";

// Stateless functional component
const Action = (props) => {
    return (
        <div>
            <button className='big-btn' disabled={!props.hasOptions} onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    );
};

export default Action;