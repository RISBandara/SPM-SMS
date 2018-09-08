import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Student_App from "./app_view/student_view";
import Login from './views/login';
import Company_App from './app_view/company_view';

ReactDOM.render(<Login/>, document.getElementById('root'));

registerServiceWorker();
