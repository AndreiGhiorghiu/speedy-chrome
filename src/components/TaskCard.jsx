import { Card, CardHeader, Typography, Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { Delete } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import React from 'react';

const useStyles = makeStyles({
    label: {
        backgroundColor: '#EA5254',
        padding: '0.2rem',
        borderRadius: '8px',
    },

    storyPoints: {
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        color: 'black',
        padding: '0.2rem',
    },

    card: {
        maxWidth: '100%',
        backgroundColor: 'transparent',
        margin: '1rem',
        border: '1px solid white',
        borderRadius: '10px',
    }
});

function TaskCard({ title, label,storyPoints, onDelete }) {
    const styles = useStyles();
    const [editableTitle, setEditableTitle] = useState(title);

    const handleTitleChange = (event) => {
        setEditableTitle(event.target.value);
    };

    return (
        <Card sx={{ boxShadow: 4 }} className={styles.card}>
            <CardHeader
                title={
                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', color: 'white' }}>
                        <Typography variant="h6" sx={{ flexGrow: 1, backgroundColor: 'transparent', color: 'white', fontSize: '18px' }}>
                            <input
                                type="text"
                                value={editableTitle}
                                onChange={handleTitleChange}
                                style={{ border: 'none', fontSize: 'inherit', fontWeight: 'inherit', width: '100%', backgroundColor: 'transparent', color: 'white' }}
                            />
                        </Typography>
                        <IconButton onClick={onDelete}>
                            <Delete sx={{ fill: 'white' }}/>
                        </IconButton>
                    </Box>
                }
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                <Typography variant="body2" className={styles.storyPoints}>{storyPoints}</Typography>
                <Typography variant="body2" className={styles.label}>{label}</Typography>
            </Box>
        </Card>
    );
}

export default TaskCard;