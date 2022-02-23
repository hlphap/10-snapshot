import "./App.css";
import Header from "./components/Header/Header";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";

function App() {
    return (
        <HashRouter>
            <div className="app">
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/mountain" />}
                    />
                    <Route
                        path="/mountain"
                        render={() => <Container search="mountain" />}
                    />
                    <Route
                        path="/beach"
                        render={() => <Container search="beach" />}
                    />
                    <Route
                        path="/bird"
                        render={() => <Container search="bird" />}
                    />
                    <Route
                        path="/food"
                        render={() => <Container search="food" />}
                    />
                    <Route
                        path="/search/:searchID"
                        render={(props) => {
                            return (
                                <Container
                                    search={props.match.params.searchID}
                                />
                            );
                        }}
                    />
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
