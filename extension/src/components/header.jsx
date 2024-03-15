import React, { useState } from 'react';
import './style.css';
import logo from '../assets/faviconTransparent.png'; // Import the logo image

export default function Header() {
  const [Text, setText] = useState(''); // Create a state for the text input

  return (
    <div>
      <header>
        <img src={logo} alt="GitGuru Logo" className="logo-small" />
        <div className="gitguru-text">
          Git Guru
        </div>
      </header>
      <div className='wow'>
        <div className="radio-inputs">
          <label className="radio">
            <input type="radio" name="radio" onClick={() => setText('Explanation')} />
            <span className="name">Explanation</span>
          </label>
          <label className="radio">
            <input type="radio" name="radio" defaultChecked />
            <span className="name">Summary</span>
          </label>
          <label className="radio">
            <input type="radio" name="radio" onClick={() => setText('Solutions')} />
            <span className="name">Solutions</span>
          </label>
        </div>
        <input type="text" value={Text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
}