const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const errorService = require('./services/error.service');

const routes = require('./constants/routes');
const index = require('./routes/index.route');
const user = require('./routes/user.route');
const employee = require('./routes/employee.route');

const app = express();

if (app.get('env') === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('default'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.userRouter, user);
app.use(routes.employeeRouter, employee);
app.use(routes.defaultRouter, index);

app.use(errorService.notFound);
app.use(errorService.internal);

module.exports = app;
