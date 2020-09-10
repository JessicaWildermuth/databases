var models = require('../models');
//models.messages.getAll
// console.log(models.messages.getAll);
module.exports = {
  get: function (req, res) {
    res.writeHead(102, headers);
  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
