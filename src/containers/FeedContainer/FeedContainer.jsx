import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TasksBoard from '../TasksBoard/TasksBoard'
import { CircularProgress } from '@mui/material';


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
    continueButton: {
        backgroundColor: '#E15100!important',
        color: '#fff!important',
        width: 'fit-content',
    },
    footer: {
        position: 'absolute',
        bottom: '4rem',
    },
    chooseFileButton: {
        margin: '1rem',
        borderRadius: '10px',
        height: '40px',
        backgroundColor: '#fff!important',
        color: 'black',
        width: 'calc(100% - 32px)',
        lineHeight: '38px',
        fontSize: '15px',
        cursor: 'pointer',
        paddingLeft: '16px',
        paddingRight: '16px',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
}));

function FeedContainer() {
    const classes = useStyles();
    const [isContinueBtnClicked, setIsContinueBtnClicked] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [editableTitle, setEditableTitle] = useState('');

    const [uploadButtonTitle, setUploadButtonTitle] = useState('Upload Meeting Transcript');

    const handleTitleChange = (event) => {
        setEditableTitle(event.target.value);
    };

    const onContinueHandler = () => {
        setIsContinueBtnClicked(true);
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            let file = e.target.files[0];
            setUploadButtonTitle(file.name);
        }
    };

    return (
        !isLoading ?
        <>
        {isContinueBtnClicked ? <TasksBoard /> : (
            <div className={classes.container}>
                <Typography variant="h4" component="h6" className={classes.title}>
                    I’m here to help you with the tasks.<br/>Please tell me what are your ideas<br/>or give me a meeting transcript
                </Typography>
                <div style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                    <Typography variant="h6" sx={{ flexGrow: 1, backgroundColor: 'transparent', width: '100%', height: '40px', fontSize: '18px' }}>
                        <input
                            type="text"
                            autoComplete="off"
                            autoFill="off"
                            spellCheck="false"
                            value={editableTitle}
                            placeholder={"Create a task for the login screen ..."}
                            onChange={handleTitleChange}
                            style={{height: '40px', color: 'white', width: 'calc(100% - 16px)', backgroundColor: 'transparent', fontSize: '16px', paddingLeft: '8px', paddingRight: '8px', border: '1px solid white', borderRadius: '10px'}}
                        />
                    </Typography>
                    <Typography variant="body2" style={{margin: '1rem 0 0 0'}}>
                        OR
                    </Typography>
                    
                    <input onChange={handleFileChange} type="file" id="actual-btn" hidden/>
                    <label className={classes.chooseFileButton} for="actual-btn">
                        {uploadButtonTitle}
                    </label>
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
        :
            <div style={{
                marginTop: '50%'
            }}>
                <CircularProgress style={{color: '#EA5254'}} />
            </div>

    );
}

export default FeedContainer;
