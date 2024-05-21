const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan("dev"))
dotenv.config()

const PORT = process.env.PORT

const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const upload = require('./src/middleware/multer');

app.use(express.json())
app.use('/assets', express.static('public'))

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: "upload successful"
    })
})

app.use((err, req, res, next) => {
    res.json({ message: err.message })
})

app.listen(PORT, () => {
    console.log(`server running in port ${PORT} `)
})
app.use("/test", (req, res, next) => {
    res.send('server online')
})