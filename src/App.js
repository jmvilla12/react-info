import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css';

export default function App() {

    const [darkMode, setDarkMode] = React.useState(() => {
        const storedPreference = localStorage.getItem('darkMode');
        if (storedPreference) {
            return storedPreference === 'true';
        }
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode;
    });

    React.useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
      }, [darkMode]);

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}
