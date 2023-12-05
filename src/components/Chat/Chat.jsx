import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'tailwindcss/tailwind.css';
import 'react-chat-widget/lib/styles.css';

const MyChatComponent = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);

    setUploadedFile(file);
    addUserMessage(`file:${file.name}`);
  };

  const getCustomLauncher = (handleToggle) => (
    <div className="flex items-center justify-between p-4 bg-gray-200">
        <label htmlFor="file-upload" className="cursor-pointer text-red-600">
          📄ssssssssssssssssssssssssssssssssssssssssss
        </label>
        <input
          type="file"
          id="file-upload"
          className="opacity-0 absolute w-0 h-0"
          onChange={handleFileUpload}
        />
      </div>
  );

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
    <div className="max-w-lg mx-auto mt-8 bg-white rounded-lg overflow-hidden shadow-lg">
      <Widget {...widgetConfig} getCustomLauncher = {(handleToggle) => getCustomLauncher(handleToggle)} />
    </div>
  );
};

export default MyChatComponent;
