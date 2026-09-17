const mongoose = require("mongoose")
 
const attendanceSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    login:{
        type:Date,
       
    },
    logOut:{
        type:String,
        
    }
})

module.exports = mongoose.model("attendance",attendanceSchema)
 