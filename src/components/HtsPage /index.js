import React from 'react';
import { setDocumentTitle, setNavSection } from '../../AppContext';
import Hts from './Hts';

const HtsPage = () => {
  setDocumentTitle('PATIENT HTS');
  setNavSection('hts');

  return (
    <>
      <Hts />
    </>
  );
};

export default HtsPage;
