import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PatientForm from "./PatientForm";
import HistoryResult from "./HistoryResult";
import { Button, Grid, Box } from "@mui/material";
import CopyButton from "../../components/shared/CopyButton";

function PatientHistory() {
  const backup = localStorage.getItem("patient-history-backup");

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
      admissionDate: Yup.date()
        .min(
          new Date(Date.now() - 6 * 31 * 24 * 60 * 60 * 1000),
          "SEGURA??? ESTA FECHA ES MUY VIEJA"
        )
        .max(new Date(), "ERROR: ESTA FECHA ES EN EL FUTURO!!!!!!!!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
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
    </>
  );
}

const initialValues = {
  bedNumber: "",
  timeofDay: "",
  pediatricianShift: "",
  justBorn: false,
  exit: false,
  sex: "",
  reportDate: "",
  dob: "",
  admissionDate: "",
  weeks: "",
  diagnosis:
    "-PESO, TALLA Y PER??METRO CEF??LICO ADECUADOS PARA SU EDAD GESTACIONAL",
  studies: "",
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
  physicalExam: `CABEZA Y CUELLO: NORMOC??FALO, FONTANELA ANTERIOR NORMOTENSA, POSTERIOR PUNTIFORME, PUPILAS ISOC??RICAS NORMOREACTIVAS, ESCLERAS ANICT??RICAS, NARINAS PERMEABLES, MUCOSA ORAL H??MEDA, CUELLO M??VIL SIN ADENOPAT??AS PALPABLES. 
T??RAX: SIM??TRICO, EXPANSIBLE, SIN TIRAJES, NO AGREGADOS. RUIDOS CARD??ACOS R??TMICOS SIN SOPLOS. 
ABDOMEN: BLANDO, DEPRESIBLE, NO IMPRESIONA DOLOR A LA PALPACI??N, NO MASAS NO MEGALIAS, ??NFALO CLAMPEADO SIN INFECCIONES  
GENITOURINARIO: NORMOCONFIGURADO PARA SEXO Y EDAD.   
EXTREMIDADES: EUTR??FICAS, SIN EDEMAS, LLENADO CAPILAR<2 SG, PULSOS DISTALES PRESENTES Y SIM??TRICOS. 
NEUROL??GICO: ACTIVO, REACTIVO CON RESPUESTA A EST??MULOS, REFLEJOS PRIMITIVOS PRESENTES, LIBRE DE CRISIS NEONATALES.  
PIEL Y ANEXOS: ??NTEGRA, SIN LESIONES, ROSADA`,
  hb: "",
  hto: "",
  plt: "",
  wbc: "",
  n: "",
  l: "",
  pcr: "",
  na: "",
  k: "",
  ca: "",
  mg: "",
  cl: "",
  ph: "",
  pco2: "",
  po2: "",
  hco3: "",
  be: "",
  glicemia: "",
  vdrl: "",
  tsh: "",
  hemoclasificacion: "",
  bt: "",
  bd: "",
  bi: "",
  ret: "",
  otherLabs: "",
  foley: false,
  oralIntake: false,
  hasOxygen: false,
  nutritionRecovery: false,
  upOralIntake: false,
  nutritionSupport: "Ninguno",
  paraclinicAnalysis: "",
  oxygen: "",
  opthalmo: "",
  neuro: "",
  nephro: "",
  potentials: "",
  newOralIntake: "",
  momMilk: false,
  freeMilk: false,
  hidricRate: "",
  meqSodium: "",
  meqPotassium: "",
  TIG: "",
  NPT: "",
  drugs: "",
  nurse: `-MONITORIZACI??N ELECTRONICA NO INVASIVA
-MANTENER TERMORREGULADO
-CUIDADOS DE ENFERMER??A
-PESO DIARIO
-CONTROL DE LA, LE, BH
-CONTROL DE SIGNOS VITALES Y AVISAR CAMBIOS`,
  test: "",
  images: "",
  consult: "",
  pending: "",
};

export default PatientHistory;
