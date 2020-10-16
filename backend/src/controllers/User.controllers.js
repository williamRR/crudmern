const userCtrl = {}

const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
  const objects = await User.find()
  res.json(objects)
}

userCtrl.createUser = async (req, res) => {
  const {
    firstName,
    secondName
  } = req.body

  const newUser = new User({
    firstName,
    secondName,
  })
  await newUser.save()
  res.json(newUser)
}

userCtrl.getUser = async (req, res) => {
  const newUser = await User.findById(req.params.id)
  res.json(newUser)
}

userCtrl.updateUser = async (req, res) => {
  const {firstName, secondName} = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    firstName,
    secondName
  })
  res.json({message: 'Usuario editado'})
}

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.send("User deleted")
}

module.exports = userCtrl