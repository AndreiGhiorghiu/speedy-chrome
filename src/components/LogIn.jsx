import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
       backgroundColor: '#2151C5!important',
    },
    disabledButton: {
        backgroundColor: '#E15100!important',
        opacity: '20%',
    },
    footer: {
        position: 'absolute',
        bottom: '4rem',
    },
}));

function Login() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4" component="h6" className={classes.title}>
                Welcome to Speedy Assistant. Please choose your platform
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={`${classes.button} ${classes.enabledButton}`}
                href="https://jira.com"
                target="_blank"
            >
                Log in with Jira
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={`${classes.button } ${classes.disabledButton}`}
                disabled
            >
                Log in with Monday
            </Button>
            <Typography variant="body2" component="footer" className={classes.footer}>
                Publicis Sapient
            </Typography>
        </div>
    );
}

export default Login;
