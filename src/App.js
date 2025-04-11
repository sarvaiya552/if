// src/App.js
import React, { useState } from 'react';

function App() {
  // State to manage visibility of content
  const [isVisible, setIsVisible] = useState(false);  // Initially false, the content will be hidden

  // Toggle visibility function
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility of content
  };

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>If-Else Conditional Rendering in React</h1>

      <button 
        onClick={toggleVisibility} 
        style={{ padding: '10px', margin: '10px' }}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>

      {/* Conditional rendering using if-else statement */}
      {isVisible ? (
        <div style={{ marginTop: '20px' }}>
          <h2>The content is visible!</h2>
          <p>This is shown when the state is set to true.</p>
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h2>The content is hidden!</h2>
          <p>This is shown when the state is set to false.</p>
        </div>
      )}
    </div>
  );
}

export default App;
