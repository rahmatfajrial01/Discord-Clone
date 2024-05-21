const authModels = require('../models/authModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { body } = req
    const hashedPassword = await bcrypt.hash(body.password, 10)
    body.password = hashedPassword
    try {
        const findEmail = await authModels.findEmail(body)

        if (findEmail[0].length === 1) {
            res.status(400).json({
                message: "email already exist",
            })
        } else {
            await authModels.register(body)
            res.status(200).json({
                message: "register successfuly",
            })
        }

    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

const login = async (req, res) => {
    const { body } = req
    try {
        const findEmail = await authModels.findEmail(body)

        if (findEmail[0].length === 1) {

            const [login] = await authModels.login(body)
            const compare = await bcrypt.compare(body.password, login[0].password)

            if (login[0].email == body.email && compare) {

                const token = jwt.sign({
                    email: login[0].email
                }, process.env.JWT_SECRET, { expiresIn: '1h' });

                const age = 1000 * 60 * 60 * 24 * 7;

                res.cookie("token", token, {
                    httpOnly: true,
                    maxAge: age
                })


                res.status(200).json({
                    message: 'login succesfully',
                    token
                })

            } else {
                res.status(400).json({
                    message: 'wrong password'
                })
            }
        } else {
            res.status(400).json({
                message: "email not found",
            })
        }

    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

module.exports = {
    register,
    login
}