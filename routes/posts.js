const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const BusBoy = require("busboy");
const path = require("path");
const os = require("os");
const fs = require("fs");

const addPostToDatabase = (userId, caption, token, db) => {
  const queryStr = 'insert into posts (user_id, caption, image_path) values ($1, $2, $3) returning *';
  const queryParam = [userId, caption, token];

  return db
    .query(queryStr, queryParam)
    .then((data) => {
      console.log(data);
      console.log('new post created');
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    })
}


module.exports = (db) => {

  router.post('/', (req, res) => {
    console.log(req.body);
    // res.send('Data received')
    const userId = req.session.user_id;
    const caption = req.body.caption;
    const token = req.body.token;
    addPostToDatabase(userId, caption, token, db)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err.message);
    })


  })

  return router;

}