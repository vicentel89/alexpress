import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

function CheckboxInput({ label, values, ...props }) {
  return (
    <Grid item>
      <FormControlLabel
        labelPlacement="start"
        control={<Checkbox {...props} />}
        label={label}
        value={values[props.name]}
      />
    </Grid>
  );
}

export default CheckboxInput;
