const connection = require('../config/connection')
const { User, Thought } = require('../models')
const {
    getRandomUsername,
    getRandomEmail,
    getRandomThought,
    getRandomReaction
} = require('./data')

connection.on('error', err => err)

connection.once('open', async () => {
    let  userCheck = await connection.db.listCollections({ name: 'users' }).toArray()
    if (userCheck.length) {
        await connection.dropCollection('users')
    }

    let thoughtCheck = await connection.db.listCollections({name: 'thoughts' }).toArray()
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts')
    }

    // Populate Users
    const usernames = []

    // Populate Thoughts
    const thoughts = []

    //Populate Reactions
    const reactions = []

})