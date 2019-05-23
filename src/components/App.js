import React, { useReducer , useEffect } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Page from './Page'
import Nav from './Nav';
import Reports from './reports';
import Settings from './settings';


const App = () =>{

  return(
    <BrowserRouter>
      <Nav/>
      <React.Fragment>
        <Route path="/dashboard" component={Page}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/reports" component={Reports}/>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
