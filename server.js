const express = require('express')
const { db } = require('./db/models');

const app = express();

db.sync({force : true})
.then(()=> {
    app.listen(8363 , ()=> {
        console.log("Server Started on http://localhost:8363");
    })
    
}).catch((err)=> {
    console.error(new Error("Could not start database"))
    console.error(err);
})