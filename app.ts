import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import shema from './shema'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

shema()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
