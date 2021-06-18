const { Router } = require('express')

const route = Router()

route.get('/' , (req , res)=> {
    res.send('//Todo all posts')
})

module.exports = {
    postRoute : route
}