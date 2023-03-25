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
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  profileUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jixXH_Els1MXBRmKFdMQPAHaHa%26pid%3DApi&f=1&ipt=48cc15daa1ef7692d6dd2747de3a66b2a9b586b971e6c9ebe5a888cd259101e8&ipo=images"
  },
});

user
  .sync()
  .then(() => {
    console.log("table created!");
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = user;
