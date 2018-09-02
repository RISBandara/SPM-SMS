import React from 'react';
import {Footer} from "./../../common/footer/footer";
import {Header} from "./../../common/header/header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./../../views/login";
import {Navigation} from "../../common/navigation/navigation";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

                <div className="App">
                    <Header/>
                    <div className="row sidebar">
                        <div className="col-md-2 side-nav">
                            <Navigation/>
                        </div>
                        <div className="col-md-10 ">
                            <div className="row">
                                <div className="col-md-12 top-nav">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>

        );
    }
}

export default Dashboard;