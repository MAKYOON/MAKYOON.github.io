import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Views/Header";
import Presentation from "./Views/Presentation";
import MyProjects from "./Views/MyProjects";
import Contact from "./Views/Contact";
import SurvivalZ from "./Views/SurvivalZ";
import Accueil from "./Views/Accueil";
import GeekPotato from "./Views/GeekPotato";
import Serenity from "./Views/Serenity";
import Footer from "./Views/Footer";
import Competences from "./Views/Competences";
import Formation from "./Views/Formation";

function App() {
    return (
        <div className="App relative font-serif">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Accueil/>
                        <Presentation/>
                        <Competences/>
                        <Formation/>
                        <MyProjects/>
                        <Contact/>
                        <Footer/>
                    </Route>
                    <Route path="/projects/survivalz">
                        <SurvivalZ></SurvivalZ>
                    </Route>
                    <Route path="/projects/geekpotato">
                        <GeekPotato></GeekPotato>
                    </Route>
                    <Route path="/projects/serenity">
                        <Serenity></Serenity>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
