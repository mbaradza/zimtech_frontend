import React from 'react';
import { setDocumentTitle, setNavSection } from '../../AppContext';
import Patients from './Patients';

const PatientsPage = () => {
  setDocumentTitle('PATIENTS');
  setNavSection('patients');

  return (
    <>
      <Patients />
    </>
  );
};

export default PatientsPage;
