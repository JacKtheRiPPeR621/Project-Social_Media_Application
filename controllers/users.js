const {Users} = require('../db/models')
const {genRandomUserName} = require('../utils/username')

async function createAnonUser() {
    const user  = await Users.create({
        username: genRandomUserName()
    })

    return user
}

module.exports = {
    createAnonUser
}

//Test Code

async function task() {
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
}
task();