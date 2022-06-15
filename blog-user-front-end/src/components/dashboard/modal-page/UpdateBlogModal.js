import UpdateBlogForm from '../form/UpdateBlogForm';

const updateBlogModal = ({ closeUpdateModal, blogs }) => {
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
                Update blog entry
              </h5>
              <button
                onClick={closeUpdateModal}
                className="selection:text-slate-700 hover:text-rose-700"
              >
                Close
              </button>
            </div>
            <div className="modal-body relative p-4">
              <p>Once you are happy with your changes, select save below.</p>
              <UpdateBlogForm closeUpdateModal={closeUpdateModal} />
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-dotted border-indigo-700 rounded-b-md">
              <button
                onClick={closeUpdateModal}
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

export default updateBlogModal;
