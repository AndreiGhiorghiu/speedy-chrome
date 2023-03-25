import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const StickyHeader = ({ title }) => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'black', borderBottom: '1px solid white' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default StickyHeader;