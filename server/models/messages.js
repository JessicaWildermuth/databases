var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * from messages', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  // a function which produces all the messages
  create: function (message, callback) {
    // db.query('INSERT INTO messages (message) values ()');
    var hello = 'Hello Again';
    db.query('INSERT INTO messages (content) values (?)', message, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
      // take message from post request in controller
      // insert into database table message field values message content
    });// a function which can be used to insert a message into the database
  }
};
