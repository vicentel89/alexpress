import React from 'react';
import Grid from '@mui/material/Grid';

function DateInput({ label, values, ...props }) {
  return (
    <Grid item>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} type="date" value={values[props.name]} {...props} />
    </Grid>
  );
}

export default DateInput;
