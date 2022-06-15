import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBlog } from '../../../features/blogs/blogSlice';
import SaveButton from '../../buttons/SaveButton';

const UpdateBlogForm = ({ blog }) => {
  const [blogTitle, setBlogTitle] = useState({ title: blog.title });
  const [blogContent, setBlogContent] = useState({ content: blog.content });

  const { title } = blogTitle;
  const { content } = blogContent;
  const blogId = blog._id;

  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setBlogTitle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onContentChange = (e) => {
    setBlogContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
    };

    dispatch(updateBlog({ blogId, blogData }));
    refreshPage();
  };

  return (
    <section className="">
      <form onSubmit={onSubmit}>
        <div className="mt-4 flex flex-col space-y-4 font-[Montserrat] lg:text-4xl md:text-2xl">
          <div className="flex flex-col sm:flex-row space-x-4 justify-center items-center">
            <label
              htmlFor="title"
              className="font-[PaytoneOne] text-3xl md:text-5xl mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onTitleChange}
              className="w-[20rem] md:w-[30rem] border-2 rounded-md p-3 text-xs sm:text-sm md:text-base lg:text-lg"
            />
          </div>

          <label
            htmlFor="content"
            className="font-bold pt-4 text-center text-3xl"
          >
            Content
          </label>
          <textarea
            type="text"
            name="content"
            id="content"
            value={content}
            onChange={onContentChange}
            className="
            p-4
            border-2
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            leading-relaxed"
            cols={30}
            rows={30}
          />
          <div className="flex justify-center space-x-4 py-5">
            <SaveButton onSubmit={onSubmit} title={'Save Changes'} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default UpdateBlogForm;
