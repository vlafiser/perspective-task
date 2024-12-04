import React from 'react';

interface FunnelNavigationButtonProps {
  icon: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
  position: string;
}

const FunnelNavigationButton: React.FC<FunnelNavigationButtonProps> = ({
  icon,
  disabled,
  onClick,
  position
}) => (
  <button
    onClick={onClick}
    className={`group flex justify-center items-center w-[80px] h-[80px] ${position} top-[431px] border border-gray-200 rounded-full box-border hover:bg-gray-200 cursor-pointer outline-none disabled:cursor-default disabled:opacity-60 disabled:hover:bg-[transparent] transition-all delay-40 ease-linear`}
    disabled={disabled}
  >
    {icon}
  </button>
);

export default FunnelNavigationButton;
