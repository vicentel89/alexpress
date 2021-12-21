import React from 'react';
import TextField from '@mui/material/TextField';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import RadioInput from './shared/RadioInput';
import TextfieldInput from './shared/TextfieldInput';
import NumberInput from './shared/NumberInput';
import DateInput from './shared/DateInput';
import CheckboxInput from './shared/CheckboxInput';
import TextareaInput from './shared/TextareaInput';

function PatientForm({ formik }) {
  const { values, handleChange, handleSubmit } = formik;

  const fieldProps = { values, onChange: handleChange };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={4}>
      <TextfieldInput name="bedNumber" label="Numero de cama" {...fieldProps} />
      <RadioInput
        options={['BASICO', 'INTERMEDIO']}
        name="careType"
        label="Estancia"
        {...fieldProps}
      />
      <CheckboxInput label="¿Es nuevo?" name="isNew" {...fieldProps} />
      <RadioInput options={['MASCULINO', 'FEMENINO']} name="sex" label="Sexo" {...fieldProps} />
      <DateInput label="Fecha reporte: " name="reportDate" {...fieldProps} />
      <DateInput label="Fecha de nacimiento: " name="dob" {...fieldProps} />
      <NumberInput name="weeks" label="Edad gestacional" {...fieldProps} />
      <TextareaInput name="diagnosis" label="Diagnostico" {...fieldProps} />
      <RadioInput
        options={[24, 12]}
        name="waterBalanceTime"
        label="Tiempo de balance de agua"
        {...fieldProps}
      />
      <NumberInput name="lastWeight" label="Ultimo peso" {...fieldProps} />
      <NumberInput name="weight" label="Peso" {...fieldProps} />
      <NumberInput name="glucose" label="Glucosa" {...fieldProps} />
      <NumberInput name="intake" label="Liquidos administrados" {...fieldProps} />
      <NumberInput name="output" label="Liquidos eliminados" {...fieldProps} />
      <NumberInput name="cardiacFreq" label="Frecuencia cardiaca" {...fieldProps} />
      <NumberInput name="respiratoryFreq" label="Frecuencia respiratoria" {...fieldProps} />
      <NumberInput name="saturation" label="Saturacion" {...fieldProps} />
      <NumberInput name="temperture" label="Temperatura" {...fieldProps} />
      <TextareaInput name="physicalExam" label="Examen fisico" {...fieldProps} />
      <NumberInput name="wbc" label="wbc" {...fieldProps} />
      <NumberInput name="hb" label="hb" {...fieldProps} />
      <NumberInput name="hto" label="hto" {...fieldProps} />
      <NumberInput name="plt" label="plt" {...fieldProps} />
      <NumberInput name="neut" label="neut" {...fieldProps} />
      <NumberInput name="linfos" label="linfos" {...fieldProps} />
      <NumberInput name="pcr" label="pcr" {...fieldProps} />
      <NumberInput name="glycemia" label="glycemia" {...fieldProps} />
      <NumberInput name="na" label="na" {...fieldProps} />
      <NumberInput name="k" label="k" {...fieldProps} />
      <NumberInput name="ca" label="ca" {...fieldProps} />
      <NumberInput name="ph" label="ph" {...fieldProps} />
      <NumberInput name="pco2" label="pco2" {...fieldProps} />
      <NumberInput name="po2" label="po2" {...fieldProps} />
      <NumberInput name="hco3" label="hco3" {...fieldProps} />
      <NumberInput name="be" label="be" {...fieldProps} />
      <NumberInput name="vdrl" label="vdrl" {...fieldProps} />
      <NumberInput name="tsh" label="tsh" {...fieldProps} />
      <TextareaInput name="otherLabs" label="Otros" {...fieldProps} />
      <TextareaInput name="analysis" label="Analisis" {...fieldProps} />
      <TextareaInput name="oxygen" label="Oxigeno" {...fieldProps} />
      <TextareaInput name="diet" label="Dieta" {...fieldProps} />
      <TextareaInput name="liquid" label="Liquidos" {...fieldProps} />
      <TextareaInput name="drugs" label="Farmacos" {...fieldProps} />
      <TextareaInput name="nurse" label="Cuidados de enfermeria" {...fieldProps} />
      <TextareaInput name="test" label="Paraclinicos" {...fieldProps} />
      <TextareaInput name="images" label="Imagenes" {...fieldProps} />
      <TextareaInput name="consult" label="Interconsultas" {...fieldProps} />
      <TextareaInput name="pending" label="Pendientes" {...fieldProps} />
    </Grid>
  );
}

export default PatientForm;
