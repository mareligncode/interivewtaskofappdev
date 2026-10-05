import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDatabase from './config/database.js'
import contactRoute from './routes/contact.js'
dotenv.config()
connectDatabase()
const PORT=process.env.PORT||5000
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{
    res.send('server is live')
})
app.use('/api',contactRoute)
app.listen(PORT,()=>{
    console.log(`server runing on the port http://localhsot:${PORT}`)
})