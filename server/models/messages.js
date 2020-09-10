var db = require('../db');


module.exports = {
  getAll: function (callback) {
    db.query('select * from messages', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  // a function which produces all the messages
  create: function (message, callback) {
    // db.query('INSERT INTO messages (message, user) values ()');


  } // a function which can be used to insert a message into the database
};
