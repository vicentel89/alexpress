import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import EmergencyResult from "./EmergencyResult";
import { Button, Grid, Box } from "@mui/material";
import EmergencyForm, { initialValues } from "./EmergencyForm";

function NewBorn() {
  const backup = localStorage.getItem("emergency-backup");

  const formik = useFormik({
    initialValues: JSON.parse(backup) || initialValues,
    validationSchema: Yup.object({}),
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
                  "emergency-backup",
                  JSON.stringify(initialValues)
                );
                window.location.reload();
              }}
              variant="contained"
              style={{ marginBottom: 32 }}
            >
              Reset Form
            </Button>
            <EmergencyForm formik={formik} />
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
            <EmergencyResult values={formik.values} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewBorn;
