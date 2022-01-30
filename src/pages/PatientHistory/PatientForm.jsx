import React from "react";
import Grid from "@mui/material/Grid";
import RadioInput from "../../components/shared/RadioInput";
import TextfieldInput from "../../components/shared/TextfieldInput";
import NumberInput from "../../components/shared/NumberInput";
import DateInput from "../../components/shared/DateInput";
import CheckboxInput from "../../components/shared/CheckboxInput";
import TextareaInput from "../../components/shared/TextareaInput";

function PatientForm({ formik }) {
  const { values, handleChange: formikHandleChange, errors } = formik;

  const handleChange = (e) => {
    formikHandleChange(e);
    localStorage.setItem("patient-history-backup", JSON.stringify(values));
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
      <TextfieldInput name="bedNumber" label="Numero de cama" {...fieldProps} />
      <RadioInput
        options={["BASICO", "INTERMEDIO"]}
        name="careType"
        label="Estancia"
        {...fieldProps}
      />
      <CheckboxInput label="¿Nacio hoy?" name="justBorn" {...fieldProps} />
      <CheckboxInput label="EGRESO" name="exit" {...fieldProps} />

      <RadioInput
        options={["MASCULINO", "FEMENINO"]}
        name="sex"
        label="Sexo"
        {...fieldProps}
      />
      <DateInput label="Fecha reporte: " name="reportDate" {...fieldProps} />
      <DateInput label="Fecha de nacimiento: " name="dob" {...fieldProps} />
      <DateInput
        label="Fecha de ingreso: "
        name="admissionDate"
        {...fieldProps}
      />
      <NumberInput name="weeks" label="Edad gestacional" {...fieldProps} />
      <TextareaInput name="diagnosis" label="Diagnostico" {...fieldProps} />
      <RadioInput
        options={[24, 12]}
        name="waterBalanceTime"
        label="Tiempo de balance de agua"
        {...fieldProps}
      />
      <Grid container gap={4} item>
        <NumberInput name="lastWeight" label="Ultimo peso" {...fieldProps} />
        <NumberInput name="weight" label="Peso" {...fieldProps} />
        <NumberInput name="glucose" label="Glucosa" {...fieldProps} />
        <NumberInput
          name="intake"
          label="Liquidos administrados"
          {...fieldProps}
        />
        <NumberInput
          name="output"
          label="Liquidos eliminados"
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
        label="Examen fisico"
        {...fieldProps}
      />
      <Grid container gap={2} item>
        <TextfieldInput name="vdrl" label="vdrl" {...fieldProps} />
        <NumberInput name="tsh" label="tsh" {...fieldProps} />
        <TextfieldInput
          name="bloodGroup"
          label="hemoclasificación"
          {...fieldProps}
        />
        <NumberInput name="wbc" label="wbc" {...fieldProps} />
        <NumberInput name="hb" label="hb" {...fieldProps} />
        <NumberInput name="hto" label="hto" {...fieldProps} />
        <NumberInput name="plt" label="plt" {...fieldProps} />
        <NumberInput name="n" label="n" {...fieldProps} />
        <NumberInput name="l" label="l" {...fieldProps} />
        <NumberInput name="na" label="na" {...fieldProps} />
        <NumberInput name="k" label="k" {...fieldProps} />
        <NumberInput name="ca" label="ca" {...fieldProps} />
        <NumberInput name="ph" label="ph" {...fieldProps} />
        <NumberInput name="pco2" label="pco2" {...fieldProps} />
        <NumberInput name="po2" label="po2" {...fieldProps} />
        <NumberInput name="hco3" label="hco3" {...fieldProps} />
        <NumberInput name="be" label="be" {...fieldProps} />
        <NumberInput name="pcr" label="pcr" {...fieldProps} />
        <NumberInput name="glicemia" label="glicemia" {...fieldProps} />
        <NumberInput name="bt" label="bt" {...fieldProps} />
        <NumberInput name="bd" label="bd" {...fieldProps} />
        <NumberInput name="bi" label="bi" {...fieldProps} />
      </Grid>

      <TextareaInput name="otherLabs" label="Otros" {...fieldProps} />
      <CheckboxInput label="SOG" name="foley" {...fieldProps} />
      <CheckboxInput label="AYUNADO" name="oralIntake" {...fieldProps} />
      <CheckboxInput label="Tiene oxigeno?" name="hasOxygen" {...fieldProps} />
      <TextareaInput
        name="paraclinicAnalysis"
        label="Analisis de paraclinicos"
        {...fieldProps}
      />
      <TextareaInput name="oxygen" label="Oxigeno" {...fieldProps} />
      <TextareaInput name="diet" label="Dieta" {...fieldProps} />
      <TextareaInput name="liquid" label="Liquidos" {...fieldProps} />
      <TextareaInput name="drugs" label="Farmacos" {...fieldProps} />

      <TextareaInput
        name="nurse"
        label="Cuidados de enfermeria"
        {...fieldProps}
      />
      <TextareaInput name="test" label="Paraclinicos" {...fieldProps} />
      <TextareaInput name="images" label="Imagenes" {...fieldProps} />
      <TextareaInput name="consult" label="Interconsultas" {...fieldProps} />
      <TextareaInput name="pending" label="Pendientes" {...fieldProps} />
    </Grid>
  );
}

export default PatientForm;
