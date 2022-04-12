import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BalanceForm from "./BalanceForm";
import BalanceResult from "./BalanceResult";
import { Button, Grid, Box } from "@mui/material";

function Balance() {
  const backup = localStorage.getItem("Balance-backup");

  const formik = useFormik({
    initialValues: JSON.parse(backup) || initialValues,
    validationSchema: Yup.object({
      reportDate: Yup.date()
        .min(
          new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          "SEGURA??? ESTA FECHA ES MUY VIEJA"
        )
        .max(new Date(), "ERROR: ESTA FECHA ES EN EL FUTURO!!!!!!!!"),
      dob: Yup.date()
        .min(
          new Date(Date.now() - 6 * 30.5 * 24 * 60 * 60 * 1000),
          "SEGURA??? ESTA FECHA ES MUY VIEJA"
        )
        .max(new Date(), "ERROR: ESTA FECHA ES EN EL FUTURO!!!!!!!!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <Box
            sx={{
              pb: 4,
              pr: 2,
              height: "calc(100vh - 100px)",
              overflow: "auto",
            }}
          >
            <Button
              onClick={() => {
                localStorage.setItem(
                  "Balance-backup",
                  JSON.stringify(initialValues)
                );
                window.location.reload();
              }}
              variant="contained"
              style={{ marginBottom: 32 }}
            >
              Reset Form
            </Button>
            <BalanceForm formik={formik} />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              pl: 2,
              pr: 1,
              pb: 4,
              height: "calc(100vh - 100px)",
              overflow: "auto",
            }}
          >
            <BalanceResult values={formik.values} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const initialValues = {
  reportDate: "",
  dob: "",
  admissionDate: "",
  waterBalanceTime: 24,
  weight: "",
  glucose: "",
  intake: "",
  output: "",
};

export default Balance;
