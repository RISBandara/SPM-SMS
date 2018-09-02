
import React, { Component } from 'react';
import Storage from '../storage/storage';
import './login.css';
import LeftImage from './login1.jpg';
import Logo from './logo.png';
import {Link} from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);

    }
    handleLoginClick() {
        Storage.createClass=true;
    }
    render() {
        return (
            <div className="login-page">
                <div className="row">
                    <div className="left-panel col-sm-9 col-md-9 col-lg-9">
                        <img className="imgLeft img-fluid" alt="Responsive image" src={LeftImage}/>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div className="row right-panel justify-content-center">
                            <img className="logo img-fluid" alt="Responsive image" src={Logo}/>
                            <div className="text"><h4>Sri Lanka Institute of Information Technology</h4></div><br/>
                            <div className="card col-md-10 col-sm-10 col-lg-10">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                        </div>
                                        <Link to="/home" ><button type="submit" className="btn btn-primary col-md-12 col-sm-12 col-lg-12">Login</button></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

