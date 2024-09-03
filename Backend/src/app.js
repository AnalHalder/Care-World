import express from 'express'
import connectDB from './config/db.config.js'
import dotenv from "dotenv"

dotenv.config({
  path: './.env'
})

const app=express()
const port = 3000
connectDB();
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//doctor user import
import doctorRouter from './routes/doctor.router.js'
app.use("/user/doctor",doctorRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})