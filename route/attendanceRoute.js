const {postAttendance,getAttendance,updateAttendance,deleteAttendance} = require("../Controller/attandanceController")
const route = require("express").Router()
const auth = require("../midleware/auth")

route.get("/",getAttendance)
route.post("/",postAttendance)
route.put("/:id",updateAttendance)
route.delete("/:id",deleteAttendance)

module.exports = route