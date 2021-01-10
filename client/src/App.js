import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import "./scss/styles.scss";

import Books from "./pages/Books";
import Savad from "./pages/Saved";
import NavMenu from "./components/NavMenu";

function App() {
    return (
        <Router>
            <div className="application">
                <NavMenu />
                <main className="main">
                    <Container>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path="/" component={Books} />
                                <Route path="/saved" component={Savad} />
                            </Switch>
                        </div>
                    </Container>
                </main>
            </div>
        </Router>
    );
}

export default App;
