
const ADJECTIVE = [
    'boundless' , 
    'sleepy' ,
    'dangerous' ,
    'slim'
]

const OBJECTS = [
    'spoon' , 
    'window' ,
    'car' , 
    'cooler'
]

function genRandomUserName() {
    const adj = ADJECTIVE[Math.floor(Math.random()*4)]
    const obj = OBJECTS[Math.floor(Math.random()*4)]

    return `${adj}-${obj}`
}

module.exports = {
    genRandomUserName
}