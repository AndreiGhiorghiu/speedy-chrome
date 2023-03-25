import * as React from 'react';
import { makeStyles } from '@mui/styles';
import ChatTile from '../../components/ChatTile';

const useStyles = makeStyles({
    popup: {
        position: 'absolute',
        backgroundColor: '#181818',
        borderRadius: '10px',
        height: 'fit-content',
        padding: '20px',
        top: '30%',
        left: 0,
        right: 0,
        margin: 'auto',
        width: 'fit-content',
        fontSize: '14px',
        textAlign: 'left',
        lineHeight: '26px',
        color: '#9E9E9E'
    },
});

export default function ChatContainer() {
    const styles = useStyles();

    const chatMessages = [
        {
            id: 1,
            message: "Hey there! How can I help you?"
        },
        // {
        //     id: 2,
        //     message: "Who is Adrian’s manager?"
        // },
        // {
        //     id: 3,
        //     message: "Adrian’s manager is Dragos."
        // },
        // {
        //     id: 4,
        //     message: "Tomorrow we have planning."
        // },
        // {
        //     id: 5,
        //     message: "Got it."
        // },
    ];

    return (
        <div style={{position:'relative', height: 'fit-content', flex: 1, paddingBottom: '70px'}}>
            <div style={{height: 'calc(100vh - 182px)', overflowY: 'scroll'}}>
                {chatMessages.map((elem, index) => (<ChatTile
                    title={elem.message}
                    left={index % 2 == 0 ? true : false}
                />))}
            </div>
            {
                chatMessages.length > 2 ? null 
                :
                <div className={styles.popup}>
                    &bull; When is the next planning?<br/>
                    &bull; What is the iOS repository URL ?<br/>
                    &bull; Who is my HRBP ?<br/>
                    &bull; How many vacation days I have ?
                </div>
            }
        </div>
    );
}