import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setExpression(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Calculator</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={expression} onChange={handleChange} />
          <button type="submit">Calculate</button>
        </form>
        <h2>Result: {result}</h2>
      </header>
    </div>
  );
}

export default App;
