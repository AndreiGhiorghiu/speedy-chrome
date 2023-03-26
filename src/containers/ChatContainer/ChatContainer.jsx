import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
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
    color: '#9E9E9E',
  },
});

export default function ChatContainer() {
  const styles = useStyles();

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      message: 'Hey there! How can I help you?',
      typing: false,
    },
  ]);

  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [chatInputValue, setChatInputValue] = useState('');

  const [canSendMessage, setCanSendMessage] = useState(true);

  React.useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleChatInputChange = (event) => {
    setChatInputValue(event.target.value);
  };

  const handleChatSubmit = () => {
    submitChatMessage();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      submitChatMessage();
    }
  };

  function submitChatMessage() {
    if (!canSendMessage) return;

    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        message: chatInputValue,
        typing: false,
      },
      {
        id: chatMessages.length + 2,
        message: 'empty',
        typing: true,
      },
    ]);
    setCanSendMessage(false);
    setChatInputValue('');

    // call
    // update last chat with typing false and response
    // setCanSendMessage(true);
  }

  return (
    <div
      style={{
        position: 'relative',
        height: 'fit-content',
        flex: 1,
        paddingBottom: '66px',
        margin: '1rem 0',
      }}
    >
      <div style={{ height: 'calc(100vh - 210px)', overflowY: 'scroll' }}>
        {chatMessages.map((elem, index) => (
          <ChatTile
            key={index}
            title={elem.message}
            typing={elem.typing}
            left={index % 2 == 0 ? true : false}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {chatMessages.length > 2 ? null : (
        <div className={styles.popup}>
          &bull; When is the next planning?
          <br />
          &bull; What is the iOS repository URL ?<br />
          &bull; Who is my HRBP ?<br />
          &bull; How many vacation days I have ?
        </div>
      )}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '20px',
        }}
      >
        <input
          type="text"
          autoComplete="off"
          autoFill="off"
          readOnly={!canSendMessage}
          spellCheck="false"
          value={chatInputValue}
          placeholder={'Who is the Android developer?'}
          onChange={handleChatInputChange}
          onKeyDown={handleKeyDown}
          style={{
            height: '40px',
            margin: 0,
            padding: 0,
            color: 'white',
            width: '100%',
            backgroundColor: 'transparent',
            fontSize: '16px',
            paddingLeft: '8px',
            paddingRight: '48px',
            marginLeft: '1rem',
            marginRight: '1rem',
            border: '1px solid white',
            borderRadius: '10px',
          }}
        />
        <SendSharpIcon
          sx={{
            position: 'absolute',
            zIndex: 9,
            right: '22px',
            top: '6px',
            rotate: '-40deg',
            cursor: 'pointer',
          }}
          onClick={handleChatSubmit}
        />
      </div>
    </div>
  );
}
