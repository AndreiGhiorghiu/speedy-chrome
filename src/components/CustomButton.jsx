import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ color, text, onClick, backgroundColor }) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            style={{ backgroundColor }}
        >
            {text}
        </Button>
    );
};

export default CustomButton;