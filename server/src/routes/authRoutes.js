const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/authCtrls')

router.post("/", register)
router.post("/login", login)

module.exports = router;