import React, { useState } from 'react';
import './style.css';
import logo from '../assets/faviconTransparent.png';

export default function Header() {
    const [Text, setText] = useState('');

    function Explanation(){
      // Explanation: Insert your backend code here guys
        return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi optio, velit quam vero vel dicta non repellat vitae aspernatur tempore odio in cumque, distinctio eos laudantium exercitationem eveniet eius debitis?"
    }
    function Summary(){
      // Summary: Insert your backend code here guys
      return "Summary text"
    }
    function Solutions(){
      // Solutions: Insert your backend code here guys
        return "Solutions text"
    }
    
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
                        <input type="radio" name="radio" defaultChecked onClick={() => setText(Explanation())} />
                        <span className="name">Explanation</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" onClick={() => setText(Summary())}/>
                        <span className="name">Summary</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" onClick={() => setText(Solutions())} />
                        <span className="name">Solutions</span>
                    </label>
                </div>
                <p className="textBox">{Text}</p>
            </div>
        </div>
    );
}