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
            }
            console.log(newdata)
            return res.redirect('/')
        })
}

module.exports.delete = function(req,res){
    console.log(req.body)
  return res.render('respo',{title:req.body})
}
