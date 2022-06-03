import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function TextfieldInput({ values, md, ...props }) {
  return (
    <Grid item style={{ width: "100%" }} md={md}>
      <TextField size="small" value={values[props.name]} {...props} />
    </Grid>
  );
}

export default TextfieldInput;
