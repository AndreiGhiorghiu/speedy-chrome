import React from 'react';
import { makeStyles } from '@mui/styles';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Chat, Settings, Task } from '@mui/icons-material';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        zIndex: 100,
    },
    icon: {
        color: '#EA5254',
    },
    selected: {
        borderTop: '2px solid #EA5254 !important',
    },
    unselected: {
        borderTop: '1px solid #3C3C3C',
    },
});

function BottomMenu(props) {
    const { selectedValue, onSelect } = props;
    const classes = useStyles();

    return (
        <BottomNavigation
            className={classes.root}
            value={selectedValue}
            onChange={onSelect}
        >
            <BottomNavigationAction
                icon={<Chat className={classes.icon} />}
                classes={{
                    root: classes.unselected,
                    selected: classes.selected,
                }}
            />
            <BottomNavigationAction
                icon={<Task className={classes.icon} />}
                classes={{
                    root: classes.unselected,
                    selected: classes.selected,
                }}
            />
            <BottomNavigationAction
                icon={<Settings className={classes.icon} />}
                classes={{
                    root: classes.unselected,
                    selected: classes.selected,
                }}
            />
        </BottomNavigation>
    );
}

export default BottomMenu;