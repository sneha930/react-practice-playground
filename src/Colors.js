import React, { useState } from 'react';

export default function ColorListApp() {
  const [inputValue, setInputValue] = useState('');
  const [colors, setColors] = useState([]);

  const addColor = () => {
    const newColor = inputValue.trim().toLowerCase();
    if (newColor === '' || colors.includes(newColor)) return;

    setColors([...colors, newColor]);
    setInputValue('');
  };

  const removeColor = (colorToRemove) => {
    setColors(colors.filter(color => color !== colorToRemove));
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Color List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter a color name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow border rounded px-3 py-2 mr-2"
        />
        <button
          onClick={addColor}
          disabled={inputValue.trim() === ''}
          className={`px-4 py-2 rounded ${
            inputValue.trim() === ''
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Add Color
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {colors.length === 0 && (
          <p className="text-gray-500">No colors added yet.</p>
        )}
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => removeColor(color)}
            style={{ backgroundColor: color }}
            className="cursor-pointer px-4 py-2 rounded text-white font-semibold"
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}
