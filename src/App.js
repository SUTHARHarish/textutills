
import './App.css';
import { ToastContainer ,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';
import Fotter from './components/Fotter';


// import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [Mode,setMode] = useState('light'); // whether dark mode is enables or not 
  const [alert,setAlert] = useState(null);

  const showtAlert = (message,types)=>
  {
      setAlert({
        msg:message,
        types:types
      })
      setTimeout(() => {
        setAlert(null)
      }, 4000);
  }

  const toggleMode = ()=>{
    if(Mode === 'Light')
    {

      setMode('Dark');
      document.body.style.backgroundColor = 'gray';
      // showtAlert("Dark mode enelbal ","success");
      toast("Dark mode enelbal");
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode is best'
      // }, 2800);
      // setInterval(() => {
      //   document.title = 'install TextUtils - Dark Mode'
      // }, 1500);
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showtAlert("Light mode enelbal ","success");
      toast("Light mode enelbal");
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
 <Router>
  <Navbar title="TaxtUtils" Mode={Mode} toggleMode={toggleMode}/>
  <ToastContainer />

    <Alert alert={alert}/>
  <div className="container my-3">
    <Switch>
      <Route exact path="/about">
        <About Mode={Mode}/>
      </Route>
      <Route  exact path="/">
        <TextForm showtAlert={showtAlert} heading="Enter the text to analyze below" Mode={Mode}/>
      </Route>
    </Switch>
  </div>
</Router>
<Fotter/>
  </> 
  );
}

export default App;
