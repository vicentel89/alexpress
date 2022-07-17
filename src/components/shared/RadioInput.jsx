import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";

export default function RadioInput({
  options,
  smallFont,
  label,
  values,
  md,
  ...props
}) {
  return (
    <Grid item md={md}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup row {...props} value={values[props.name]}>
          {options.map((value) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio size="small" />}
              label={
                smallFont ? (
                  <span style={{ fontSize: "0.7rem" }}>{value}</span>
                ) : (
                  value
                )
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
