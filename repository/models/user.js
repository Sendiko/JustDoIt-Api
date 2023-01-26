const { Sql, DataTypes } = require("sequelize");
const database = require("../database");

const user = database.define("user", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

user.sync().then(() => {
    console.log('table created!')
}).catch((error) => {
    console.error(error);
})

module.exports = user
