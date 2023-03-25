import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import {useState} from "react";
import SendSharpIcon from '@mui/icons-material/SendSharp';
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
    const [chatInputValue, setChatInputValue] = useState('');

    const handleChatInputChange = (event) => {
        setChatInputValue(event.target.value);
    };

    const handleChatSubmit = () => {
      console.log("handle chat submit");
    };

    const chatMessages = [
        {
            id: 1,
            message: "Hey there! How can I help you?"
        },
        {
            id: 2,
            message: "Who is Adrian’s manager?"
        },
        {
            id: 3,
            message: "Adrian’s manager is Dragos."
        },
        {
            id: 4,
            message: "Tomorrow we have planning."
        },
        {
            id: 5,
            message: "Got it."
        },
        {
            id: 6,
            message: "Adrian’s manager is Dragos."
        },
        {
            id: 7,
            message: "Tomorrow we have planning."
        },
        {
            id: 8,
            message: "Got it."
        },
        {
            id: 9,
            message: "Adrian’s manager is Dragos."
        },
        {
            id: 10,
            message: "Tomorrow we have planning."
        },
        {
            id: 11,
            message: "Final"
        },
    ];

    return (
        <div style={{position:'relative', height: 'fit-content', flex: 1, paddingBottom: '70px', margin: '1rem 0'}}>
            <div style={{height: 'calc(100vh - 210px)', overflowY: 'scroll'}}>
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
            <Typography variant="h6" sx={{ position: 'fixed', display: 'flex', bottom: '70px', left: 0, right: 0, maxWidth: '90%', flexGrow: 1, backgroundColor: 'transparent', width: '100%', height: '40px', fontSize: '18px', margin: '1rem auto' }}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFill="off"
                    spellCheck="false"
                    value={chatInputValue}
                    placeholder={"Who is the Android developer?"}
                    onChange={handleChatInputChange}
                    style={{height: '40px', color: 'white', width: 'calc(100% - 16px)', backgroundColor: 'transparent', fontSize: '16px', paddingLeft: '8px', paddingRight: '8px', border: '1px solid white', borderRadius: '10px', margin: '1rem auto'}}
                />
                <SendSharpIcon sx={{marginTop: '25px', marginLeft: '-33px', rotate: '-40deg', cursor: 'pointer'}} onClick={handleChatSubmit}/>
            </Typography>
        </div>
    );
}