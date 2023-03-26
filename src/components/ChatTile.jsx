import { makeStyles } from "@mui/styles";
import React from 'react';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 1rem 1rem 1rem',
    },
    reversed: {
        flexDirection: 'row-reverse',
    },
    bubble: {
        width: '36px',
        height: '36px',
        borderRadius: '36px',
        backgroundColor: '#EA5254',
        color: 'white',
        fontSize: '20px',
        lineHeight: '36px',
        textAlign: 'center'
    },
    bubbleRight: {
        width: '36px',
        height: '36px',
        borderRadius: '36px',
        backgroundColor: '#565A59',
        color: 'white',
        fontSize: '16px',
        lineHeight: '36px',
        textAlign: 'center'
    },
    message: {
        fontSize: '16px',
        marginLeft: '10px',
        marginRight: '10px',
        maxWidth: 'calc(100% - 56px)',
        textAlign: 'left',
    },
    messageRight: {
        textAlign: 'right',
    }
});

function ChatTile({ title, typing, left }) {
    const styles = useStyles();

    return (
        <div className={`${styles.container} ${left ? '' : styles.reversed}`}>
            <div className={left ? styles.bubble : styles.bubbleRight}>{left ? 'S' : 'Me'}</div>
            <span className={`${styles.message} ${!left ? styles.messageRight : ''}`}>
                {
                    typing ?
                        <span className={"loading"}>Typing</span>
                    :
                        title
                }
            </span>
        </div>
    );
}

export default ChatTile;