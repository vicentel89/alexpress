import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

function CheckboxInput({ label, values, md, ...props }) {
  return (
    <Grid item md={md}>
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
