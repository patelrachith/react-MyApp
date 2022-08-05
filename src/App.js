import React from 'react';
import './style.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomeComponent from './Components/HomeComponent';
import AboutComponent from './Components/AboutComponent';
import ViewUserComponent from './Components/ViewUserComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/home" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route exact path="/viewuser" component={ViewUserComponent} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}
