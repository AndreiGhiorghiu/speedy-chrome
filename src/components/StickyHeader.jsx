import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

import NewLogo from '../assets/img/newlogo.png';

const StickyHeader = ({ title }) => {
    return (
        <AppBar position="sticky" sx={{ height: 55, flexDirection: 'row', alignItems: 'center', marginBottom: '10px', backgroundColor: 'black', borderBottom: '1px solid #3C3C3C' }}>
            <img style={{
                width: '30px',
                height: '30px',
                marginLeft: '16px'
            }} src={chrome.runtime.getURL(NewLogo)}/>
            <div style={{width: '1px', marginLeft: '10px', backgroundColor: 'rgba(159, 165, 174, .6)', height: '25px'}} />
            <span style={{fontSize: '14px', marginLeft: '10px', color: 'rgba(159, 165, 174, .6)'}}>Project name</span>
        </AppBar>
    );
};

export default StickyHeader;