'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    message: DataTypes.STRING,
    userId: DataTypes.INTEGER,  
    imageUrl: DataTypes.STRING,
    //TODO add new field with array of integers (project 6 - likes/dislikes array)
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
