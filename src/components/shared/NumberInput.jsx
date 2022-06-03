import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function NumberInput({ values, md, ...props }) {
  return (
    <Grid item md={md}>
      <TextField
        size="small"
        type="number"
        value={values[props.name]}
        {...props}
      />
    </Grid>
  );
}

export default NumberInput;
