import React from 'react';
import deck from '../../utils/standardDeck';
import './ModalContent.css';

const handleClick = () => {
    alert('clicked')
}

const ModalContent = () => {
    return(
        <div className='modal-grid-container'>
            {deck.map(card => {
                return(
                    <div onClick={handleClick} className='modal-grid-item'>{card.value}</div>
                )
            })}
        </div>
    )
}

export default ModalContent;