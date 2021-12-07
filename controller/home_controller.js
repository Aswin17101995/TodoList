const Todo = require('../model/todolist')

module.exports.home=function(req,res){
    Todo.find({},function(err,data){
        if(err)
        {
            console.log("error in fetching data");
            return
        }
        return res.render('home',{list:data,title:"Aswins"})
    })
  
}

module.exports.addtask= function(req,res){
    console.log(req.body.date)
    Todo.create({ description:req.body.description,
        category:req.body.category,
        duedate:req.body.date,
        completed:false},function(err,newdata){
            if(err)
            {
                console.log("error on adding")
                return
            }
            console.log(newdata)
            return res.redirect('/')
        })
}

module.exports.delete= async function(req,res)
{
    console.log("hello im comming",req.body)
    var ids= req.body;
    for(var i=0;i<ids.length;i++)
    {
        await Todo.findByIdAndUpdate(ids[i],{completed:true})
    }
   return res.redirect("/")
}