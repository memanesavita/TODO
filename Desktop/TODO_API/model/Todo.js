const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Todo_project')
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})











// const mongoose=require('mongoose')
// const Schema=mongoose.Schema;
// const model=mongoose.model

// const todoSchema=new Schema({
//     Email:{
//         type:String,
//         required:true
//     },
//     Password:{
//         type:String,
//         required:true
//     }


// })

// console.log("done")
// module.exports=model('todo',todoSchema);

const signupSchema=new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true
        

    },
    password : {
        type:String,
        required:true
       

    }
})
console.log("done")
const Register=new mongoose.model("register",signupSchema)
module.exports=Register
