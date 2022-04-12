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

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div style={{ padding: 40 }}>
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
              Resetear
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
  daysOfLife: "",
  waterBalanceTime: 24,
  weight: 0,
  intake: 0,
  output: 0,
};

export default Balance;
