const express = require('express');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const path = require ('path');
const cors = require('cors')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors()) //will let accept cross origin request from frontend to backend.

app.use('/images', express.static(path.join(__dirname, 'images')));   //allows which static folder to serve

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;