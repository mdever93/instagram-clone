const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    console.log('CREATE POST REQUEST', req.body);
    res.end('Data received')
  })

  return router;

}