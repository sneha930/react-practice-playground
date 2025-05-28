import React, { useEffect, useState } from 'react';

const ThemeToggle = ({ setColor }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    // ✅ Safeguard: only call if it's a function
    if (typeof setColor === 'function') {
      setColor(isDark ? 'dark' : 'light');
    }
  }, [isDark, setColor]);

  return (
    <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
