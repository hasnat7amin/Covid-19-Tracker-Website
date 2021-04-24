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
        <img className="image" src="https://media.defense.gov/2020/Mar/09/2002267476/-1/-1/0/200309-D-HN545-003.JPG"></img>
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
