import React from 'react';
import "./App.css";
import About from "./about";
import Shop from "./shop"
import Navbar from "./nav"
import ItemDetail from "./itemDetail"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>   
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/shop" exact component={Shop}/>
    <Route path="/shop/:id" component={ItemDetail}/>
    </Switch>
    </div>
    </Router>
  );
  }
  const Home=()=>(
    <div>
      <h1>I am Home page</h1>
    </div>
  );

export default App;
