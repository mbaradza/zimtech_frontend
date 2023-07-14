import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as api from '../../../api/hts';
import HtsForm, { defaultForm } from './ScreeningForm';

const AddHtsForm = ({ updateState }) => {
  const [form, setForm] = useState(defaultForm);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [open, _setOpen] = useState(false);
  const setOpen = open => {
    if (loading) return;
    setForm(defaultForm);
    _setOpen(open);
  };

  return (
    <>
      <IconButton
        size="small"
        onClick={() => setOpen(true)}
      >
        ADD NEW 
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <HtsForm onChange={form => setForm(form)} />
        </DialogContent>

        <DialogActions>
          {!error ? null :
            <Typography>{error.msg || error.message || JSON.stringify(error)}</Typography>}
          <Button
            color="primary"
            variant="contained"
            disableElevation
            disabled={!(form.screeningDate)}
            onClick={() => {
              setLoading(true);
              api.add(form)
                .then((p)=>p.json())
                .then((hts) => {
                  setLoading(false);
                  setOpen(false);
                  updateState(({ htss }) => ({ htss: [...htss, hts] }));
                })
                .catch(err => {
                  setLoading(false);
                  setError(err);
                });
            }}
          >Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

AddHtsForm.propTypes = {
  updateState: PropTypes.func.isRequired
};

export default AddHtsForm;
