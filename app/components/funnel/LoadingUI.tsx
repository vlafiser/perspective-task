import React from 'react';

interface LoadingUIProps {
  items?: { width: string; height: string; additionalClasses?: string }[];
}

const LoadingUI: React.FC<LoadingUIProps> = ({ items }) => {
  const defaultItems = [
    { width: '60%', height: '1.5rem', additionalClasses: 'self-center mt-12' },
    { width: '100%', height: '5rem' },
    { width: '20%', height: '1.5rem' },
    { width: '70%', height: '1.5rem' },
    { width: '100%', height: '5rem' },
    { width: '40%', height: '1.5rem', additionalClasses: 'self-center' },
    { width: '90%', height: '1.5rem' },
    { width: '60%', height: '1.5rem' },
  ];

  const loadingItems = items || defaultItems;

  return (
    <div className="bg-white absolute z-10 left-0 top-0 w-full h-full overflow-hidden">
      <div className="flex flex-col px-6 animate-pulse">
        {loadingItems.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-200 rounded-lg mb-7 ${item.additionalClasses || ''}`}
            style={{ width: item.width, height: item.height }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingUI;
