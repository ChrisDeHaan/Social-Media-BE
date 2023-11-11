const { ObjectId } = require('mongoose').Types
const { User, Thought } = require('../models')

// /api/users

module.exports = {
    async getUsers (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },
    async getUserById (req, res) {
        try {
            const user = await User.findOne( { _id: req.params.userId } )
            if (!user) {
                return res.status(404).json({message: 'No user with that ID exists.'})
            }

            res.json(user)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    async createNewUser (req, res) {
        try {
            const newUser = await User.create(req.body)
            res.json(newUser)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    async updateUser (req,res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )

            if (!updatedUser) {
                res.status(404).json({message: 'No user with that ID exists.'})
            }

            res.json(updatedUser)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
}