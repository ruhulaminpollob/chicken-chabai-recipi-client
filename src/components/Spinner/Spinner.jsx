import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="border-l-4 border-yellow-300 rounded-full w-12 h-12 animate-spin"></div>
      <div className="border-r-4  border-red-500 rounded-full w-12 h-12 animate-spin absolute" ></div>
      <div className="border-b-4  border-violet-500 rounded-full w-12 h-12 animate-spin absolute"></div>
    </div>
  );
};

export default Spinner;