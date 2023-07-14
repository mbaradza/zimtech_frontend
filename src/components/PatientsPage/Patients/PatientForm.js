import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const defaultForm = { firstName: '', lastName: '',idNumber:'',age:0};

const PatientForm = ({ onChange, patient }) => {
  const [form, _setForm] = useState(defaultForm);
  const setForm = v => _setForm(prev => ({
    ...prev,
    ...(typeof v === 'function' ? v(prev) : v)
  }));



  React.useEffect(() => { onChange(form); }, [form]);

  React.useEffect(() => { setForm({ ...patient }); }, [patient]);

  return (
    <>
    <h1 ><Typography color='primary' >ADD PATIENT FORM</Typography></h1>
        <Grid item xs={12} sm={12}>
          <TextField
            type='text'
            variant='outlined'
            required={true}  
            fullWidth
            label="First Name"
            value={form.firstName}
            onChange={e => setForm({ firstName: e.target.value })}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='text'
            required={true}
            variant='outlined'  
            fullWidth
            label="Last Name"
            value={form.lastName}
            onChange={e => setForm({ lastName: e.target.value })}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='text'
            required={true}
            variant='outlined'  
            fullWidth
            label="ID Number"
            value={form.idNumber}
            onChange={e => setForm({ idNumber: e.target.value })}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='number'
            required={true}
            variant='outlined'  
            fullWidth
            label="Age In Years"
            value={form.age}
            onChange={e => setForm({ age: e.target.value })}
          />
        </Grid>
        <br/>
    </>
  );
}

PatientForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  patient: PropTypes.object,
};

export default PatientForm;
