import BlogEntry from './BlogEntry';

const RecentBlogs = ({ blogs }) => {
  return (
    <>
      <section
        id="recent__blogs"
        className=" m-4 flex items-center justify-center md:justify-start"
      >
        {blogs.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row md:space-x-6">
              {blogs.map((blog) => (
                <BlogEntry key={blog.id} blog={blog} />
              ))}
            </div>
          </>
        ) : (
          <h2 className="text-lg text-gray-400 font-semibold md:text-xl">
            I am currently an empty space, newly created blogs will appear here!
          </h2>
        )}
      </section>
    </>
  );
};

export default RecentBlogs;
