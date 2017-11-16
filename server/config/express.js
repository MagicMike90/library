import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import mongoose from "mongoose";
import passport from 'passport';
import authCheckMiddleware from '../middlewares/requiredAuth';

import auth from '../routes/auth';
import index from '../routes/index';
import users from '../routes/users';
import books from '../routes/books';
import transaction from '../routes/transaction';
import mock from '../routes/mock';


const app = express();
app.use(express.static(path.join(__dirname, '/../../dist')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(passport.initialize());

// pass the authorization checker middleware
// app.use('/api', authCheckMiddleware);

// add routes
app.use('/', index);
app.use('/auth', auth);
app.use('/api/users', users);
app.use('/api/transaction', transaction);
app.use('/mock', mock);
app.get('*', (req, res) => {
  console.log('route to no where');
  res.sendFile(path.resolve('dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    const msg = {
      'error': {
        message: err.message,
        error: err
      }
    }
    res.status(err.status || 500).json(msg);
  });
}

// // production error handler
// // no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500).json('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
