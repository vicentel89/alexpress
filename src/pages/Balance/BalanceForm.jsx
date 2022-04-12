import React from "react";
import Grid from "@mui/material/Grid";
import RadioInput from "../../components/shared/RadioInput";
import NumberInput from "../../components/shared/NumberInput";
import DateInput from "../../components/shared/DateInput";

function BalanceForm({ formik }) {
  const { values, handleChange: formikHandleChange, errors } = formik;

  const handleChange = (e) => {
    formikHandleChange(e);
    localStorage.setItem("Balance-backup", JSON.stringify(values));
  };

  const fieldProps = { values, onChange: handleChange, errors };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
    >
      <h3>****BALANCE HIDRICO**</h3>

      <DateInput label="Fecha nacimiento: " name="dob" {...fieldProps} />
      <DateInput label=" Fecha medición: " name="reportDate" {...fieldProps} />
      <RadioInput
        options={[24, 12, 6]}
        name="waterBalanceTime"
        label="Tiempo de Balance de agua"
        {...fieldProps}
      ></RadioInput>
      <NumberInput name="weight" label="Peso actual" {...fieldProps} />
      <NumberInput
        name="intake"
        label="Liquidos administrados"
        {...fieldProps}
      />

      <NumberInput name="output" label="Liquidos eliminados" {...fieldProps} />
    </Grid>
  );
}

export default BalanceForm;
