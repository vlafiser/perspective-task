import React from 'react';
import { Block as BlockType } from '../../types/Funnel';
import Image from 'next/image';

interface BlockProps {
  block: BlockType;
  style?: React.CSSProperties;
}

const Block: React.FC<BlockProps> = ({ block, style }) => {
  switch (block.type) {
    case 'text':
      return (
        <p
          className="px-10 py-8 font-sans font-semibold text-[20px] leading-[120%] text-black"
          style={{ color: block.color, textAlign: block.align, ...style }}
        >
          {block.text}
        </p>
      );
    case 'image':
      return (
        <div className='w-full px-6 py-4 rounded-lg overflow-hidden'>
          <Image width={327} height={327} src={block.src} alt={block.alt || 'Image'} className="w-full h-auto object-cover rounded-lg" />
        </div>
      );
    case 'list':
      return (
        <ul className="list-disc w-full text-left px-6 py-4">
          {block.items.map((item) => (
            <li key={item.id} className="flex items-start mb-4 font-sans font-normal text-[18px] leading-[140%] text-black">
              <Image width={40} height={40} src={item.src} alt={item.title || 'Icon'} className="w-10 h-10 mr-4" />
              <div>
                <div className='font-semibold'>{item.title}</div>
                <div className='text-[16px]'>{item.description}</div>
              </div>
            </li>
          ))}
        </ul>
      );
    case 'button':
      return (
        <div className='w-full px-6 py-6'>
          <button
            className="w-full px-6 py-4 font-sans font-semibold text-sm leading-[120%] text-white box-border max-w-full bg-cover bg-fixed bg-no-repeat shadow-button-inset transition-all rounded-lg bg-blue-700 border-blue-700 border-1"
            style={{
              backgroundColor: block.bgColor,
              color: block.color,
            }}
          >
            {block.text}
          </button>
        </div>
      );
    default:
      return null;
  }
};

export default Block;
