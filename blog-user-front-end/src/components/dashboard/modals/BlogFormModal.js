import BlogForm from '../forms/BlogForm';
import TestBlogForm from '../forms/TestBlogForm';

function BlogFormModal({ close }) {
  return (
    <div className=" w-full bg-indigo-100 fixed flex justify-center items-center">
      <div className="container">
        <div className="titleCloseBtn">
          <button onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="title"></div>
        <div className="body">
          <TestBlogForm />
        </div>
        <div className="footer">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default BlogFormModal;
