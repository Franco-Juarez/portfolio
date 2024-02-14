'use client'
import React, { useEffect, useState } from 'react';

const LavaLamp = () => {
    
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/lordicon.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
      const mainLogo = document.querySelector(".main-logo");
      mainLogo.src = (theme === "dark" ? "logo.svg" : "light-logo.svg");
      document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme])
    
    const handleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    const colors = theme === "light" ? ['primary:#E08A00', 'secondary:#211F1C'] : ['primary:#ffffff', 'secondary:#FFAA00'];

    return (
      <button 
      aria-label="Toggle Dark Mode" 
      onClick={handleTheme}
      className='fixed bottom-0 right-0'>
        <lord-icon
            src="https://cdn.lordicon.com/fwlababq.json"
            trigger="loop"
            delay="0"
            colors={colors}
            style={{ width: '80px', height: '80px' }}
        />
      </button>
    );
};

export default LavaLamp;