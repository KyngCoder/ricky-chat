const express = require('express')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()
const {sendMessage,getMessage} = require('../controllers/messageController')

router.route('/').post(protect,sendMessage)
router.route('/:chatId').get(protect,getMessage)

module.exports = router