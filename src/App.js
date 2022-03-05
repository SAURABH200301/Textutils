import React,{useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const RemoveBG=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const handlemode = (cls) => {
    RemoveBG();
    if(cls=== null)
    {
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor = "#18416a";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
      }
    }
    else{
      document.body.classList.add(`bg-${cls}`);
      setMode('dark');
      document.body.style.backgroundColor = "#18416a";
      showAlert(" mode enabled", cls)
    }

  }
  return (
    <>
    <Router>
      <div>
        {/* NAVIGATION BAR */}
        <Navbar title="TextUtils" aboutText="It's About Us" mode={mode} setModee={handlemode} />
        {/* ALERT BAR */}
        <Alert alert={alert} />
        <Routes>

          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={
            <div className="container">
            <TextForm heading="Your Text will Analyze here" label="Enter Your Text Here " mode={mode} showAlert={showAlert} />
          </div>
          }/>
            
          
        </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;
