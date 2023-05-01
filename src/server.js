import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import { Post } from '../db/models';

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  // console.log('query params:', req.query);

  const allPosts = await Post.findAll();

  const initState = { allPosts };

  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE HTML>');
  res.end(html);
});

app.post('/newpost', async (req, res) => {
  try {
    const { title, message } = req.body;
    await Post.create({
      title,
      body: message,
    });
    // console.log('REQUEST BODY:', req.body);
    res.redirect('/');
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get('/delete/:postId', async (req, res) => {
  try {
    await Post.destroy({
      where: { id: req.params.postId },
    });
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get('/hello', (req, res) => {
  res.send('Hello, ELbrus!');
});

app.get('/status', (req, res) => {
  res.sendStatus(501);
});

app.get('/json', (req, res) => {
  res.json({
    name: 'Alex',
    age: 30,
  });
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
