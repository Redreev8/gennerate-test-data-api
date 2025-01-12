import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import shema from './shema'
import dataRouter from './controller/data/data.router'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/api', dataRouter)

shema()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
