import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import './custom.scss';
import {NavigationBar} from "./Components/Navigation/NavigationBar";
import {Home} from "./Screens/Main/Home";
import Container from "react-bootstrap/Container";
import {Enroll} from "./Screens/Main/Enroll";
import {Login} from "./Screens/Main/Login";
import {Dashboard} from "./Screens/Console/Dashboard";
import {Admin} from "./Screens/Console/Admin";

function App() {
    console.log(global.USER);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={()=><Redirect to="/home"/>}/>
          <Route exact path="/home" component={Home} />
            <Route exact path="/enroll" component={Enroll} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/console/dashboard" component={Dashboard}/>
            <Route exact path="/console/admin" component={Admin}/>
            <Route exact path="/console" render={()=><Redirect to="/console/dashboard"/>}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
