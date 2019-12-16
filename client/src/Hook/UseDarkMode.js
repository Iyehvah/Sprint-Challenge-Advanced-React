import {useEffect} from 'react';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useState(key, initialValues);

    useEffect(() => {
        const body = document.querySelector('body');
        if(darkMode === true) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode')
        }
    }, [])

    return [darkMode, setDarkMode];
}

export default useDarkMode;