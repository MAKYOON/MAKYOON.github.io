import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";
import About from "./Views/About";
import Posts from "./Views/Posts";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/posts/:id">
                        <Posts></Posts>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
