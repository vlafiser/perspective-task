import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import FunnelNavigationButton from './NavigationButton';

interface FunnelNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const FunnelNavigation: React.FC<FunnelNavigationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {

  const iconClassNames = "w-8 h-8 text-blue-500 relative opacity-100 transition-transform duration-150 group-disabled:translate-x-0 group-disabled:opacity-60 will-change-transform"

  const buttons = [
    {
      onClick: onPrevious,
      position: 'left-[409px]',
      disabledCondition: currentPage === 0,
      icon: <ArrowLeftIcon className={iconClassNames + ' group-active:-translate-x-1'} />
    },
    {
      onClick: onNext,
      position: 'right-[409px]',
      disabledCondition: currentPage >= totalPages - 1,
      icon: <ArrowRightIcon className={iconClassNames + ' group-active:translate-x-1'} />
    }
  ]

  return (
    <>
      {buttons.map(
        (item, i) => {
          return (
            <FunnelNavigationButton
              key={i}
              onClick={item.onClick}
              disabled={item.disabledCondition}
              icon={item.icon}
              position={item.position}
            />
          )
        }
      )}
    </>
  )
};

export default FunnelNavigation;
