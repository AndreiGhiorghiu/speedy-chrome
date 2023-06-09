import { Card, CardHeader, Typography, Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { Delete } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import React from 'react';

const useStyles = makeStyles({
    label: {
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderRadius: '8px',
    },

    storyPoints: {
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        lineHeight: '24px',
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
    },
    inpx: {
        border: 'none', 
        fontSize: 'inherit', 
        fontWeight: 'inherit', 
        width: '97%', 
        marginRight: '3%',
        backgroundColor: 'transparent', 
        color: 'white',
        paddingLeft: 0,
        marginLeft: 0,
        borderBottom: '0.25px solid white',
        paddingBottom: '5px',
        "&:focus": {
            outline: 0
        }
    }
});

function TaskCard({ title, label,storyPoints, onDelete, onChange }) {
    const styles = useStyles();
    const [editableTitle, setEditableTitle] = useState(title);

    const handleTitleChange = (event) => {
        setEditableTitle(event.target.value);
        onChange(event.target.value);
    };

    function labelToColor(label) {
        switch(label) {
            case 'Strategy':
                return '#00E7C1';
            
            case 'Product':
                return '#FFE62E';
            
            case 'Experience':
                return '#EA5254';
            
            case 'Engineering':
                return '#0098FE';
            
            case 'Data':
                return 'rgb(113, 198, 177)';
                
            default:
                return '#EA5254';
        }
    }

    return (
        <Card sx={{ boxShadow: 4 }} className={styles.card}>
            <CardHeader
                title={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'transparent', color: 'white' }}>
                        <Typography variant="h6" sx={{ flexGrow: 1, backgroundColor: 'transparent', color: 'white', fontSize: '16px' }}>
                            <input
                                type="text"
                                autoComplete="off"
                                autoFill="off"
                                spellCheck="false"
                                value={editableTitle}
                                onChange={handleTitleChange}
                                className={styles.inpx}
                            />
                        </Typography>
                        <IconButton onClick={onDelete} sx={{paddingRight: 0}}>
                            <Delete sx={{ fill: 'white' }}/>
                        </IconButton>
                    </Box>
                }
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }}>
                <Typography variant="body2" className={styles.storyPoints}>{storyPoints}</Typography>
                <Typography variant="body2" className={styles.label} style={{backgroundColor: labelToColor(label)}}>{label}</Typography>
            </Box>
        </Card>
    );
}

export default TaskCard;