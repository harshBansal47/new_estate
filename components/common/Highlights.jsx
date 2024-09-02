"use client"
import React, { useState } from "react";


const Highlights = () => {
  // State to keep track of the input value and list of highlights
  const [inputValue, setInputValue] = useState("");
  const [highlights, setHighlights] = useState([]);

  // Function to handle adding a new highlight
  const addHighlight = () => {
    if (inputValue.trim() !== "") {
      setHighlights([...highlights, inputValue]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  // Function to handle removing a highlight
  const removeHighlight = (index) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  return (
    <div className="highlights-container">
      {/* Input and Add Button */}
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a highlight..."
        />
        <button onClick={addHighlight}>Add</button>
      </div>

      {/* Display Highlights */}
      <div className="highlights-list">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-item">
            {highlight}
            <button className="remove-btn" onClick={() => removeHighlight(index)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
