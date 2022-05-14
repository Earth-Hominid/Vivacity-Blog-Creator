const express = require('express');
const router = express.Router();

const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.route('/').get(getBlogs).post(createBlog);

router.route('/:id').put(updateBlog).delete(deleteBlog);

module.exports = router;
