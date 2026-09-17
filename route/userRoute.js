const {register,getUser,login} = require("../Controller/userController")
const route = require("express").Router()

route.get("/",getUser)
route.post("/",register)
route.post("/login",login)

module.exports = route