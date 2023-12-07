import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage, } from 'react-chat-widget';
import 'tailwindcss/tailwind.css';
import 'react-chat-widget/lib/styles.css';
import Swal from 'sweetalert2';
import { MessageOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { sendMail } from '../../store/action/ContactAction';

const MyChatComponent = () => {
  const dispatch = useDispatch();
  const [showMail, setShowMail] = useState(false);
  const [mailVal, setMailVal] = useState({
    mail: "",
    text: "",
  });

  useEffect(() => {
    addResponseMessage('Let me know if you have any questions!');
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    setMailVal({ ...mailVal, text: newMessage })

    await dispatch(sendMail(mailVal))

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

  const emailComponent = () => {
    Swal.fire({
      position: "bottom-right",
      title: 'Write your email address',
      input: 'email',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Ok',
      showLoaderOnConfirm: true,
      preConfirm: async (val) => {
        try {
          setMailVal({ ...mailVal, mail: val });
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        setShowMail(true);
      }
    });
  };



  return (
    <div>
      {showMail ? (
        <Widget {...widgetConfig} />
      ) : (
        <button
          onClick={() => emailComponent()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex items-center fixed w-[60px] h-[60px] rounded-full bottom-4 right-8"
        >
          <MessageOutlined className='w-full flex justify-center items-center text-[28px] ' />
        </button>
      )}
    </div>
  );
};

export default MyChatComponent;
