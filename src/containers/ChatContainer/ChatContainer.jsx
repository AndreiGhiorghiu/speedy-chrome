import * as React from 'react';
import ChatTile from '../../components/ChatTile';

export default function ChatContainer() {
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
    ];

    return (
        <div style={{position:'relative', height: 'fit-content', flex: 1, paddingBottom: '70px'}}>
            <div style={{height: 'calc(100vh - 182px)', overflowY: 'scroll'}}>
                {chatMessages.map((elem, index) => (<ChatTile
                    title={elem.message}
                    left={index % 2 == 0 ? true : false}
                />))}
            </div>
            
        </div>
    );
}