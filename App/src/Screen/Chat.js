import React from 'react';
import { useHistory } from "react-router-dom";
import '../css/App.css';
import Chatbot from 'react-chatbot-kit'
import config from '../Chatbot/config';
import ActionProvider from '../Chatbot/ActionProvider';
import MessageParser from '../Chatbot/MessageParser';



function Chat() {
  let history = useHistory();
  
  return (
    <div className="App">
      
      <div style={{ Maxwidth: '300px' }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div >
  );
}

export default Chat;
