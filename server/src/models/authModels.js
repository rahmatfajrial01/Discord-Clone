const pool = require('../config/database')

const findEmail = (body) => {
    const query = `SELECT email FROM users WHERE email='${body.email}'`
    return pool.execute(query)
}

const register = (body) => {
    const query = `INSERT INTO users
                   (username,email,password)
                   VALUES
                   ('${body.username}','${body.email}','${body.password}')`;
    return pool.execute(query)
}

const login = (body) => {
    const query = `SELECT * FROM users WHERE email='${body.email}'`
    return pool.execute(query)
}


module.exports = {
    register,
    findEmail,
    login
}