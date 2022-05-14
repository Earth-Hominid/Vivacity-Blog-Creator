// @Desc Get blogs
// @route GET /api/blogs
// @access is Private

const getBlogs = async (req, res) => {
  res.status(200).json({ message: 'Get Blogs!' });
};

// @desc Create blog
// @route POST /api/blogs
// @access Private

const createBlog = async (req, res) => {
  res.status(200).json({ message: 'Create blog' });
};

// @desc Update blog post
// @route PUT /api/blogs/:id
// @access Private

const updateBlog = async (req, res) => {
  res.status(200).json({ message: `Update Blog ${req.params.id}` });
};

// @desc Delete blog post
// @ route DELETE /api/blogs/:id
// @access Private

const deleteBlog = async (req, res) => {
  res.status(200).json({ message: `Delete Blog ${req.params.id}` });
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
