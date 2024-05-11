const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Vishaltr27@', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;