import React from 'react';
import Block from './Block';
import { Page as PageType } from '../../types/Funnel';

interface PageProps {
  page: PageType;
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="flex flex-col items-center">
      {page.blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
};

export default Page;
