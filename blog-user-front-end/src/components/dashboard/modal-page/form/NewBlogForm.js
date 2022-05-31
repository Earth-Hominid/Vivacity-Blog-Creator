import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../../features/blogs/blogSlice';
import SaveButton from '../../../buttons/SaveButton';

const NewBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog({ title, content }));
    setTitle('');
    setContent('');
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
            onChange={(e) => {
              setContent(e.target.value);
            }}
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
            <SaveButton onSubmit={onSubmit} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default NewBlogForm;
