import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";

function App() {
    return (
        <div className="App relative min-h-screen">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
