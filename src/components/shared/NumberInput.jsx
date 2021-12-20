import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function NumberInput({ values, ...props }) {
  return (
    <Grid item>
      <TextField size="small" type="number" value={values[props.name]} {...props} />
    </Grid>
  );
}

export default NumberInput;
