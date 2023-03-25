import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ color, text, onClick, backgroundColor, sx }) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            style={{ backgroundColor }}
            sx={sx}
        >
            {text}
        </Button>
    );
};

export default CustomButton;