
import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import LeftImage from './login1.jpg';
import Logo from './logo.png';
import {Redirect} from "react-router-dom";
import ReactDOM from "react-dom";
import Company_App from "../app_view/company_view";
class Login extends Component {

    constructor(props){
        super();
        this.state={username:'',password:''}
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit=(event)=>{
        console.log(this.state);
        event.preventDefault();
        axios.post(`http://localhost:8000/users`,this.state )
            .then(res => {
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('userRole',res.data.userRole);
                if(localStorage.getItem('userRole')=='company'){
                    ReactDOM.render(<Company_App/>, document.getElementById('root'));
                }else if(localStorage.getItem('userRole')=='examiner'){

                }else if(localStorage.getItem('userRole')=='supervisor'){

                }else{

                }
                // console.log(localStorage.getItem('userRole'));

            })
    }
    render() {
        const {username,password}=this.state;
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
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control" value={username.value} name="username" onChange={this.handleChange} placeholder="Enter username"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" value={password.value} name="password" onChange={this.handleChange}  placeholder="Enter Password"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary col-md-12 col-sm-12 col-lg-12">Login</button>
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

