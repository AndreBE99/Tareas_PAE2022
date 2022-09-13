// Express and others
const express = require('express');
const app = express();
const path = require('path');
const news = require('./news/news');

// Handlebars
const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

// Styles
app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
  console.log('App is running in port 3000');
})

// News get
app.use('/', news);