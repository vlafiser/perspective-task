import React from 'react';
import Page from './Page';
import { Funnel } from '../../types/Funnel';

interface PreviewProps {
  funnel: Funnel;
  currentPage: number;
}

const Preview: React.FC<PreviewProps> = ({ funnel, currentPage }) => {
  return (
    <Page page={funnel.pages[currentPage]} />
  );
};

export default Preview;