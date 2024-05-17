const sequelize = require('../config/connection');
const {userInfo, blogPost} = require('../models');

const userData = reqire('./userData.json');
const blogPostData = require('./blogPostData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    // need more info here
    // use bulckcreate
};

seedDatabase();