import DocumentArrowUpIcon from '@heroicons/react/24/outline/DocumentArrowUpIcon';
import React from 'react';

interface UploadBtnProps {
  funnelLoaded?: boolean;
}

const UploadBtn: React.FC<UploadBtnProps> = ({ funnelLoaded }) => {
  return (
    <label htmlFor="file-input" className={`group absolute right-10 top-7 cursor-pointer transition-scale duration-200 will-change-transform active:scale-[0.98] ${funnelLoaded ? 'scale-100 opacity-100 z-0' : 'scale-90 opacity-0 -z-10'}`}>
      <div className="flex items-center justify-center gap-[10px] px-[12px] py-[8px] transition-all ease-linear border border-gray-200 group-hover:border-gray-300 rounded-lg">
        <DocumentArrowUpIcon className="w-4 h-4 transition-all ease-linear text-gray-400 group-hover:text-black" />
        <span className="font-sans font-semibold text-[14px] leading-[140%] transition-all ease-linear text-gray-400 group-hover:text-black">
          Upload Another Funnel
        </span>
      </div>
    </label>
  );
};

export default UploadBtn;
