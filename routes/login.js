const express = require('express');
const router = express.Router();

const authenticateUser = (db, username, password) => {
  const queryStr = 'select id from users where username = $1 and password = $2';
  const queryParam = [username, password];

  return db
    .query(queryStr, queryParam)
    .then((data) => {
      console.log(data.rows);
      if (data.rows.length === 0) {
        return false;
      } else {
        return data.rows[0].id;
      }
    })
    .catch(err => {
      console.log(err.message);
    })
}

module.exports = (db) => {

  router.post('/', (req, res) => {
    console.log('LOGIN REQUEST', req.body);
    const username = req.body.username;
    const password = req.body.password;

    authenticateUser(db, username, password)
      .then((result) => {
        if (result) {
          console.log('RESULT', result);
          req.session.user_id = result;
          res.json({status:true})
          // res.end('Login successful')
        } else {
          res.json({status: false})
        }
      })
  })

  return router;
}