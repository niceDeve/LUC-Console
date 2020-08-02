import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import './custom.scss';
import {NavigationBar} from "./Components/NavigationBar";
import {Home} from "./Screens/Home";
import Container from "react-bootstrap/Container";
import {Enroll} from "./Screens/Enroll";
import {Login} from "./Screens/Login";
import {Console} from "./Screens/Console";

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
            <Route exact path="/console" component={Console}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
