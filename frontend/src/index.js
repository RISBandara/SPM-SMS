import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CompanyApp from './app_view/company_view';
import registerServiceWorker from './registerServiceWorker';
import Login from "./views/login";

ReactDOM.render(<CompanyApp/>, document.getElementById('root'));
registerServiceWorker();
