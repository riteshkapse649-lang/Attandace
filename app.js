const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dns').setServers(['8.8.8.8', '1.1.1.1']);//imp 
require("dotenv/config")

const attandanceRoute = require("./route/attendanceRoute")
const userRoute = require("./route/userRoute")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/user",userRoute)
app.use("/api/attendance",attandanceRoute)

app.listen(process.env.PORT || 5000)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}
db()