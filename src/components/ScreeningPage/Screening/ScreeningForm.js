import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

export const defaultForm = { treatmentStartDate: '', screeningDate: '',onTreatment:false};

const HtsForm = ({ onChange, hts }) => {
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

  React.useEffect(() => { setForm({ ...hts }); }, [hts]);

  return (
    <>
    <h1 ><Typography color='primary' >ADD HTS RECORD</Typography></h1>
    <br/>
       <FormLabel>Screening Date</FormLabel>
       <br/>
        <Grid item xs={12} sm={12}>
          <TextField
            type='date'
            variant='outlined'
            required={true}  
            fullWidth
            value={form.screeningDate}
            onChange={e => setForm({ screeningDate: e.target.value })}
          />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12}>
            <FormLabel>
             On Treatment?
            </FormLabel>
            <Checkbox
              name='treament'
              checked={form.onTreatment}
              onClick={e => onTreatment(e.target)}
            ></Checkbox>
            </Grid>
            <br/>
        <Collapse in={form.onTreatment}>    
        <Grid item xs={12} sm={12}>
          <FormLabel>Treatment Start Date</FormLabel>
          <TextField
            type='date'
            variant='outlined'
            required={true}  
            fullWidth
            value={form.treatmentStartDate}
            onChange={e => setForm({ treatmentStartDate: e.target.value })}
          />
        </Grid>
        </Collapse>
       
        <br/>
    </>
  );
}

HtsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  hts: PropTypes.object,
};

export default HtsForm;
