var models = require('../models');

//models.messages.getAll
// console.log(models.messages.getAll);
module.exports = {
  get: function (req, res) {
    //originally passed in headers as second argument, but was throwing an error as headers was not defined
    models.messages.getAll((err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // take client request

    // var params = [req.body['userName'], req.body['content'], req.body['roomName']];
    var params = ['Carina says hi!', 'House', 'carina'];
    models.messages.create(params, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
    // send to model create
    // respond with done

  } // a function which handles posting a message to the database
};



