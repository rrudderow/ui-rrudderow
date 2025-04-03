import React, { useState } from 'react';
import './App.css';  // This line imports the App.css file


function App() {
  // Declare state variables
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Function to handle increment
  const increment = () => setCount(count + 1);

  // Function to handle name input change
  const handleNameChange = (event) => setName(event.target.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple React App</h1>
      <p>Current Count: {count}</p>
      <button
        onClick={increment}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Increment Counter
      </button>

      <div style={{ marginTop: '20px' }}>
        <h3>Enter your name:</h3>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name"
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <p>Hello, {name ? name : 'Stranger'}!</p>
      </div>
    </div>
  );
}

export default App;
