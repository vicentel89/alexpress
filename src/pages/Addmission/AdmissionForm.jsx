import React from "react";
import Grid from "@mui/material/Grid";
import RadioInput from "../../components/shared/RadioInput";
import TextfieldInput from "../../components/shared/TextfieldInput";
import NumberInput from "../../components/shared/NumberInput";
import DateInput from "../../components/shared/DateInput";
import CheckboxInput from "../../components/shared/CheckboxInput";
import TextareaInput from "../../components/shared/TextareaInput";

export const initialValues = {
  kidOf: "",
  idMom: "",
  babyGender: "MASCULINO",
  placeofRemission: "",
  consultMotive: "",
  actualDisease: "",

  cardiacFreq: 136,
  respiratoryFreq: 40,
  saturation: 99,
  temperture: 36.5,
  physicalExam: `CABEZA Y CUELLO: NORMOCÉFALO, FONTANELA ANTERIOR NORMOTENSA, POSTERIOR PUNTIFORME, PUPILAS ISOCÓRICAS NORMOREACTIVAS, ESCLERAS ANICTÉRICAS, NARINAS PERMEABLES, MUCOSA ORAL HÚMEDA, CUELLO MÓVIL SIN ADENOPATÍAS PALPABLES. 
TÓRAX: SIMÉTRICO, EXPANSIBLE, SIN TIRAJES, NO AGREGADOS. RUIDOS CARDÍACOS RÍTMICOS SIN SOPLOS. 
ABDOMEN: BLANDO, DEPRESIBLE, NO IMPRESIONA DOLOR A LA PALPACIÓN, NO MASAS NO MEGALIAS, ÓNFALO CLAMPEADO SIN INFECCIONES  
GENITOURINARIO: NORMOCONFIGURADO PARA SEXO Y EDAD.   
EXTREMIDADES: EUTRÓFICAS, SIN EDEMAS, LLENADO CAPILAR<2 SG, PULSOS DISTALES PRESENTES Y SIMÉTRICOS. 
NEUROLÓGICO: ACTIVO, REACTIVO CON RESPUESTA A ESTÍMULOS, REFLEJOS PRIMITIVOS PRESENTES, LIBRE DE CRISIS NEONATALES.  
PIEL Y ANEXOS: ÍNTEGRA, SIN LESIONES, ROSADA`,
  diagnosis: "-PESO Y TALLA ADECUADOS PARA SU EDAD GESTACIONAL",
  paraclinicAnalysis: "",
  careType: "BASICO",

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

function AdmissionForm({ formik }) {
  const { values, handleChange: formikHandleChange, errors } = formik;

  const handleChange = (e) => {
    formikHandleChange(e);
    localStorage.setItem("admission-backup", JSON.stringify(values));
  };

  const fieldProps = { values, onChange: handleChange, errors };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={4}
    >
      <TextfieldInput name="kidOf" label="HIJO DE " {...fieldProps} />
      <TextfieldInput
        name="idMom"
        label="IDENTIFICACIÓN MATERNA"
        {...fieldProps}
      />
      <RadioInput
        name="babyGender"
        label="GÉNERO"
        options={["MASCULINO", "FEMENINO"]}
        {...fieldProps}
      />
      <Grid container gap={2} item>
        <NumberInput
          name="numberField"
          label="EDAD GESTACIONAL"
          {...fieldProps}
        />
        <TextfieldInput
          name="placeofRemission"
          label="LUGAR DE REMISIÓN "
          {...fieldProps}
        />
        <TextfieldInput
          name="consultMotive"
          label="MOTIVO DE CONSULTA "
          {...fieldProps}
        />
        <TextareaInput
          name="actualDisease"
          label="ENFERMEDAD ACTUAL"
          {...fieldProps}
        />
      </Grid>
      <Grid container gap={2} item>
        <NumberInput
          name="cardiacFreq"
          label="Frecuencia cardiaca"
          {...fieldProps}
        />

        <NumberInput
          name="respiratoryFreq"
          label="Frecuencia respiratoria"
          {...fieldProps}
        />
        <NumberInput name="saturation" label="Saturacion" {...fieldProps} />
        <NumberInput name="temperture" label="Temperatura" {...fieldProps} />
      </Grid>
      <TextareaInput
        name="physicalExam"
        label="Examen físico"
        {...fieldProps}
      />
      <TextareaInput
        name="antecedentesPerinatales"
        label="ANTECEDENTES PERINATALES"
        {...fieldProps}
      />
      <TextareaInput name="diagnosis" label="Diagnósticos" {...fieldProps} />
      <CheckboxInput
        label="ALIMENTACIÓN POR SONDA"
        name="foley"
        {...fieldProps}
      />
      <CheckboxInput label="AYUNADO" name="oralIntake" {...fieldProps} />
      <CheckboxInput
        label="SUPLEMENTACIÓN DE OXÍGENO"
        name="hasOxygen"
        {...fieldProps}
      />
      <TextareaInput
        name="paraclinicAnalysis"
        label="Información importante adicional para el análisis"
        {...fieldProps}
      />
      <Grid item>
        <h2 style={{ marginBottom: 0 }}>PLAN</h2>
      </Grid>
      <RadioInput
        options={["BASICO", "INTERMEDIO"]}
        name="careType"
        label="Estancia"
        {...fieldProps}
      />
      <TextareaInput name="oxygen" label="Oxigeno" {...fieldProps} />
      <TextareaInput name="diet" label="Dieta" {...fieldProps} />
      <TextareaInput name="liquid" label="Liquidos" {...fieldProps} />
      <TextareaInput name="drugs" label="Farmacos" {...fieldProps} />

      <TextareaInput
        name="nurse"
        label="Cuidados de enfermería"
        {...fieldProps}
      />
      <TextareaInput
        name="test"
        label="Paraclínicos solicitados"
        {...fieldProps}
      />
      <TextareaInput
        name="images"
        label="Imágenes solicitadas"
        {...fieldProps}
      />
      <TextareaInput
        name="consult"
        label="Interconsultas solicitadas"
        {...fieldProps}
      />
      <TextareaInput name="pending" label="Pendientes" {...fieldProps} />
    </Grid>
  );
}

export default AdmissionForm;
