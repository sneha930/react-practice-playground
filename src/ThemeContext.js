import { createContext, useState } from 'react';

// 1️⃣ Create a context (like starting a new Wi-Fi network)
export const ThemeContext = createContext();

// 2️⃣ Make a ThemeProvider (like setting up the router)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // keeps track of the current theme

  // 3️⃣ A function to switch between light and dark
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // 4️⃣ Share theme and toggle function with any component inside
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
