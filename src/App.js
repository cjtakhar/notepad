import React from 'react';
import Login from './components/login';
import Notepad from './components/notepad';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

export default function App() {
  return (
    <div>
       <Router>
          <div>
           <Route exact path="/">
              < Login />
            </Route>
            <Route exact path="/notepad">
              < Notepad />
            </Route>
       </div>
    </Router>
    </div>
   
  );
}
