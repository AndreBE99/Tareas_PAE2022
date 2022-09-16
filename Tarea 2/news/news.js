// Express and others
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

// Get function
async function getNews(req, res, next) {
	let url;
	if (req.query['query'] === ''){
		url = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}`;
	} else {
		url = `https://newsapi.org/v2/everything?q=${req.query['query']}&apiKey=${process.env.NEWS_API_KEY}`;
	}
	let resp = await fetch(url).then((resp) => {
			return resp.json();
	});
	const articles = resp.articles;

	req.params.articles = articles;

	next();
}

// Empty get for search bar
app.get('/', getNews, (req, res) => {
	res.render('index', { articles: req.params.articles});
});

// Get with articles about query
app.get('/search', getNews, (req, res) => {
	if (req.query['query'] === '') {
		res.redirect('/');
	} else {
		res.render('index', { articles: req.params.articles, query: req.query['query'] });
	}
});

// Get with specific article
app.get('/article', getNews, (req, res) => {
	// req.params.articles.forEach((article, index) => {
	// 	console.log(article.title);
	// });
	res.render('article', { article: req.params.articles[1]});
});

// New endpoint to get articles in a json format
app.get('/articles', getNews, (req, res) => {
	res.send(req.params.articles)
});

module.exports = app;