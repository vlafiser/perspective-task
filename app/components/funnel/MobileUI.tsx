import React, { useEffect, useState } from 'react';

interface MobileUIProps {
  children: React.ReactNode;
  bgColor?: string;
  error?: boolean;
  currentPage?: number;
  totalOfPages?: number;
}

const MobileUI: React.FC<MobileUIProps> = ({ children, bgColor, error, currentPage = 0, totalOfPages }) => {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  // Live Time
  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  if (!currentTime) return null;

  return (
    <div className="relative flex justify-center w-[429px] h-[776px]">
      {/* Device Frame */}
      <div className="absolute flex justify-center w-[423px] h-[776px] border-[3px] border-[#DDE1E8] rounded-[60px] z-10">
        {/* Status Bar */}
        <div className="absolute flex items-center justify-between top-[30px] w-full">
          {/* Time */}
          <div className="flex-1 text-center text-[#D6DCE5] font-sans font-semibold text-[17px] leading-[22px]">
            {currentTime}
          </div>
          {/* Indicator */}
          <div className="flex-2 w-[112px] h-[32px] bg-[#DDE1E8] rounded-[16px]" />
          {/* Icons */}
          <div className="flex-1 flex justify-center space-x-[7px]">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-[#F3F4F6] via-[#F3F4F6]/50 to-transparent" />

      {/* Content */}
      <div
        className="absolute z-20 w-[375px] h-[600px] top-[88px] shadow-lg rounded-lg overflow-auto"
        style={{
          backgroundColor: bgColor ?? '#fff',
          overflow: error ? 'hidden' : 'auto',
        }}
      >
        {children}
      </div>

      {/* Page Indicator */}
      {totalOfPages && (
        <div className="absolute bottom-12 z-10 w-full text-center font-sans font-semibold text-sm leading-[140%] text-gray-400">
          Page {currentPage + 1} of {totalOfPages}
        </div>
      )}
    </div>
  );
};


const SignalIcon: React.FC = () => (
    <span>
        <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="icon1-title"
        >
        <title id="icon1-title">Icon 1</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.865 2.03295C19.865 1.3999 19.3875 0.886719 18.7984 0.886719H17.7317C17.1426 0.886719 16.665 1.3999 16.665 2.03295V11.9669C16.665 12.5999 17.1426 13.1131 17.7317 13.1131H18.7984C19.3875 13.1131 19.865 12.5999 19.865 11.9669V2.03295ZM12.4309 3.332H13.4976C14.0867 3.332 14.5643 3.8575 14.5643 4.50574V11.9394C14.5643 12.5876 14.0867 13.1131 13.4976 13.1131H12.4309C11.8418 13.1131 11.3643 12.5876 11.3643 11.9394V4.50574C11.3643 3.8575 11.8418 3.332 12.4309 3.332ZM8.09915 5.98105H7.03249C6.44338 5.98105 5.96582 6.51324 5.96582 7.16973V11.9244C5.96582 12.5809 6.44338 13.1131 7.03249 13.1131H8.09915C8.68826 13.1131 9.16582 12.5809 9.16582 11.9244V7.16973C9.16582 6.51324 8.68826 5.98105 8.09915 5.98105ZM2.79837 8.42634H1.73171C1.1426 8.42634 0.665039 8.95093 0.665039 9.59804V11.9414C0.665039 12.5885 1.1426 13.1131 1.73171 13.1131H2.79837C3.38748 13.1131 3.86504 12.5885 3.86504 11.9414V9.59804C3.86504 8.95093 3.38748 8.42634 2.79837 8.42634Z"
            fill="#D6DCE5"
        />
        </svg>
    </span>
);

const WifiIcon: React.FC = () => (
    <span className="mx-[7px]">
        <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="icon2-title"
        >
        <title id="icon2-title">Icon 2</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.43654 3.30222C11.9236 3.30232 14.3157 4.22441 16.1182 5.87789C16.2539 6.00554 16.4709 6.00393 16.6045 5.87428L17.902 4.61081C17.9697 4.54505 18.0075 4.45597 18.0069 4.36329C18.0063 4.27061 17.9675 4.18197 17.899 4.11697C13.168 -0.257741 5.7043 -0.257741 0.97329 4.11697C0.904758 4.18192 0.865874 4.27054 0.865242 4.36322C0.86461 4.4559 0.902283 4.545 0.969923 4.61081L2.26779 5.87428C2.40139 6.00413 2.61851 6.00574 2.75416 5.87789C4.5569 4.2243 6.94918 3.30221 9.43654 3.30222ZM9.43318 7.5225C10.7905 7.52241 12.0994 8.03415 13.1055 8.95828C13.2416 9.08943 13.4559 9.08659 13.5886 8.95187L14.8759 7.63256C14.9437 7.56336 14.9813 7.46948 14.9803 7.37193C14.9793 7.27438 14.9398 7.1813 14.8707 7.11351C11.8068 4.22266 7.06211 4.22266 3.99828 7.11351C3.92907 7.1813 3.88959 7.27443 3.88868 7.37201C3.88777 7.46959 3.92552 7.56346 3.99345 7.63256L5.28036 8.95187C5.41302 9.08659 5.62738 9.08943 5.76346 8.95828C6.76892 8.03476 8.07676 7.52307 9.43318 7.5225ZM11.9576 10.316C11.9595 10.4214 11.9225 10.523 11.8552 10.5968L9.6785 13.0515C9.6147 13.1236 9.52771 13.1642 9.43694 13.1642C9.34617 13.1642 9.25917 13.1236 9.19537 13.0515L7.01834 10.5968C6.95109 10.5229 6.91409 10.4213 6.91608 10.316C6.91808 10.2106 6.95889 10.1108 7.02887 10.0402C8.41897 8.72634 10.4549 8.72634 11.845 10.0402C11.9149 10.1109 11.9557 10.2107 11.9576 10.316Z"
            fill="#D6DCE5"
        />
        </svg>
    </span>
);

const BatteryIcon: React.FC = () => (
    <svg
        width="28"
        height="14"
        viewBox="0 0 28 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="icon3-title"
    >
        <title id="icon3-title">Icon 3</title>
        <rect
            opacity="0.35"
            x="0.506836"
            y="1"
            width="24"
            height="12"
            rx="3.8"
            stroke="#D6DCE5"
        />
        <path
            opacity="0.4"
            d="M26.0068 5.28125V9.35672C26.8116 9.01155 27.3349 8.20859 27.3349 7.31899C27.3349 6.42938 26.8116 5.62642 26.0068 5.28125Z"
            fill="#D6DCE5"
        />
        <rect
            x="2.00684"
            y="2.5"
            width="21"
            height="9"
            rx="2.5"
            fill="#D6DCE5"
        />
    </svg>
);

export default MobileUI;