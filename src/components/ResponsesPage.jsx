import { useState, useEffect } from 'react';

const ResponsesPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    setMessages(storedMessages);
  }, []);

  return (
    <div className="responses">
      <h2>Responses</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsesPage;