import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { customNavbarProps } from "./constants";
import Logo from "./components/CustomNavbar/Logo";
import { navLinks, CardProps, buttonProps,slidesProps,lesSlides } from "./constants";
import CustomCard from "./components/CustomCard";
import CustomCarosel from "./components/CustomCarosel";
import Login from "./containers/Login";
import Inscription from "./containers/Inscription";
import React from "react"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./containers/TodoApp";
function App() {
  return (
  
      
       <Router>
      <Switch>
         
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/inscription">
          <Inscription />
        </Route>
        <Route path="/todo">
          <TodoApp />
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
