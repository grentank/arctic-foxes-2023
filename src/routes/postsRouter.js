import express from 'express';
import { Post, Comment } from '../../db/models';

const postsRouter = express.Router();

postsRouter.route('/').get(async (req, res) => {
  const posts = await Post.findAll();
  const initState = { posts };
  res.render('Layout', initState);
});

postsRouter.get('/add', (req, res) => {
  res.render('Layout');
});

postsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const onePost = await Post.findOne({ where: { id }, include: Comment });
    // const onePost = await Post.findByPk(id);
    if (!onePost) {
      return res.sendStatus(404);
    }
    const initState = { onePost };
    res.render('Layout', initState);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default postsRouter;
