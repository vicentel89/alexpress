import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function TextareaInput({ values, ...props }) {
  return (
    <Grid item style={{ width: '100%' }}>
      <TextField multiline rows={4} fullWidth value={values[props.name]} {...props} />
    </Grid>
  );
}

export default TextareaInput;
