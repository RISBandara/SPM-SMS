var express = require('express');
var routes = express.Router();

var StudentRoutes = require('./src/Student/Student.Routes');
var CompanyRoutes = require('./src/Company/Company.Routes');
var FormI_3Routes = require('./src/FormI-3/FormI-3.Routes');


routes.use('/students',StudentRoutes);
routes.use('/company',CompanyRoutes);
routes.use('/fi3',FormI_3Routes);

module.exports=routes;