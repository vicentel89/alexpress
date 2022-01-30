import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PatientForm from "./PatientForm";
import HistoryResult from "./HistoryResult";
import { Button, Grid, Box } from "@mui/material";

function PatientHistory() {
  const backup = localStorage.getItem("patient-history-backup");

  const formik = useFormik({
    initialValues: JSON.parse(backup) || initialValues,
    validationSchema: Yup.object({
      reportDate: Yup.date()
        .min(
          new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          "La estas cagando, esta fecha es muy vieja"
        )
        .max(new Date(), "La estas cagando, esta fecha es en el futuro"),
      dob: Yup.date()
        .min(
          new Date(Date.now() - 6 * 30.5 * 24 * 60 * 60 * 1000),
          "La estas cagando, esta fecha es muy vieja"
        )
        .max(new Date(), "La estas cagando, esta fecha es en el futuro"),
      admissionDate: Yup.date()
        .min(
          new Date(Date.now() - 6 * 31 * 24 * 60 * 60 * 1000),
          "La estas cagando, esta fecha es muy vieja"
        )
        .max(new Date(), "La estas cagando, esta fecha es en el futuro"),
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
                  "patient-history-backup",
                  JSON.stringify(initialValues)
                );
                window.location.reload();
              }}
              variant="contained"
              style={{ marginBottom: 32 }}
            >
              Reset Form
            </Button>
            <PatientForm formik={formik} />
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
            <HistoryResult values={formik.values} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const initialValues = {
  bedNumber: "",
  careType: "BASICO",
  justBorn: false,
  exit: false,
  sex: "MASCULINO",
  reportDate: "",
  dob: "",
  admissionDate: "",
  weeks: "",
  diagnosis: "",
  waterBalanceTime: 24,
  lastWeight: "",
  weight: "",
  glucose: "",
  intake: "",
  output: "",
  cardiacFreq: 136,
  respiratoryFreq: 40,
  saturation: 99,
  temperture: 36.5,
  physicalExam: `NORMOCÉFALO, FONTANELA ANTERIOR NORMOTENSA, POSTERIOR PUNTIFORME, PUPILAS ISOCÓRICAS NORMOREACTIVAS, ESCLERAS ANICTÉRICAS, NARINAS PERMEABLES, MUCOSA ORAL HÚMEDA, CUELLO MÓVIL SIN ADENOPATÍAS PALPABLES. 
  TÓRAX SIMÉTRICO, EXPANSIBLE, SIN TIRAJES, NO AGREGADOS. 
  RUIDOS CARDÍACOS RÍTMICOS SIN SOPLOS. 
  ABDOMEN BLANDO, DEPRESIBLE, NO IMPRESIONA DOLOR A LA PALPACIÓN, NO MASAS NO MEGALIAS, ÓNFALO CLAMPEADO SIN INFECCIONES  
  GENITOURINARIO NORMOCONFIGURADO PARA SEXO Y EDAD.   
  EXTREMIDADES EUTRÓFICAS, SIN EDEMAS, LLENADO CAPILAR<2 SG, PULSOS DISTALES PRESENTES Y SIMÉTRICOS. 
  NEUROLÓGICO, ACTIVO, REACTIVO CON RESPUESTA A ESTÍMULOS, REFLEJOS PRIMITIVOS PRESENTES, LIBRE DE CRISIS NEONATALES.  
  PIEL Y ANEXOS ÍNTEGRA, SIN LESIONES, ROSADA 
  `,
  wbc: "",
  hb: "",
  hto: "",
  plt: "",
  n: "",
  l: "",
  pcr: "",
  na: "",
  k: "",
  ca: "",
  ph: "",
  pco2: "",
  po2: "",
  hco3: "",
  be: "",
  glicemia: "",
  vdrl: "",
  tsh: "",
  bloodGroup: "",
  bt: "",
  bd: "",
  bi: "",
  otherLabs: "",
  foley: false,
  oralIntake: false,
  hasOxygen: false,
  paraclinicAnalysis: "",
  oxygen: "",
  diet: "",
  liquid: "",
  drugs: "",
  nurse: `MONITORIZACIÓN ELECTRONICA NO INVASIVA
  -MANTENER TERMORREGULADO
  -GLUCOMETRÍA CADA 12 HORAS
  -CUIDADOS DE ENFERMERÍA
  -PESO DIARIO
  -CONTROL DE LA, LE, BH
  -CONTROL DE SIGNOS VITALES Y AVISAR CAMBIOS
  `,
  test: "",
  images: "",
  consult: "",
  pending: "",
};

export default PatientHistory;
