// we are using seqelize and dotenv here so that we don't show our password and user name
// importing sequelize library
const Seqelize = require('sequelize');
// utilizes dotenv to load .env file and sets it to process.env object
require('dotenv').config();

let seqelize;

if (process.env.DB_URL) {
    seqelize = new Seqelize(process.env.DB_URL);
} else {
    seqelize = new Seqelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres'
        }
      );
}

module.exports = seqelize;
