import { useDispatch } from 'react-redux';
import { deleteBlog, updateBlog } from '../../../features/blogs/blogSlice';

const BlogEntry = ({ blog }) => {
  const dispatch = useDispatch();

  const deleteBlogEntry = () => {
    return dispatch(deleteBlog(blog._id));
  };

  const updateBlogEntry = () => {
    return dispatch(updateBlog(blog._id));
  };

  return (
    <div
      id="blog"
      className="
      m-2 md:m-6 h-auto w-[25rem] md:w-[15rem] md:min-h-[10rem] flex flex-col bg-white px-4 py-1 rounded-lg border-slate-300 border-2 hover:border-indigo-600 hover:border-dotted cursor-pointer hover:shadow-lg hover:bg-indigo-50"
    >
      <div className="w-full flex flex-row items-center justify-end my-2">
        <button className="hover:bg-indigo-200 mr-2 rounded-lg p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:w-6 md:h-6 text-indigo-500 hover:text-indigo-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          onClick={deleteBlogEntry}
          className="rounded-lg hover:bg-rose-200 p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 text-indigo-500 hover:text-rose-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <h2 className=" text-indigo-500 font-[PaytoneOne] text-sm md:text-base">
        {blog.title}
      </h2>
      <h4 className="text-xs md:text-sm font-bold text-slate-400 mt-2 pb-6">
        {new Date(blog.createdAt).toLocaleString('en-US')}
      </h4>
    </div>
  );
};

export default BlogEntry;
