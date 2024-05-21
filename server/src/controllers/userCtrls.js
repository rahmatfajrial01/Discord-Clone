const userModels = require('../models/userModels')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModels.getAllUsers()
        res.status(200).json({
            message: "masuk",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req
    try {
        await userModels.createNewUser(body)
        res.status(200).json({
            message: "add new user success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { body } = req
    const { idUser } = req.params
    try {
        await userModels.updateUser(body, idUser)
        res.status(200).json({
            message: "user updated successfully",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params
    try {
        await userModels.deleteUser(idUser)
        res.status(200).json({
            message: "user deleted successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}