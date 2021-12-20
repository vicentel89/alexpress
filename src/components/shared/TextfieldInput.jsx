import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function TextfieldInput({ values, ...props }) {
  return (
    <Grid item>
      <TextField size="small" value={values[props.name]} {...props} />
    </Grid>
  );
}

export default TextfieldInput;
