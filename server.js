const express = require('express')
const { db } = require('./db/models');

const { userRoute } = require('./routes/users')
const { postRoute } = require('./routes/posts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users' , userRoute)
app.use('/api/posts' , postRoute)
app.use('/' , express.static(__dirname + '/public'))

db.sync()
.then(()=> {
    app.listen(8363 , ()=> {
        console.log("Server Started on http://localhost:8363");
    })
    
}).catch((err)=> {
    console.error(new Error("Could not start database"))
    console.error(err);
})