const BlogEntry = ({ blog }) => {
  return (
    <div
      id="blog"
      className="my-2 md:my-0 h-auto w-[25rem] md:w-[15rem] flex flex-col space-y-4 bg-white p-4 rounded-lg border-slate-300 border-2 hover:border-indigo-600 hover:border-dotted cursor-pointer"
    >
      <h2 className=" text-indigo-500 font-[PaytoneOne] ">{blog.title}</h2>
      <h4 className="text-xs font-bold text-slate-400">
        {new Date(blog.createdAt).toLocaleString('en-US')}
      </h4>
    </div>
  );
};

export default BlogEntry;
