const router = require('express').Router()
const {
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createNewUser)

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser)

////////////////////////// /api/users/:userId/friends/:friendId /////////////////////////////////

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

module.exports = router