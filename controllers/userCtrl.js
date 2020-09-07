const Users = require("../models/userModel");

const userCtrl = {
  registerUser: (req, res) => {
    try {
      
      res.json({ msg: "Sign up Success" });
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  loginUser: (req, res) => {
    res.json({ msg: "Login a User" });
  }
};

module.exports = userCtrl;
