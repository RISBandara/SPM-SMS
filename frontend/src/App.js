import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./views/login";
import Dashboard from "./views/dashboard/dashboard";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn:this.props.isLoggedIn};
    }
    render() {
        return (
                <div>
                 <Switch>
                     <Route exact path="/" component={Login} />
                     <Route exact path="/home" component={Dashboard} />
                     <Redirect to="/" />
                 </Switch>
                </div>
        );
    }
}

export default App;