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
    <div className="input-container mt-40">
      <button
       
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
      >
      <a href="http://127.0.0.1:5173/" target='_blank'>Clinck Here To Use The AI</a>
      </button>
      <p className="mt-6 text-lg leading-8 text-gray-600" style={{
        width : "70%",
        margin : "auto"
      }}>
          {
            `Artificial Intelligence (AI) is a rapidly advancing field that focuses on developing intelligent machines capable of performing tasks that typically require human intelligence. AI systems aim to simulate human cognitive functions such as learning, problem-solving, perception, and decision-making.

            One of the fundamental aspects of AI is machine learning, a subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Machine learning algorithms analyze vast amounts of data to identify patterns, make predictions, and make informed decisions.
            
            AI has found applications in various domains, revolutionizing industries and transforming the way we live and work. In healthcare, AI is being used for disease diagnosis, drug discovery, and personalized treatment plans. In transportation, self-driving cars powered by AI algorithms are being developed to enhance road safety and efficiency. AI-powered virtual assistants like Siri, Alexa, and Google Assistant have become an integral part of our daily lives, assisting us with tasks, answering questions, and providing recommendations.
            
            The potential of AI extends beyond individual tasks. It has the capability to tackle complex problems and make sense of vast amounts of data, enabling data-driven decision-making and providing insights that were previously unattainable. AI has been utilized in fields such as finance, marketing, cybersecurity, and manufacturing, among others, to optimize operations, streamline processes, and drive innovation.
            
            However, as AI continues to advance, ethical considerations and responsible development are crucial. Issues such as bias in algorithms, data privacy, job displacement, and the impact on society need to be addressed. Striking a balance between technological progress and ensuring the well-being of individuals and society as a whole is an ongoing challenge.
            
            Despite the challenges, AI holds immense potential for positive transformation. It has the ability to augment human capabilities, automate mundane tasks, and unlock new possibilities in various domains. As research and development in AI continue to progress, we can expect further breakthroughs and innovations that shape the future and drive us towards a more intelligent and connected world.`
          }
            </p>
    </div>
  </div>
  );
}

export default Chat;
