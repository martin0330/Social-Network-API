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

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('./:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

router
    .route('./:userId/friends/:friendId')
    .post(createFriend)
    .delete(deleteFriend);

module.exports = router;