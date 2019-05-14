import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import { withStyles } from '@material-ui/core/styles';
import styles from './Footer-styles';

const Footer = () => {
    return(
        <BottomNavigation showlabels>
            <BottomNavigationAction label='House-Way' icon={<RestoreIcon />}/>
            <BottomNavigationAction label='New Hand' icon={<RestoreIcon />}/>
        </BottomNavigation>
    )
}

export default withStyles(styles)(Footer);