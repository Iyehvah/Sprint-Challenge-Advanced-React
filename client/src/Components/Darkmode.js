import React from 'react';
import { useDarkMode } from '../Hook/UseDarkMode';

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode', false);

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div onClick={toggleDarkMode}>

        </div>
    )
}

export default DarkModeSwitch;
