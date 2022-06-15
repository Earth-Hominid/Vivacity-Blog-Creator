import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../features/blogs/blogSlice';
import SaveButton from '../../buttons/SaveButton';

const NewBlogForm = ({ closeModal }) => {
  const [blogTitle, setBlogTitle] = useState({ title: '' });
  const [blogContent, setBlogContent] = useState({ content: '' });

  const { title } = blogTitle;
  const { content } = blogContent;

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

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const blogInfo = {
      title,
      content,
    };

    dispatch(createBlog(blogInfo));
    setBlogTitle('');
    setBlogContent('');
    closeModal();
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
              placeholder="Captain's log, Stardate 4768.3."
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
            placeholder="The Enterprise is in orbit above a planet whose surface, our sensors tell us, is devoid of all life, a world destroyed and dead for at least a half a million years, yet from it comes a voice, the energy of pure thought, telling us something has survived here for those thousands of centuries. Since exploration and contact with alien intelligence is our primary mission, I've decided to risk the potential dangers and resume contact. Log entry out."
          />
          <div className="flex justify-center space-x-4 py-5">
            <SaveButton onSubmit={onSubmit} title={'Save Blog'} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default NewBlogForm;
