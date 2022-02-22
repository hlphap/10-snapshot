import "./App.css";
import Header from "./components/Header/Header";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Item from "./components/Container/Container";

function App() {
    return (
        <HashRouter>
            <div className="container">
                <Route
                    render={(props) => {
                        return <Header />;
                    }}
                />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/mountain" />}
                    />
                    <Route
                        path="/mountain"
                        render={() => <Item search="mountain" />}
                    />
                    <Route
                        path="/beach"
                        render={() => <Item search="beach" />}
                    />
                    <Route path="/bird" render={() => <Item search="bird" />} />
                    <Route path="/food" render={() => <Item search="food" />} />
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
