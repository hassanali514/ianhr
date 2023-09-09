// import logo from './logo.svg';
// import './App.css';
import React, { Fragment } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './component/User/Login';

function App() {

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])

  return (
    <Router>
      <Route exact path="/" Component={Login}/>
    </Router>
  );
}

export default App;
