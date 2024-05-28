import { useState } from 'react';

const AskMeAnythingForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the message in the local storage
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));

    // Clear the input field
    setMessage('');
  };

  return (
    <div className="form-container">
      <h2>Ask Me Anything</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message or question..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AskMeAnythingForm;