const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../model/User")

exports.register = async (req,res) =>{
    try {
        const userExist = await User.findOne({email:req.body.email})
        if (userExist ) return res.status(500).json({errors:true,message:"user already Exist..!!"})
            req.body.password = await bcrypt.hash(req.body.password,10)
            const data = await User.create(req.body)
            return res.json({errors:false, data:data})
    } catch (error) {
       return res.status(500).json({errors:true,message:error.message})
    }
}


exports.getUser = async (req,res) =>{
    try {
            const data = await User.find()
            return res.json({errors:false, data:data})
    } catch (error) {
       return res.status(500).json({errors:true,message:error.message})
    }
}


exports.login = async (req,res) =>{
    try {
        const userExist = await User.findOne({email:req.body.email})
        if (!userExist ) return res.status(500).json({errors:true,message:"email or password is invalied"})

           const comparePassword = bcrypt.compare(req.body.password,userExist.password)
           if (!comparePassword) return res.status(500).json({error:true,message:"email or password is Invalied"})

            const token = await jwt.sign({id:userExist._id,roel:userExist.role}.process.env.SEC)
            
            return res.json({errors:false, data:{token:token,user:userExist}})
    } catch (error) {
       return res.status(500).json({errors:true,message:error.message})
    }
}