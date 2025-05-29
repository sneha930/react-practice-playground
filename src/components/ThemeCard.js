import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const ThemeCard = () => {

  const{theme, toggleTheme} = useContext(ThemeContext);

  const styles = theme === 'light' ? 'bg-white text-black'
      : 'bg-gray-800 text-white';

  return (
    <div className={`p-6 rounded-xl shadow-md ${styles}`}>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded">Toggle theme</button>
    </div>
  )
}

export default ThemeCard;