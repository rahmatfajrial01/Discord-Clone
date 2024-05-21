const pool = require('../config/database')

const getAllUsers = () => {
    const query = 'SELECT * FROM users';
    return pool.execute(query);
}

const createNewUser = (body) => {
    const query = `INSERT INTO users
                   (username,email,password)
                   VALUES
                   ('${body.username}','${body.email}','${body.password}')`;
    return pool.execute(query)
}

const updateUser = (body, idUser) => {
    const query = `UPDATE users
                   SET username='${body.username}',email='${body.email}',password='${body.password}'
                   WHERE id=${idUser}`;
    return pool.execute(query)
}

const deleteUser = (idUser) => {
    const query = `DELETE FROM users WHERE id=${idUser}`;
    return pool.execute(query)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}