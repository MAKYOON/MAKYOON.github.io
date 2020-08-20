import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Components/Header";
import Posts from "./Views/Posts";
import Presentation from "./Views/Presentation";
import MyProjects from "./Views/MyProjects";
import Contact from "./Views/Contact";
import SurvivalZ from "./Views/SurvivalZ";
import Accueil from "./Views/Accueil";
import GeekPotato from "./Views/GeekPotato";
import Serenity from "./Views/Serenity";
import Footer from "./Components/Footer";
import Competences from "./Views/Competences";

function App() {
    return (
        <div className="App relative min-h-screen font-serif">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Accueil/>
                        <Presentation/>
                        <Competences/>
                        <MyProjects/>
                        <Contact/>
                        <Footer/>
                    </Route>
                    <Route path="/posts">
                        <Posts></Posts>
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
