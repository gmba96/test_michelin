const pool = require('../config/db');

async function createUser(){
    const Book = pool.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};

module.exports = {
    createUser
};
