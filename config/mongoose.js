const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/todolistapp")
const db= mongoose.connection
db.on('error',console.error.bind(console,'error on connecting db'))
db.once('open',function(){
    console.log("db connect success")
})

module.exports = db