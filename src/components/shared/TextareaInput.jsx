import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function TextareaInput({ values, md, ...props }) {
  return (
    <Grid item style={{ width: "100%" }} md={md}>
      <TextField
        multiline
        minRows={1}
        fullWidth
        value={values[props.name]}
        {...props}
      />
    </Grid>
  );
}

export default TextareaInput;
