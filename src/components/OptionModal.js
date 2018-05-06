import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected option"
            onRequestClose={props.handleClearSelectedOption}
            ariaHideApp={false}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className='modal__title'>Selected option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='btn' onClick={props.handleClearSelectedOption}>Close</button>
        </Modal>
    )
};

export default OptionModal;