import React, { useState } from 'react';
function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
     const response = await fetch(`https://16.171.38.33:8000/api/calculate/?expression=${encodeURIComponent(expression)}`);
      const data = await response.json();
      if (data.error) {
        setResult("Error: " + data.error);
      } else {
        setResult(data.result);
      }
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://16.171.38.33/api/calculate/?expression=${encodeURIComponent(expression)}');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator App Message</h1>
        <button onClick={fetchData}>Get Response</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
