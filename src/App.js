import React, { useState } from 'react'
import StudentsTable from './components/StudentTable'
import './App.css'
const App = () => {
  const [fontSize, setFontSize] = useState('16px');
  
  return (
    <div className='body' style={{fontSize}}>
      <h1>Students Information Protal</h1><hr/>
        <div className="font-size-controls">
          Font Size:
          <button onClick={() => setFontSize('16px')}>Small</button>
          <button onClick={() => setFontSize('20px')}>Medium</button>
          <button onClick={() => setFontSize('24px')}>Large</button><hr/>
        </div>
      <div className='main-container'>        
          <StudentsTable/>
      </div>
    </div>
  )
}

export default App
