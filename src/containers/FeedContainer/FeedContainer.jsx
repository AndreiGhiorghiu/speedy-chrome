import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TasksBoard from '../TasksBoard/TasksBoard';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-hot-toast';

import axios from 'axios';
import config from '../../config';

import store from '$store';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'auto',
    margin: '1rem',
    flexGrow: 1,
    paddingBottom: '70px',
  },
  title: {
    marginBottom: '2rem',
    fontSize: '1rem!important',
  },
  continueButton: {
    backgroundColor: '#EA5254!important',
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
    overflow: 'hidden',
  },
}));

function FeedContainer() {
  const classes = useStyles();
  const [isContinueBtnClicked, setIsContinueBtnClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [feedChat, setFeedChat] = useState('');

  const [fileToUpload, setFileToUpload] = useState(null);

  const [tasksResponse, setTasksResponse] = useState([]);

  const [uploadButtonTitle, setUploadButtonTitle] = useState(
    'Upload Meeting Transcript'
  );

  const handleFeedChange = (event) => {
    setFeedChat(event.target.value);
  };

  const onContinueHandler = async () => {
    if (feedChat.length > 1) {
      const response = await axios.post(
        `${config.API_URL}/train-text/${store.get('project')}`,
        {
          text: feedChat,
        },
        { timeout: 60000 }
      );

      setIsLoading(false);

      if (response.data.length > 0) {
        setTasksResponse(response.data);
        setIsContinueBtnClicked(true);
      } else {
        toast.error("I couldn't generate any tasks.");
      }
    } else if (fileToUpload != null) {
      const form = new FormData();
      form.append('my_file', fileToUpload);

      setIsLoading(true);
      try {
        const response = await axios.post(
          `${config.API_URL}/train/${store.get('project')}`,
          form,
          { timeout: 60000 }
        );

        setIsLoading(false);

        if (response.data.length > 0) {
          setTasksResponse(response.data);
          setIsContinueBtnClicked(true);
        } else {
          toast.error("I couldn't generate any tasks.");
        }
      } catch (_) {
        setIsLoading(false);
        toast.error('Something went wrong.');
      }
    } else {
      toast.error('Please input some data.');
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      let file = e.target.files[0];
      if (file) {
        setUploadButtonTitle(file.name);
        setFileToUpload(file);
      }
    }
  };

  function setLoading(ldn) {
    setIsLoading(ldn);
  }

  function handleTasksAdded() {
    setIsLoading(false);
    setIsContinueBtnClicked(false);
    setFeedChat('');
    setFileToUpload(null);
    setTasksResponse([]);
    setUploadButtonTitle('Upload Meeting Transcript');
  }

  return !isLoading ? (
    <>
      {isContinueBtnClicked ? (
        <TasksBoard
          tasks={tasksResponse}
          onTasksFinished={handleTasksAdded}
          setLoading={setLoading}
        />
      ) : (
        <div className={classes.container}>
          <Typography variant="h4" component="h6" className={classes.title}>
            I’m here to help you with the tasks.
            <br />
            Please tell me what are your ideas
            <br />
            or give me a meeting transcript
          </Typography>
          <div
            style={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                backgroundColor: 'transparent',
                width: '100%',
                height: '40px',
                fontSize: '18px',
              }}
            >
              <textarea
                type="text"
                autoComplete="off"
                autoFill="off"
                spellCheck="false"
                resize={false}
                value={feedChat}
                placeholder={'Create a task for the login screen ...'}
                onChange={handleFeedChange}
                style={{
                  height: '40px',
                  color: 'white',
                  width: 'calc(100% - 16px)',
                  resize: 'none',
                  backgroundColor: 'transparent',
                  fontSize: '16px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  border: '1px solid white',
                  borderRadius: '10px',
                }}
              />
            </Typography>
            <Typography variant="body2" style={{ margin: '1rem 0 0 0' }}>
              OR
            </Typography>

            <input
              onChange={handleFileChange}
              type="file"
              id="actual-btn"
              hidden
            />
            <label className={classes.chooseFileButton} htmlFor="actual-btn">
              {uploadButtonTitle}
            </label>
          </div>

          <Button
            variant="contained"
            color="secondary"
            className={`${classes.button} ${classes.continueButton}`}
            onClick={onContinueHandler}
          >
            Continue
          </Button>
        </div>
      )}
    </>
  ) : (
    <div
      style={{
        marginTop: '50%',
      }}
    >
      <CircularProgress style={{ color: '#EA5254' }} />
    </div>
  );
}

export default FeedContainer;
