import React, { useState } from 'react'

const Language = () => {

  const[language, setLanguage] = useState('');

  return (
    <div className='m-8 border-black'>
      <select onClick={(e) => setLanguage(e.target.value)} name="" id="">
        <option value="">Select Language</option>
        <option value="marathi">Marathi</option>
        <option value="hindi">Hindi</option>
        <option value="english">English</option>
      </select>

      <div>
        {language === "marathi" && <h1>Namskar</h1>}
        {language === "english" && <h1>Hello</h1>}
        {language === "hindi" && <h1>Namaste</h1>}
      </div>
    </div>
  )
}

export default Language