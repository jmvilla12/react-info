import React from "react"
import IconSmall from "../assets/react-icon-small.png"

export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={IconSmall}
                alt="React logo"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div className="toggler">
                <span className="toggler--light">Light</span>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <span className="toggler--dark">Dark</span>
            </div>
        </nav>
    )
}