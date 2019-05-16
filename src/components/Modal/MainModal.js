import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ModalContent from './ModalContent';

import './MainModal.css';

class MainModal extends Component {
    state={
        open: false
    }

    handleOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render(){
        return(
            <div>
                <Button 
                    variant='contained' 
                    color='primary' 
                    onClick={this.handleOpen}
                >
                    Select Cards
                </Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className='main-modal'>
                        <ModalContent />   
                    </div>
                </Modal>
            </div>
        )
    }
}

export default MainModal;