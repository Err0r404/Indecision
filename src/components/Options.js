import React from "react";

import Option from "./Option";

// Stateless functional component
const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>

                <button className='btn btn--link' onClick={props.handleDeleteOptions}>Remove all</button>
            </div>

            {props.options.length === 0 && <p className='widget__message'>Please add an option to get started</p>}

            {
                props.options.map((option) => {
                    return <Option key={option} text={option} handleDeleteOption={props.handleDeleteOption}/>;
                })
            }

        </div>
    );
};

export default Options;