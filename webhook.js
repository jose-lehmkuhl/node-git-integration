'use strict';

module.exports = app => {
  console.log('webhook Running');

  app.post('/webhook', (req, res) => {
    console.log('activate webhook');
    console.log(req.body);
    res.status(200).send();
  });
};
