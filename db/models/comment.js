const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Post }) {
      this.belongsTo(Post, { foreignKey: 'postId' });
    }
  }
  Comment.init(
    {
      body: DataTypes.TEXT,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
