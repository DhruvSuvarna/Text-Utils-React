import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert1, setAlert] = useState(null);

  const showAlert = (message, type) => {
        setAlert({msg: message,
          type: type
        })

        setTimeout(() => {setAlert(null);}, 1500);
  }

  const modeColors = {dark1 : '#212529', dark2 : '#343a40', light1: '#f8f9fa', blue1 : '#22245b', blue2 : '#383c98', green1 : '#315b22', green2 : '#2b7a0f', red1 : '#5d2121', red2 : '#8f3434'}

  const toggleMode = () => {
      if(mode === 'light') {
        setMode('dark');
        document.body.style.background = '#343a40'; document.body.style.color = 'white';
        showAlert("Dark Mode has been Enabled","success"); document.title = "Text Utils - Dark Mode Enabled"
        /*setInterval(() => {document.title = "Text Utils is Amazing";}, 500); setInterval(() => {document.title = "Install Text Utils Now";}, 1000);*/
      }
      else{
        setMode('light');
        document.body.style.background = 'white'; document.body.style.color = 'black';
        showAlert("Light Mode has been Enabled","success"); document.title = "Text Utils - Light Mode Enabled"
      }
  }

  const bluetoggleMode = () => {
    if(mode !== 'blue') {
      setMode('blue');
      document.body.style.background = modeColors.blue2; document.body.style.color = 'white';
      showAlert("Blue Mode has been Enabled","success"); document.title = "Text Utils - Blue Mode Enabled"
    }
    if(mode === 'blue'){
      setMode('light');
      document.body.style.background = 'white'; document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled","success"); document.title = "Text Utils - Light Mode Enabled"
    }
  }

  const greenMode = () => {
    if(mode !== 'green') {
      setMode('green');
      document.body.style.background = modeColors.green2; document.body.style.color = 'white';
      showAlert("Green Mode has been Enabled","success"); document.title = "Text Utils - Green Mode Enabled"
    }
    if(mode === 'green'){
      setMode('light');
      document.body.style.background = 'white'; document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled","success"); document.title = "Text Utils - Light Mode Enabled"
    }
  }

  const redMode = () => {
    if(mode !== 'red') {
      setMode('red');
      document.body.style.background = modeColors.red2; document.body.style.color = 'white';
      showAlert("Red Mode has been Enabled","success"); document.title = "Text Utils - Red Mode Enabled"
    }
    if(mode === 'red'){
      setMode('light');
      document.body.style.background = 'white'; document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled","success"); document.title = "Text Utils - Light Mode Enabled"
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} blueMode={bluetoggleMode} greenMode={greenMode} redMode={redMode} modeColors={modeColors}/>
      <Alert alert1={alert1} mode={mode}/>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode} modeColors={modeColors}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;
