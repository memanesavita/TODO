
require('dotenv').config();
const express=require('express')
const mongoose=require("mongoose")
const todoRoutes=require('dotenv');
const app =express();
const PORT = process.env.PORT;
const connectionUri=process.env.DATABASE_URL
app.use(express.json());
app.use('/todo',require('./routes/Todo'))
app.get("/",(req,res)=>res.json({"massage":"server is running"}));
mongoose.connect(connectionUri,)
.then(()=>{
    console.log('database  connection successful');
    app.listen(PORT,()=>console.log(`server is runningat at  ${PORT}`))

})
.catch((err)=>{
    console.log('databas connection faild');
    console.log(err)

})


























// // Todo123