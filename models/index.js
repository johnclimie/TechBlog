const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
// Posts belongs to user
Post.belongsTo(User, {
    foreignKey: 'user_id',
})
// Posts has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})
// Comments belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comment };