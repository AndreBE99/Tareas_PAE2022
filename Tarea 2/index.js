const express = require('express');
const app = express();
const path = require('path');

const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'Mis Noticias'});
})

app.listen(3000, () => {
  console.log('app is running in port 3000');
})