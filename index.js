require('dotenv').config();

const app = require('express')();
const express = require('express');
const server = require('http').createServer(app);
const port = process.env.PORT || 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const { Pool } = require('pg');
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-config/instagram-images-1b68c-firebase-adminsdk-m90ff-30670a73e7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.use(cors({ origin: `*`, credentials: true }));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(morgan('dev'));
app.use(cookieSession({
  name: 'session',
  keys: ['2FCF9B2F-5DD0-4EEE-B964-D00E916CA634', 'B01EB1F4-19A7-4F97-B0AC-C979174408A4']
}));

const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect()
  .then(() => console.log('db connected'))
  .catch(err => console.error('db connection error', err.stack));

const newUser = require('./routes/new_user');
app.use('/api/new_user', newUser(db));
const login = require('./routes/login');
app.use('/api/login', login(db));

server.listen(port, function () {
  console.log(`Listening on http://localhost: ${port}`);
});