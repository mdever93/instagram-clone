const express = require('express');
const router = express.Router();

const checkDatabaseForUser = (db, email, username) => {
  const queryStr = 'select id from users where email=$1 or username=$2';
  const queryParam = [email, username];

  return db
    .query(queryStr, queryParam)
    .then((data) => {
      console.log('LINE 11', data.rowCount);
      return data.rowCount;
    })
    .catch(err => {
      console.log(err);
    })
}
const createNewUser = (db, email, username, password) => {
  // checkDatabaseForUser(db, email, username)
  //   .then((result) => {
  //     if (result) {
  //       console.log("RESULT", result);
  //       return result;
  //     }
  //     else {


        const queryStr = 'insert into users (username, email, password) values ($1, $2, $3) returning *';
        const queryParam = [username, email, password];

        return db
          .query(queryStr, queryParam)
          .then((data) => {
            console.log(data);
            console.log('new user created');
            return data;
          })
          .catch(err => {
            console.log('ERROR', err.message);
          })
    //   }
    // })
}

module.exports = (db) => {

  router.post('/', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log('LINE 24', req.body);
    checkDatabaseForUser(db, email, username)
    .then((result) => {
      if (result) {
        res.end('You already have an account. Would you like to sign in?');
        return;
      }
      
      createNewUser(db, email, username, password)
      .then((result) => {
        console.log('LINE 28', result);
        res.json(result);
      })
    })
  })

  return router;
}