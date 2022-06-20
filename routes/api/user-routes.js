const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller')