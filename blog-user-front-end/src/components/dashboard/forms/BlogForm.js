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
    <section className="bg-white flex flex-col items-center mt-2 md:m-10 lg:m-20 text-lg">
      <form onSubmit={handleSubmit}>
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
              id="title"
              name="title"
              placeholder="Captain's log, Stardate 4768.3."
              value={title}
              onChange={onChange}
              className="w-[20rem] md:w-[30rem] border-2 rounded-md p-3 text-xs sm:text-sm md:text-base lg:text-lg"
            />
          </div>
          <label
            htmlFor="content"
            className="font-bold pt-4 text-center text-3xl"
          >
            Content
          </label>
          <div
            className="
            border-2
            p-4
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            leading-relaxed"
          ></div>
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
