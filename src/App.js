import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./Screens/Home";
import {NavigationBar} from "./Components/NavigationBar";

function App() {
  return (
    <React.Fragment>
        <NavigationBar/>
      <Router>
        <Switch>
          <Route path={'/Home'} component={Home}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
