const express = require('express')
const router = express.Router()
const { getAllUsers, createNewUser, updateUser, deleteUser } = require('../controllers/userCtrls')

router.get("/", getAllUsers)
router.post("/", createNewUser)
router.put("/:idUser", updateUser)
router.delete("/:idUser", deleteUser)

module.exports = router;