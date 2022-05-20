const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authMiddleware');
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.route('/').get(protectRoute, getBlogs).post(protectRoute, createBlog);

router
  .route('/:id')
  .put(protectRoute, updateBlog)
  .delete(protectRoute, deleteBlog);

module.exports = router;
