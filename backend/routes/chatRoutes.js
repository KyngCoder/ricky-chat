const express = require('express')
const { accessChat, fetchChats, renameGroup, removeFromGroup, addToGroup, createGroupChat } = require('../controllers/chatController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

//protect all
router.route('/').post(accessChat)
router.route('/').get(fetchChats)
router.route('/group').post(createGroupChat)
router.route('/rename').put(renameGroup)
router.route('/groupremove').put(removeFromGroup)
router.route('/groupadd').put(addToGroup)

module.exports = router