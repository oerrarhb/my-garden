import { useState } from "react";
import '../styles/Footer.css';

function Footer()
{
    const [inputValue, setInputValue] = useState('');

    function handleInput(e)
    {
        setInputValue(e.target.value);
    }

    function handleBlur()
    {
        if(!inputValue.includes('@'))
        {
            alert('Hold your horses ! Email is not valid');
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
            πΏπ±π΅ For people who love plants πΏπ±π΅
            </div>
            <div className="lmj-footer-elem">Share your email with us !</div>
            <input placeholder="Email" onChange={handleInput} value={inputValue} onBlur={handleBlur}/>
        </footer>
    );
}

export default Footer;