import express from 'express';
import { Post, Comment } from '../../db/models';

const apiCommentsRouter = express.Router();

apiCommentsRouter.get('/', async (req, res) => {
  const allComments = await Comment.findAll();
  res.json(allComments);
});

apiCommentsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findOne({ where: { id } });
  res.json(comment);
});

apiCommentsRouter.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ message: 'Database fail' });
  }
});

apiCommentsRouter.delete('/:commId', async (req, res) => {
  try {
    const { commId } = req.params;
    await Comment.destroy({
      where: {
        id: commId,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

apiCommentsRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const targetComment = await Comment.findByPk(id);
  targetComment.body = req.body.body;
  await targetComment.save();
  res.json(targetComment);
});

export default apiCommentsRouter;
