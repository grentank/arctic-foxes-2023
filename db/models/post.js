const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ Comment }) {
      this.hasMany(Comment, { foreignKey: 'postId' });
    }
  }
  Post.init(
    {
      image: DataTypes.TEXT,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Post',
    },
  );
  return Post;
};
