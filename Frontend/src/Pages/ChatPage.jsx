import React, { useState, useEffect } from 'react';
//import io from 'socket.io-client';

//const socket = io('http://localhost:3000'); // Replace with your socket server URL

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     // Connect to the socket server
//    // socket.connect();

//     // Listen for incoming messages
//    // socket.on('message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Clean up on component unmount
//     return () => {
//       // Disconnect from the socket server
//       socket.disconnect();
//     };
//   }, []);

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      // Send the message to the server
      //socket.emit('message', inputValue);

      // Clear the input field
     // setInputValue('');
     console.log(inputValue);
    }
  };

  return (
    <div>
    <div className="message-container">
      {messages.map((message, index) => (
        <div key={index} className="message bg-gray-100 p-2 my-1">
          {message}
        </div>
      ))}
    </div>
    <div className="input-container mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-64 mr-2"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
      >
        Send
      </button>
    </div>
  </div>
  );
}

export default Chat;
