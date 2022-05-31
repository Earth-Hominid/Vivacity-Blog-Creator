import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react';
import Editor from '../../editor/Editor';

import createBlog from '../../../features/blogs/blogSlice';

const BlogFormInput = () => {
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    content: '',
    publish: false,
  });

  const [enabled, setEnabled] = useState(false);

  const { title, content, publish } = blogFormData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setBlogFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlog({ title, content, publish }));
    setBlogFormData({
      title: '',
      content: '',
      publish: false,
    });
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className="mt-4 flex flex-col space-y-4 font-[Montserrat] lg:text-4xl md:text-2xl">
          <div className="flex flex-col sm:flex-row space-x-4 justify-center items-center">
            <label
              htmlFor="title"
              className="font-[PaytoneOne] text-3xl md:text-5xl mb-2"
            >
              Title
            </label>{' '}
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
          <textarea
            className="
            p-4
            border-2
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            leading-relaxed"
            cols={50}
            rows={35}
            type="text"
            id="content"
            name="content"
            placeholder="The Enterprise is in orbit above a planet whose surface, our sensors tell us, is devoid of all life, a world destroyed and dead for at least a half a million years, yet from it comes a voice, the energy of pure thought, telling us something has survived here for those thousands of centuries. Since exploration and contact with alien intelligence is our primary mission, I've decided to risk the potential dangers and resume contact. Log entry out."
            value={content}
            onChange={onChange}
          />
          <Switch.Group
            as="div"
            className="py-3 flex flex-col items-center justify-center space-x-2 md:space-x-4 md:flex-row md:justify-center"
          >
            <div className="flex flex-col">
              <Switch.Label
                as="h2"
                htmlFor="publish"
                className="py-2 font-bold text-center md:text-left text-2xl md:text-3xl text-slate-900"
              >
                Publish Blog
              </Switch.Label>
              <Switch.Description
                as="p"
                className="py-2 mb-2 md:py-0 md:m-0 text-sm md:text-lg text-slate-500 text-center md:text-left"
              >
                Automatically publish blog live to your website.
              </Switch.Description>
            </div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-indigo-500' : 'bg-slate-300'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Publish blog live to website</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </Switch.Group>
          <div className="flex justify-center space-x-4 py-5">
            <button
              type="submit"
              className="bg-indgo-500 rounded-lg border-2 bg-sky-500 text-white border-sky-500 hover:text-sky-500 font-bold px-8 py-2 mb-5
              lg:px-14
              lg:py-3
              hover:bg-white
              "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BlogFormInput;
