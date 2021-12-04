const express = require('express')
const db = require('./config/mongoose')

const port = 8000
const app = express()

app.set('view engine','ejs')
app.set('views','./views')


app.use(express.static('assets'))
app.use('/',require('./routes/index'))

app.listen(port,function(err){
    if(err)
    {
        console.log(err)
    }
    console.log('server running running success')
})

