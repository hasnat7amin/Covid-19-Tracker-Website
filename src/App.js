import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import GlobalStat from './components/GlobalStat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryStat from './components/CountryStat';
import SelectData from './components/SelectData';
function App() {
  return (
    <Router>
      <div >
        <NavBar />
        <SelectData />
        <Switch>
          <Route path="/country">
            <CountryStat />
          </Route>
          <Route path="/">
            <GlobalStat />
          </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;
