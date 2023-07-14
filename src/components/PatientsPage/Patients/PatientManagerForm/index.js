import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as api from '../../../../api/patient';
import PatientForm, { defaultForm } from '../PatientForm';
import Delete from './Delete';

const PatientManagementForm = ({ updateState, patient}) => {
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
        <MenuIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <PatientForm patient={patient} onChange={form => setForm(form)} />
        </DialogContent>

        <DialogActions>
          {!error ? null :
            <Typography>{error.msg || error.message || JSON.stringify(error)}</Typography>}

          <Delete
            updateState={updateState}
            patient={patient}
          />

          <Button
            color="primary"
            variant="contained"
            disableElevation
            disabled={!(form.firstName && form.lastName && form.idNumber)}
            onClick={() => {
              setLoading(true);
              api.update(form)
                .then(({ patient }) => {
                  setLoading(false);
                  setOpen(false);
                  updateState(({ patients }) => ({
                    patients: patients.map(h => h.id === patient.id ? patient : h)
                  }));
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

PatientManagementForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
};

export default PatientManagementForm;
