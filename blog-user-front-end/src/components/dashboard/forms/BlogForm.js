import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

const BlogForm = () => {
  const [blogFormData, setblogFormData] = useState({
    title: '',
    content: '',
    publish: false,
  });

  const { title, content, publish } = blogFormData;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setblogFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="flex flex-col items-center border-2 rounded-lg shadow-lg m-5
    md:m-10
    lg:m-20 border-slate-300 text-lg"
    >
      <form onSubmit={handleSubmit}>
        <div
          className="
        mt-4 flex flex-col space-y-4 font-[Montserrat]
        lg:text-4xl 
        md:text-2xl
        "
        >
          <div className="flex flex-row space-x-4 justify-center items-center">
            <label htmlFor="title" className="text-5xl font-[PaytoneOne]">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Awesome blog title"
              value={title}
              onChange={onChange}
              className="border-2 rounded-md p-2"
            />
          </div>
          <label
            htmlFor="content"
            className="font-bold pt-4 text-center text-3xl"
          >
            Content
          </label>
          <textarea
            cols={35}
            rows={20}
            type="text"
            id="content"
            name="content"
            placeholder="Wonderful blog content..."
            value={content}
            onChange={onChange}
            className="border-2 p-4"
          />
          <div className="flex justify-center space-x-4 pb-5">
            <button
              type="submit"
              className="bg-sky-500 rounded-lg border-2 border-sky-500 text-white font-bold px-4 py-2 mb-5
              lg:px-14
              lg:py-3
              hover:bg-inherit
              hover:text-sky-500"
            >
              Save
            </button>
            <button
              type="submit"
              className="bg-indgo-500 rounded-lg border-2 border-indigo-500 text-indigo-500 font-bold px-4 py-2 mb-5
              lg:px-14
              lg:py-3
              hover:bg-indigo-500
              hover:text-white"
            >
              Save and publish
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BlogForm;
