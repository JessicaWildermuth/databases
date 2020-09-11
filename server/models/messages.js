var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT messages.userName, messages.content, users.roomName FROM messages LEFT OUTER JOIN users ON messages.user_id = users.id ', (err, data) => {
      callback(null, data);
    });
  },
  // a function which produces all the messages
  create: function (params, callback) {
    // db.query('INSERT INTO messages (message) values ()');
    db.query('INSERT INTO messages (content, roomName, user_id) VALUES (?, ?, (SELECT id FROM users WHERE userName = ?))', params, (err, res) => {
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
