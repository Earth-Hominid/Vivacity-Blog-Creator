asyncHandler = require('express-async-handler');
const Blog = require('../models/blog');
const User = require('../models/user');

// @Desc Get blogs
// @route GET /api/blogs
// @access is Private

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user.id });
  res.status(200).json(blogs);
});

// @desc Create blog
// @route POST /api/blogs
// @access Private

const createBlog = asyncHandler(async (req, res) => {
  if (!req.body.title && !req.body.content) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    user: req.user.id,
  });
  res.status(200).json(blog);
});

// @desc Update blog post
// @route PUT /api/blogs/:id
// @access Private

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error('Blog not found');
  }

  // Check if user exists in db
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Ensure logged in user matches blog user
  if (blog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBlog);
});

// @desc Delete blog post
// @ route DELETE /api/blogs/:id
// @access Private

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error('Blog not found');
  }

  // Check if user exists in db
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Ensure logged in user matches blog user
  if (blog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await blog.remove();
  // return the id
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
