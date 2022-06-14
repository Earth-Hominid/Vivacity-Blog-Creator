import NewBlogForm from '../form/NewBlogForm';

const CreateBlogModal = ({ closeModal }) => {
  return (
    <>
      <section className="p-10 bg-indigo-100 ">
        <div
          className="h-full w-full outline-none overflow-x-hidden overflow-y-auto"
          tabIndex="-1"
        >
          <div className=" bg-white rounded-lg border-2 border-dotted border-indigo-700 relative shadow-lg flex flex-col w-full">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-dotted border-b border-indigo-700">
              <h5 className="text-xl font-medium leading-normal text-gray-800">
                New blog entry
              </h5>
              <button
                onClick={closeModal}
                className="selection:text-slate-700 hover:text-rose-700"
              >
                Close
              </button>
            </div>
            <div className="modal-body relative p-4">
              <p>
                Add a title for your blog post and fill out your content below.
                You can choose to publish your blog immediately or save it to
                your database and publish it another day.
              </p>
              <NewBlogForm closeModal={closeModal} />
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-dotted border-indigo-700 rounded-b-md">
              <button
                onClick={closeModal}
                type="button"
                className="inline-block px-6 text-slate-700 hover:text-rose-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateBlogModal;
