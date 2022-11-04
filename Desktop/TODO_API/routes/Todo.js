const { Router, application } = require('express');
const express=require('express')
const router = express.Router();
const Todo=require('../model/Todo');


router.get('/',(req,res)=>{
    Todo.find().exec((err,todos)=>{
    if(err){
        return res.json({error:err});
    }
    return res.json({data:todos});
})
})

router.post('/create',(req,res)=>{
    const todo= Todo({
        title:req.body.title,
        content:req.body.content
    })
    todo.save((err,todo)=>{
        if(err){
            return res.json({error:"please enter valid details"})
        }
        return res.json({data:todo})
    })
    
})


router.put("/:id",(req,res)=>{
    Todo. findById(req.params.id)
    .exec((err,todo)=>{
        if(err){
            return res.json({ error:err});
        }
        todo.title=req.body.title??todo.titile;
        todo.content=req.body.content;
        todo.complited=req.body.complited;
        todo.save((err,todo)=>{
            if(err){
                return res.json({error:err})
            }
            return res.json({data:todo})
        })
    })
})



router.delete('/: id',(req,res)=>{
    Todo.remove({
        _id:req.params.id
    }).exec((err)=>{
        if(err){
            return res.json({error:err})
        }
        if (result.deletedCount==0){
            return res.json({data:"no Todo Found with give id"})
        }
        return res.json({data:"deleted successfully"})
    })
})



module.exports=router;