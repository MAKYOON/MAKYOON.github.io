import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";
import Posts from "./Views/Posts";
import Presentation from "./Views/Presentation";
import MyProjects from "./Views/MyProjects";
import Contact from "./Views/Contact";

function App() {
    return (
        <div className="App relative min-h-screen">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Presentation/>
                        <MyProjects/>
                        <Contact/>
                    </Route>
                    <Route path="/posts">
                        <Posts></Posts>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
