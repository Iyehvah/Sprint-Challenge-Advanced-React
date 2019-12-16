import React from 'react';
import useDarkMode from './Hook/useDarkMode';

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode', false);

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <button onClick={toggleDarkMode}>DarkMode</button>
        </div>
    )
}

export default DarkModeSwitch;
