import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [themeColor, setThemeColor] = useState('light');
  const [text, setText] = useState('');

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${themeColor === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        className={`border-2 p-4 m-2 text-center ${themeColor === 'dark' ? 'bg-black text-white border-white' : 'bg-white border-black text-black'}`}
        onChange={(e) => setText(e.target.value)} />
      <span>{text.length} characters</span>
      <ThemeToggle setColor={setThemeColor} />
    </div>
  );
};

export default App;
