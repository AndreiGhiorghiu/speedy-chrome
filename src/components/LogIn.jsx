import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../assets/img/logo.png';
import { toast } from 'react-hot-toast';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        minHeight: '65%',
    },
    title: {
        marginBottom: '2rem',
        fontSize: '1.5rem!important',
    },
    button: {
        margin: '1rem',
        color: '#fff!important',
    },
    enabledButton: {
       backgroundColor: '#EA5254!important',
    },
    disabledButton: {
        backgroundColor: '#E15100!important',
        opacity: '20%',
    },
    footer: {
        position: 'absolute',
        bottom: '2rem',
    },
}));

function Login() {
    const classes = useStyles();

    const [urlValue, setUrlValue] = React.useState('');

    const handleUrlChange = (event) => {
        setUrlValue(event.target.value);
    };

    const handleConnectClick = () => {
        if(urlValue.length > 1) {

        } else {
            toast.error("Please input JIRA url.")
        }
    };

    return (
        <div className={classes.container}>
            <Typography variant="h4" component="h6" className={classes.title}>
                Welcome to Speedy Assistant
            </Typography>

            <span style={{fontSize: '15px', marginTop: '50px', marginBottom: '10px'}}>Please fill your JIRA url below:</span>
            <Typography variant="h6" sx={{ maxWidth: '60%', backgroundColor: 'transparent', width: '100%', height: '40px', fontSize: '18px' }}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFill="off"
                    spellCheck="false"
                    value={urlValue}
                    placeholder={"example.atlassian.net"}
                    onChange={handleUrlChange}
                    style={{textAlign: 'center', height: '40px', color: 'white', width: 'calc(100% - 16px)', backgroundColor: 'transparent', fontSize: '16px', paddingLeft: '8px', paddingRight: '8px', border: '1px solid white', borderRadius: '10px'}}
                />
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={`${classes.button} ${classes.enabledButton}`}
                onClick={handleConnectClick}
            >
                CONNECT
            </Button>
            <Typography variant="body2" component="footer" className={classes.footer}>
                <img style={{
                    height: '100px',
                }} src={chrome.runtime.getURL(Logo)}/>
            </Typography>
        </div>
    );
}

export default Login;
