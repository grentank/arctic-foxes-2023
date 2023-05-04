import express from 'express';
import { Post } from '../../db/models';

const apiPostsRouter = express.Router();

apiPostsRouter.post('/', async (req, res) => {
  try {
    if (req.body.title.length < 3) {
      return res.status(400).json({ message: 'Title is too short' });
    }
    await Post.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ message: 'Database fail' });
  }
});

apiPostsRouter.delete('/:postId', async (req, res) => { // HTTP method: DELETE
  try {
    const { postId } = req.params;
    await Post.destroy({ // .destroy -> Sequelize
      where: {
        id: postId,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default apiPostsRouter;
