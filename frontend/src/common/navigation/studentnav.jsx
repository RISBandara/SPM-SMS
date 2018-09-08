import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom'



export default class Studentnav extends React.Component {
    render() {
        return (
            <div className="navigation">
                 <Link to="/allocation"><div  className="navigation-item">
                    <span className="nav-item"><i className="fa fa-dashboard"></i>test-student</span>
                </div>
                </Link>
              
                
            </div>
        );
    }
}

