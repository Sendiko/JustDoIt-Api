const sql = require('sequelize')
const database = new sql("justdoit_api", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

database.authenticate().then(() => {
    console.log('connected to database!')
}).catch((error) => {
    console.error(error);
})

module.exports = database
