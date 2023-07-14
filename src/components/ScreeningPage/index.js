import React from 'react';
import { setDocumentTitle, setNavSection } from '../../AppContext';
import Screening from './Screening';

const ScreeningPage = () => {
  setDocumentTitle('Diabetes Screening HTS');
  setNavSection('screening');

  return (
    <>
      <Screening />
    </>
  );
};

export default ScreeningPage;
