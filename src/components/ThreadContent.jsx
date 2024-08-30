import React from 'react';
import Chat from './Chat';
import MessageThreadWelcome from './MessageThreadWelcome';

function ThreadContent() {
  const messageClicked = true;
  return (    
    <div className="w-100">
      { messageClicked ?
        <Chat /> :
        <MessageThreadWelcome />
      }      
    </div>
  )
}

export default ThreadContent
