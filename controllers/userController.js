const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../repository/models/user");

module.exports = {
  register: async (req, res) => {
    try {
      const hashedPassword = await bycrypt.hash(req.body.password, 10);
      const match = req.body.password === req.body.password_confirmation;
      const isExist = await user.findAll({
        where: {
          name: req.body.name
        }
      })
      if (isExist.length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Username already in use!.",
        });
      }
      if (!match) {
        return res.status(400).json({
          status: 400,
          message: "Password didn't match.",
        });
      }
      await user.create({
        name: req.body.name,
        password: hashedPassword,
        profileUrl: req.body.profileUrl,
      });
      res.status(201).json({
        status: 201,
        message: "User registered succcesfully!",
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  login: async (req, res) => {
    try {
      const userr = await user.findOne({
        where: {
          name: req.body.name,
        },
      });
      const name = userr.name;
      const password = req.body.password;
      const hashedPassword = userr.password;
      const match = await bycrypt.compare(password, hashedPassword);
      if (!match) {
        return res.status(401).json({
          status: 401,
          message: "The password did not match",
        });
      }

      const token = jwt.sign(
        { name },
        "fb6c8c05f15329aece60fb2e49773f96ab2e0c04e0770bda0c797c0e7119616fff9ce7673eda0602193819b14d8503cf92c9313cfaee6029546c0d3cba67ae7b"
      );

      res.status(200).json({
        status: 200,
        message: "Login success",
        user: {
          username: userr.name,
          profileUrl: userr.profileUrl
        },
        token: token
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  getUser: async (req, res) => {
    try{
      const userr = await user.findOne({
        where: {
          id: req.params.id
        }
      })
      if(userr == null){
        return res.status(404).json({
          status: 404,
          message: "user not found"
        })
      }
      res.status(200).json({
        status: 200,
        message: "User successfully sent",
        user: userr
      })
    }catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  }
};
