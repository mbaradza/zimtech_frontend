import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

export const defaultForm = { time: '', systolic: 0,dystolic:0,weight: 0,height:0};

const ScreeningForm = ({ onChange, screening }) => {
  const [form, _setForm] = useState(defaultForm);
  const setForm = v => _setForm(prev => ({
    ...prev,
    ...(typeof v === 'function' ? v(prev) : v)
  }));

  const onTreatment = (target) => {

    if (target.checked) {
      setForm({ onTreatment: true })
    } else {
      setForm({ onTreatment: false })
    }
  }


  React.useEffect(() => { onChange(form); }, [form]);

  React.useEffect(() => { setForm({ ...screening }); }, [screening]);

  return (
    <>
    <h1 ><Typography color='primary' >ADD SCREENING RECORD</Typography></h1>
    <br/>
       <FormLabel>Screening Date</FormLabel>
       <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='time'
            variant='outlined'
            required={true}  
            fullWidth
            value={form.time}
            onChange={e => setForm({ time: e.target.value })}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='number'
            variant='outlined'
            required={true}  
            fullWidth
            label="Systolic"
            value={form.systolic}
            onChange={e => setForm({ systolic: e.target.value })}
          />
        </Grid>  
        <br/> 
        <Grid item xs={12} sm={12}>
          <TextField
            type='number'
            variant='outlined'
            required={true}  
            fullWidth
            label="Dystolic"
            value={form.dystolic}
            onChange={e => setForm({ dystolic: e.target.value })}
          />
        </Grid>  
        <br/>  
        <Grid item xs={12} sm={12}>
          <TextField
            type='number'
            variant='outlined'
            required={true}  
            fullWidth
            label="Weight"
            value={form.weight}
            onChange={e => setForm({ weight: e.target.value })}
          />
        </Grid>  
        <br/> 
        <br/>  
        <Grid item xs={12} sm={12}>
          <TextField
            type='number'
            variant='outlined'
            required={true}  
            fullWidth
            label="Height"
            value={form.height}
            onChange={e => setForm({ height: e.target.value })}
          />
        </Grid>  
        <br/>
    </>
  );
}

ScreeningForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  screening: PropTypes.object,
};

export default ScreeningForm;
