const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authMiddleware');
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protectRoute, getMe);

module.exports = router;
