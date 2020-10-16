const { Router } = require('express')
const router = Router()
const {
  getUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
} = require('../controllers/User.controllers')

router.route('/')
  .get(getUsers)
  .post(createUser)
  
router.route('/:id')
  .delete(deleteUser)
  .get(getUser)
  .put(updateUser)

module.exports = router