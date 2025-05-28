import React, { useState } from 'react';

const Filter = () => {
  const [name, setName] = useState('');
  const [isDark, setIsDark] = useState(false);

  const characters = [
    "Arya Stark",
    "Jon Snow",
    "Daenerys Targaryen",
    "Tyrion Lannister",
    "Bran Stark",
    "Sansa Stark",
    "Cersei Lannister"
  ];

  // Filter characters by input, case-insensitive
  const filteredNames = characters.filter((char) =>
    char.toLowerCase().includes(name.toLowerCase())
  );

  const toggleTheme = () => {
    if(isDark === false ? setIsDark(true) : setIsDark(false));
  };

  const reset = () => {
    setName('');
  };

  const bgColor = isDark ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${bgColor}`}>
      <button
        onClick={toggleTheme}
        className="p-2 m-2 bg-blue-500 text-white rounded"
      >
        Change Theme
      </button>

      <input
        type="text"
        placeholder="Type name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 border-gray-400 p-2 rounded mb-4"
      />

      <div>
        <button
          onClick={reset}
          className="p-2 m-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>

      <h1 className="text-xl mb-2">List of matches:</h1>

      {filteredNames.length > 0 ? (
        <ul>
          {filteredNames.map((fname, i) => (
            <li key={i}>{fname}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}

      <p className="mt-2">Number of matches: {filteredNames.length}</p>
    </div>
  );
};

export default Filter;
