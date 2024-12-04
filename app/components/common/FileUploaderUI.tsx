import DocumentArrowUpIcon from '@heroicons/react/24/outline/DocumentArrowUpIcon';
import React from 'react';

const FileUploaderUI = () => {
  return (
    <label htmlFor="file-input" className="group flex flex-col items-center justify-center w-full h-full p-6 cursor-pointer">
      <div className="flex flex-col items-center justify-center w-[calc(100%-6px)] h-full border-2 border-gray-200 group-hover:border-gray-300 border-dashed rounded-lg transition-all ease-linear delay-80 select-none">
        <DocumentArrowUpIcon className="w-9 h-9 mb-12 text-blue-500 -mt-10 scale-90 transition-scale duration-200 will-change-transform group-hover:scale-100 group-active:scale-95" />
        <div className="mb-2 text-sm text-center mx-14 text-black">
          <div className="font-semibold text-md mb-2">
            Click To Upload .JSON File
          </div>
          <div className='text-gray-400'>
            Experience the Mobile Preview of the Perspective Funnel
          </div>
        </div>
      </div>
    </label>
  );
};

export default FileUploaderUI;
