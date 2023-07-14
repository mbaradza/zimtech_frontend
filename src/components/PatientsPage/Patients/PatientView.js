import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useLocation } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PatientViewForm = () => {

  const location = useLocation();
  const patient = location.state

  return (
    <>
     
      <h1 ><Typography color='primary' >PATIENT DETAILS</Typography></h1>
      <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='text'
            variant='outlined' 
            fullWidth
            label="First Name"
            value={patient.firstName}
            disabled= {true}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='text'
            variant='outlined'  
            fullWidth
            label="Last Name"
            value={patient.lastName}
            disabled= {true}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='text'
            variant='outlined'  
            fullWidth
            label="ID Number"
            value={patient.idNumber}
            disabled
          />
        </Grid>
        <br/>  <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='number'
            variant='outlined'  
            fullWidth
            label="Age In Years"
            value={patient.age}
            disabled
          />
        </Grid>
        <br/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
              {<Link to="/hts" state={patient}>
                <Button>
                  Patient Hts
                </Button>
                </Link>
              }
              </TableCell>
              <TableCell>
                <Button>
                  Diabetis Screening
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
    </>
  );
};

PatientViewForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
};

export default PatientViewForm;
