import React from 'react';
import './App.css';
import Login from "./views/login";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "./views/dashboard/dashboard";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn:this.props.isLoggedIn};
    }
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Login}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Dashboard}/>
                </div>
            </Router>
        );
    }
}

export default App;