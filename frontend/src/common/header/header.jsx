import React from 'react';
import './header.css';
import Logo from "./../../IMG/logo.png";

export class Header extends React.Component {
    constructor(){
        super();
        this.state={
            username:''
        }
    }
    componentDidMount(){
        this.setState({
            username:localStorage.getItem('username')
        });

        console.log(this.state.username)
    }

    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="image col-sm-9 col-md-9 col-lg-9 align-self-start">
                        <img className="header-logo" src={Logo} alt=""/>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3  align-self-start">
                        <i className="far fa-user-circle"></i><label className="username">Welcome {this.state.username}</label>
                    </div>
                </div>
            </div>
        );
    }
}

