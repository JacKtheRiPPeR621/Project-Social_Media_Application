const {Posts , Users} = require('../db/models')

async function createNewPost(userId , title , body) {
    const post = await Posts.create({
        userId,
        title,
        body
    })
    return post
}

async function findAllPosts(query){
    //Todo: Handle query params
    const posts = await Posts.findAll({
        include: [Users]
    })
    return posts
}

module.exports = {
    createNewPost,
    findAllPosts
}

// async function task() {
//     // console.log(await createNewPost(
//     //     1,
//     //     'This is sample post',
//     //     'Body of the post goes here'
//     //     )
//     // ),
//     // console.log(await createNewPost(
//     //     2,
//     //     'This is another sample post',
//     //     'Body of some another post goes here'
//     //     )
//     // )

//     const posts = await showAllPosts()
//     for(let p of posts) {
//         console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n================\n`)
//     }
// }
// task();