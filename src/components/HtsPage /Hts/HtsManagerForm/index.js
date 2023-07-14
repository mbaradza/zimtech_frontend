import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as api from '../../../../api/hts';
import HtsForm, { defaultForm } from '../HtsForm';
import Delete from './Delete';

const HtsManagementForm = ({ updateState, hts}) => {
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
          <HtsForm hts={hts} onChange={form => setForm(form)} />
        </DialogContent>

        <DialogActions>
          {!error ? null :
            <Typography>{error.msg || error.message || JSON.stringify(error)}</Typography>}

          <Delete
            updateState={updateState}
            hts={hts}
          />

          <Button
            color="primary"
            variant="contained"
            disableElevation
            disabled={!(form.screeningDate)}
            onClick={() => {
              setLoading(true);
              api.add(form)
                .then(({ hts }) => {
                  setLoading(false);
                  setOpen(false);
                  updateState(({ hts }) => ({
                    hts: hts.map(h => h.id === hts.id ? hts : h)
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

HtsManagementForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  hts: PropTypes.object.isRequired,
};

export default HtsManagementForm;
