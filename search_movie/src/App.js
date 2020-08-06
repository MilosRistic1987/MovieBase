import React from 'react';
import Home from './pages/Home';
import  Author from './pages/Author';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='appWrapper'>
        <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/author'component={Author}/>
        </Switch>
        </Router>
      </div>
  );
}

export default App;
