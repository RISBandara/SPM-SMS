import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Student_App from "./app_view/student_view";

ReactDOM.render(<Login/>, document.getElementById('root'));

registerServiceWorker();
