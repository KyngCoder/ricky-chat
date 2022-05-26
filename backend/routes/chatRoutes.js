const express = require('express')
const { accessChat, fetchChats, renameGroup, removeFromGroup, addToGroup, createGroupChat } = require('../controllers/chatController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

//protect all
router.route('/').post(protect,accessChat)
router.route('/').get(protect,fetchChats)
router.route('/group').post(protect,createGroupChat)
router.route('/rename').put(renameGroup)
router.route('/groupremove').put(removeFromGroup)
router.route('/groupadd').put(protect,addToGroup)

module.exports = router