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
      <TextfieldInput
        name="bedNumber"
        label="Nombre del paciente"
        {...fieldProps}
      />
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
      <DateInput label="Fecha evolución: " name="reportDate" {...fieldProps} />
      <DateInput label="Fecha de nacimiento: " name="dob" {...fieldProps} />
      <DateInput
        label="Fecha de ingreso: "
        name="admissionDate"
        {...fieldProps}
      />
      <NumberInput name="weeks" label="Edad gestacional" {...fieldProps} />
      <TextareaInput name="diagnosis" label="Diagnósticos" {...fieldProps} />
      <RadioInput
        options={[24, 12]}
        name="waterBalanceTime"
        label="Tiempo de balance de agua"
        {...fieldProps}
      />
      <Grid container gap={4} item>
        <NumberInput name="lastWeight" label="Peso anterior" {...fieldProps} />
        <NumberInput name="weight" label="Peso actual" {...fieldProps} />
        <NumberInput name="glucose" label="Glucometría" {...fieldProps} />
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
        label="Examen físico"
        {...fieldProps}
      />
      <Grid container gap={2} item>
        <TextfieldInput name="vdrl" label="vdrl" {...fieldProps} />
        <NumberInput name="tsh" label="tsh" {...fieldProps} />
        <TextfieldInput
          name="hemoclasificacion"
          label="hemoclasificación"
          {...fieldProps}
        />

        <NumberInput name="hb" label="hemoglobina" {...fieldProps} />
        <NumberInput name="hto" label="hematocrito" {...fieldProps} />
        <NumberInput name="plt" label="plaquetas" {...fieldProps} />
        <NumberInput name="wbc" label="leucos" {...fieldProps} />
        <NumberInput name="n" label="neutros" {...fieldProps} />
        <NumberInput name="l" label="linfos" {...fieldProps} />
        <NumberInput name="na" label="sodio" {...fieldProps} />
        <NumberInput name="k" label="potasio" {...fieldProps} />
        <NumberInput name="ca" label="calcio" {...fieldProps} />
        <NumberInput name="cl" label="cloro" {...fieldProps} />
        <NumberInput name="ph" label="ph" {...fieldProps} />
        <NumberInput name="pco2" label="pco2" {...fieldProps} />
        <NumberInput name="po2" label="po2" {...fieldProps} />
        <NumberInput name="hco3" label="hco3" {...fieldProps} />
        <NumberInput name="be" label="be" {...fieldProps} />
        <NumberInput name="pcr" label="pcr" {...fieldProps} />
        <NumberInput name="glicemia" label="glicemia" {...fieldProps} />
        <NumberInput name="bt" label="bili total" {...fieldProps} />
        <NumberInput name="bd" label="bili directa" {...fieldProps} />
        <NumberInput name="bi" label="bili indirecta" {...fieldProps} />
        <NumberInput name="ret" label="reticulocitos" {...fieldProps} />
      </Grid>

      <TextareaInput name="otherLabs" label="Otros" {...fieldProps} />
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
        label="Notas análisis"
        {...fieldProps}
      />
      <Grid item>
        <h2 style={{ marginBottom: 0 }}>PLAN</h2>
      </Grid>
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

export default PatientForm;
