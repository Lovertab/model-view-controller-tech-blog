const blogPost = require('./blogPost');
const userInfo = require('./userInfo');


userInfo.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

blogPost.belongsTo(userInfo, {
    foreignKey: 'user_id'
});

module.exports = { userInfo, blogPost};