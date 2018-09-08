import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom'


export default class StudentNav extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/studentHome">
                    <div className="navigation-item">
                        <span className="nav-item"><i className="fa fa-dashboard"></i>Home</span>
                    </div>
                </Link>
                <Link to="/studentRegister">
                    <div className="navigation-item">
                        <span className="nav-item"><i className="fa fa-dashboard"></i>Register</span>
                    </div>
                </Link>
            </div>
        );
    }
}

