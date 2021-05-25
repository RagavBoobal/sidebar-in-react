import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trees from './pages/Trees';
import Plants from './pages/Plants';
import Sampling from './pages/Sampling';
import Contactus from './pages/Contactus';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/trees' exact component={Trees} />
          <Route path='/plants' exact component={Plants} />
          <Route path='/sampling' component={Sampling} />
          <Route path='/contactus' component={Contactus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;