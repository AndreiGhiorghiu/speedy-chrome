import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TasksBoard from '../TasksBoard/TasksBoard'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'auto',
        margin: '1rem',
        flexGrow: 1,
        paddingBottom: '70px'
    },
    title: {
        marginBottom: '2rem',
        fontSize: '1rem!important',
    },
    button: {
        margin: '1rem',
        borderRadius: '10px',
    },
    uploadButton: {
        backgroundColor: '#fff!important',
        color: 'black',
        width: '100%',
    },
    continueButton: {
        backgroundColor: '#E15100!important',
        color: '#fff!important',
        width: 'fit-content',
    },
    footer: {
        position: 'absolute',
        bottom: '4rem',
    },
}));

function FeedContainer() {
    const classes = useStyles();
    const [isContinueBtnClicked, setIsContinueBtnClicked] = React.useState(false);
    const [editableTitle, setEditableTitle] = useState('');

    const handleTitleChange = (event) => {
        setEditableTitle(event.target.value);
    };

    const onContinueHandler = () => {
        setIsContinueBtnClicked(true);
    }

    return (
        <>
        {isContinueBtnClicked ? <TasksBoard /> : (
            <div className={classes.container}>
                <Typography variant="h4" component="h6" className={classes.title}>
                    I’m here to help you with the tasks. Please tell me what are your ideas or give me a meeting transcript!
                </Typography>
                <div style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                    <Typography variant="h6" sx={{ flexGrow: 1, backgroundColor: 'transparent', width: '100%', height: '40px', fontSize: '18px' }}>
                        <input
                            type="text"
                            autocomplete="off"
                            autofill="off"
                            spellcheck="false"
                            value={editableTitle}
                            onChange={handleTitleChange}
                            style={{height: '40px', width: '100%', backgroundColor: 'transparent', border: '1px solid white', borderRadius: '10px'}}
                        />
                    </Typography>
                    <Typography variant="body2" style={{margin: '1rem 0 0 0'}}>
                        Or
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className={`${classes.button} ${classes.uploadButton}`}
                    >
                        Upload Transcript File
                    </Button>
                </div>

                <Button
                    variant="contained"
                    color="secondary"
                    className={`${classes.button } ${classes.continueButton}`}
                    onClick={onContinueHandler}
                >
                    Continue
                </Button>
            </div>
        )}
        </>

    );
}

export default FeedContainer;
