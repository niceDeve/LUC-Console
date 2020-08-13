import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import './custom.scss';
import {Home} from "./Screens/Main/Home";
import {Enroll} from "./Screens/Main/Enroll";
import {Login} from "./Screens/Main/Login";
import {Dashboard} from "./Screens/Console/Dashboard";
import {LUCtoCAD} from "./Screens/Console/Admin/LUCtoCAD";
import {WhtoLUC} from "./Screens/Console/Admin/WhtoLUC";
import {AwardLUC} from "./Screens/Console/Admin/AwardLUC";

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
            <Route exact path="/console/LUCtoCAD" component={LUCtoCAD}/>
            <Route exact path="/console/WhtoLUC" component={WhtoLUC}/>
            <Route exact path="/console/AwardLUC" component={AwardLUC}/>
            <Route exact path="/console" render={()=><Redirect to="/console/dashboard"/>}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
