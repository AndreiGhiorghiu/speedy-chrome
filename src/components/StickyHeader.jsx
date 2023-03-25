import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const StickyHeader = ({ title }) => {
    return (
        <AppBar position="sticky" sx={{ height: 55, marginBottom: '10px', backgroundColor: 'black', borderBottom: '1px solid #3C3C3C' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default StickyHeader;