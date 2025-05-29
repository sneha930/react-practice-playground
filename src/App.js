import React from 'react'
import { ThemeProvider } from './ThemeContext'
import ThemeCard from './components/ThemeCard'

const App = () => {
  return (
    // This wraps the app and gives access to theme
    <ThemeProvider>
      <div className="min-h-screen flex justify-center items-center">
        <ThemeCard />
      </div>
    </ThemeProvider>
  )
}

export default App
