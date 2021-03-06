const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Creates comment model
class Comment extends Model{}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        commentcontent: {
            type: DataTypes.STRING,
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
        modelName: 'comment'
    }
);

module.exports = Comment;