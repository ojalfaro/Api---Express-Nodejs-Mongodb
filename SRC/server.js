import express from 'express'
import { PORT } from './config.js'
import router from './routes/clientsRoutes.js'
import db from './database/database.js'

const app = express()

app.use(express.json())

app.use('/api/v1',router)

db();
app.listen(PORT,() => {
    console.log('Server on, Port: ',PORT)
})