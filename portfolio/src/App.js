import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Components/Header";
import Posts from "./Views/Posts";
import Presentation from "./Views/Presentation";
import MyProjects from "./Views/MyProjects";
import Contact from "./Views/Contact";
import SurvivalZ from "./Views/SurvivalZ";

function App() {
    return (
        <div className="App relative min-h-screen">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Presentation/>
                        <MyProjects/>
                        <Contact/>
                    </Route>
                    <Route path="/posts">
                        <Posts></Posts>
                    </Route>
                    <Route path="/projects/survivalz">
                        <SurvivalZ></SurvivalZ>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
