import React from 'react';

const SaveButton = ({ onSubmit }) => {
  return (
    <button
      type="submit"
      onSubmit={onSubmit}
      className="bg-indgo-500 rounded-lg border-2 bg-sky-500 text-white border-sky-500 hover:text-sky-500 font-bold px-8 py-2 mb-5 lg:px-14 lg:py-3 hover:bg-white"
    >
      Save Blog
    </button>
  );
};

export default SaveButton;
