import React from "react";

import Option from "./Option";

// Stateless functional component
const Options = (props) => {
    return (
        <div>
            <button className='btn btn--link' onClick={props.handleDeleteOptions}>Remove all</button>

            {props.options.length === 0 && <p>Please add an option to get started</p>}

            {
                props.options.map((option) => {
                    return <Option key={option} text={option} handleDeleteOption={props.handleDeleteOption}/>;
                })
            }

        </div>
    );
};

export default Options;