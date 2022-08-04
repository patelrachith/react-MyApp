import React from 'react';
import './style.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomeComponent from './Components/HomeComponent';
import AboutComponent from './Components/AboutComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router forceRefresh={true}>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/home" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}
