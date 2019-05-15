import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CachedIcon from '@material-ui/icons/Cached';
import ExtensionIcon from '@material-ui/icons/Extension';

const UserActions = () => {
    return(
        <BottomNavigation showLabels>
            <BottomNavigationAction label='House-Way' icon={<ExtensionIcon />}/>
            <BottomNavigationAction label='New Hand' icon={<CachedIcon />}/>
        </BottomNavigation>
    )
}

export default UserActions;