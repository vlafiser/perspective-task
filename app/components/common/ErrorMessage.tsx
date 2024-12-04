import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon';
import React from 'react';

interface ErrorMessageProps {
  error?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className='bg-red-500 absolute z-10 left-0 top-0 w-full h-full text-md text-white font-semibold text-center flex justify-center items-center flex-col overflow-hidden p-14'>
      <ExclamationCircleIcon className="w-10 h-10 mb-12 text-white -mt-10" />
      Error: {error}
      <label htmlFor="file-input" className="group cursor-pointer mt-8 scale-100 opacity-100 z-0 transition-scale duration-200 will-change-transform active:scale-[0.98]">
        <div className="flex items-center justify-center gap-[10px] px-[12px] py-[8px] transition-all ease-linear bg-white border border-white rounded-lg">
          <span className="font-sans font-semibold text-[14px] leading-[140%] transition-all ease-linear text-gray-900 group-hover:text-black">
            Upload Different File
          </span>
        </div>
      </label>
    </div>
  );
};

export default ErrorMessage;
