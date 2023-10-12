import './App.css';
import React, { useState } from 'react'; //Shortcut -- imrs
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import { BrowserRouter, Route, Routes } from "react-router-dom"; //https://reactrouter.com/en/v6.3.0/getting-started/tutorial

// let name = "Om";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const colorMode = (cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
  }


  const toggleMode = (cls) => {
    removeBodyClass();
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled", "success"); //We will set value in showAlert and it will pass values to setAlert as mentioned in cross function and then those values will be used in props.alert.type and props.alert.message in alert.js
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#757b82';
      showAlert(" Dark Mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter> {/* To deploy we commented all routing things */}
      {/* <h1>Hello {name}</h1> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} colorMode={colorMode} showAlert={showAlert} aboutText="About Us" />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm textHeading="Text-Analyzer" mode={mode} showAlert={showAlert} /> */}
        {/* <About/> */}

        <Routes>
          <Route exact path="/" element={<TextForm textHeading="Text-Analyzer" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>

      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
// Deployed using https://create-react-app.dev/docs/deployment/ Open site and search Github and then do as said...Website https://omsingh228.github.io/Text-Utils/