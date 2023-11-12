const { ObjectId } = require('mongoose').Types
const { User, Thought } = require('../models')

module.exports = {
    async getUsers (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
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
    },
    async deleteUser (req, res) {
        try {
            const user = await User.findOneAndDelete( { _id: req.params.userId } )

            if (!user) {
                res.status(404).json({ message: 'No user with that ID' })
            }

            await User.deleteMany({ _id: { $in: User.thoughts} })
            res.json({ message: 'User and their thoughts have been deleted!'})
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async addFriend (req, res) {
        try {
            // const friend = 
        } catch (err) {
            res.status(500).json(err)
        }
    }
}