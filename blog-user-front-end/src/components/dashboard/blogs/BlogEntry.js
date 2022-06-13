const BlogEntry = ({ blog }) => {
  return (
    <div
      id="blog"
      className="m-2 md:m-6 h-auto w-[25rem] md:w-[15rem] md:min-h-[10rem] flex flex-col space-y-4 bg-white p-4 rounded-lg border-slate-300 border-2 hover:border-indigo-600 hover:border-dotted cursor-pointer hover:shadow-lg hover:bg-indigo-50"
    >
      <h2 className=" text-indigo-500 font-[PaytoneOne] md:text-lg">
        {blog.title}
      </h2>
      <h4 className="text-xs md:text-base font-bold text-slate-400">
        {new Date(blog.createdAt).toLocaleString('en-US')}
      </h4>
    </div>
  );
};

export default BlogEntry;
