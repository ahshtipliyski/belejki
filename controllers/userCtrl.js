const Users = require("../models/userModel");
const bcrypt = require('bcrypt') 

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      const {username, email, password} = req.body;
      const user = await Users.findOne({email: email})
      if(user) return res.status(400).json({msg: "The email already exists."})

      const passwordHash = await bcrypt.hash(password, 10)
      const newUser = new Users({
        username: username,
        email: email,
        password: passwordHash
      })
      await newUser.save()
      res.json({ msg: "Sign up Success" });
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  loginUser: (req, res) => {
    try {
      
      res.json({ msg: "Sign up Success" });
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  }
};

module.exports = userCtrl;
