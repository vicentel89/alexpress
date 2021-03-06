import React from "react";
import Grid from "@mui/material/Grid";

function DateInput({ label, values, md, errors, ...props }) {
  return (
    <Grid item md={md}>
      <label htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        type="date"
        value={values[props.name]}
        {...props}
      />
      <p style={{ color: "red" }}>{errors[props.name]}</p>
    </Grid>
  );
}

export default DateInput;
