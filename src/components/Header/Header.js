import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return(
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton>
                    <MenuIcon />    
                </IconButton>
                <Button>Pai Gow Poker</Button>    
            </Toolbar>
        </AppBar>
    )
}

export default Header;