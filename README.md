# Scrimba - React Info Site
This is a solution to the React info site project on [Scrimba](https://v2.scrimba.com/learn-react-c0e).

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
- [My process](#my-process)
  - [Technologies used](#technologies-used)
  - [What I Learnt](#what-i-learnt)
- [Author](#author)

## Overview

### Requirements

<ul>
  <li>Change the page's color mode</li>
</ul>

### Screenshot
- Project view on a desktop device.
<img src = "./public/screenshot.PNG" alt="screenshot" height="400px">

### Links
- Live Site: [@Netlify](https://reactinfosite-jmvilla12.netlify.app)
- Source Code: [@Github](https://github.com/jmvilla12/react-info)

### Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My process

### Technologies used

- HTML5
- CSS
- React.JS
  - Event listeners
  - State
  - Conditional rendering

### What I Learnt
<ul>
  <li>Functions can be passed also as a property</li>
</ul>

```jsx
export default function App() {

    const [darkMode, setDarkMode] = React.useState(true);

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
```

## Author
Jose Manuel Villa 
