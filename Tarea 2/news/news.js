const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

async function getNews(req, res, next) {
	const url = `https://newsapi.org/v2/everything?q=${req.query['query']}&apiKey=${process.env.NEWS_API_KEY}`;
    let resp = await fetch(url).then((resp) => {
        return resp.json();
    });
	const articles = resp.articles;
	req.params.articles = articles;

	next();
}

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/search', getNews, (req, res) => {
	if (req.query['query'] === '') {
		res.redirect('/');
	} else {
		res.render('index', { articles: req.params.articles, query: req.query['query'] });
	}
});

module.exports = app;