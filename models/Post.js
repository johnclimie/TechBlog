const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postcontent: {
            type:DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;