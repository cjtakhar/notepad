import React from 'react';
import Login from './components/login';
import Notepad from './components/notepad';
import Home from './components/home';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';

export default function App() {
  return (
    // <Router>
    //   <div className="container">
    //     <Routes>
    //       <Route exact path="/">
    //         < Home />
    //       </Route>
    //       <Route exact path="/login">
            < Login />
    //       </Route>
    //       <Route exact path="/notepad">
    //         < Notepad />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}
