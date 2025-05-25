import { useState } from "react";

const LanguageSwitcher = () => {

  const[language, setLanguage] = useState('en');

  const greetings = {
    "en": "Hello",
    "mr": "Namskar",
    "hi": "Namaste"
  }

  return (
    <div>
      <button onClick={() => setLanguage("hi")}>Hindi</button>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("mr")}>Marathi</button>
      <p>{greetings[language]}</p>
    </div> 
  )
}

export default LanguageSwitcher;