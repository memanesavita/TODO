

const Register=require('../model/mod')

const jwt=require("jsonwebtoken")

signup= async(req,res)=>{
    try{
        bcrypt
        const reactRegister=new todo({
            email:req.body.email,
            password:req.body.password
        })
        const result= await reactRegister.save();
        res.send({message:"signup sucssesfully",result:result})
        // console.log(result);

    }catch(err){
        res.send({message:'Email id already exits!'})
        // console.log('')
    }
}



module.exports={singup}



const express=require("express")

const mongoose=require("mongoose")

// const router=require('./Router/Router')

app=express()

app.use(express.json())

app.use ("./",routes)

app.listen(5000,()=>console.log('Listening to the port..'))


