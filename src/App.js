import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetails from './components/projects/projectDetail';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import CreateProject from './components/projects/createProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Dashboard}></Route>
          <Route path='/project/:id' exact component={ProjectDetails}></Route>
          <Route path='/signin' exact component={SignIn}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
          <Route path='/createproject' exact component={CreateProject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
