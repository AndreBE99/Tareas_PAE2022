// const { application } = require('express');
require('dotenv').config();
const express = require('express');

const app = express()
const port = process.env.PORT || 3000;
// const url = process.env.DB_URL;

const database = require('./database');
const userRoutes = require('./src/users/routes');
// const router = require('express').Router();
// const apiRoutes = require('./api');



app.get('', async (req, res) => {
  res.send("Api works");
});

app.use('/users', userRoutes);

database.connect().then(client => {

  const db = client.db('MemeGenerator');
  database.db(db);
 
  app.listen(port, () => {
    console.log('app is running in port ' + port);
    
  });

}).catch(err => {
    console.log('Failed to connect to database');
});

 