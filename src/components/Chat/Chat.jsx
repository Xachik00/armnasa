import React, { useEffect } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'tailwindcss/tailwind.css';
import 'react-chat-widget/lib/styles.css';

const MyChatComponent = () => {

  useEffect(() => {
    addResponseMessage('Let me know if you have any questions!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    if (newMessage.startsWith('file:')) {
      const fileName = newMessage.substring(5);
      addUserMessage(`Uploaded file: ${fileName}`);
    } else {
      console.log(`New message: ${newMessage}`);
    }
  };

  

  
  const widgetConfig = {
    handleNewUserMessage,
    title: 'Contact Us',
    profileAvatar: '/Images/logo.webp',
    profileClientAvatar: '/Images/clientImage.webp',

    autofocus: true,
    subtitle: "We'll respond as soon as we can.",
    senderPlaceHolder: 'Enter your message here',
    resizable: true,
    emojis: true,
    
  };

  return (

    <div
     >
      <Widget {...widgetConfig}  />
    </div>
  );
};

export default MyChatComponent;
