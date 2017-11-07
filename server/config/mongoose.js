import mongoose from 'mongoose';
import config from './config.js';

//  init database
mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri, config.db.options, (error) => {
  // Check error in initial connection. There is no 2nd param to the callback.
  if (error) console.error('ERROR:', error);
  console.log('Connect to database:', config.db.uri);
});
