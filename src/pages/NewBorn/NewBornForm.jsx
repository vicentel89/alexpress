import React from "react";
import Grid from "@mui/material/Grid";
import RadioInput from "../../components/shared/RadioInput";
import TextfieldInput from "../../components/shared/TextfieldInput";
import NumberInput from "../../components/shared/NumberInput";
import DateInput from "../../components/shared/DateInput";
import CheckboxInput from "../../components/shared/CheckboxInput";
import TextareaInput from "../../components/shared/TextareaInput";

export const initialValues = {
  textField: "",
  textField2: "",
  dob: "",
  ToB: "",
  perfilInfeccioso: `ÚLTIMO PERFIL INFECCIOSO NEGATIVO`,
  antecedentesMaternos: "",
  malformacionesApgar: `SE TRASLADA PACIENTE A CUNA DE CALOR RADIENTE SE ESTIMULA Y SECA, SE CLAMPEA Y CORTA CORDÓN TRIVASCULAR (2 ARTERIAS Y UNA VENA), SE APLICA VITAMINA K. SE VERIFICA PERMEABILIDAD DE ANO Y ESÓFAGO. AL EXAMEN FÍSICO NO SE EVIDENCIAN MALFORMACIONES OSTENSIBLES, ORIFICIOS PERMEABLES, SATURACIÓN PRE Y POSTDUCTAL NORMALES. CON BUENA ADAPTACIÓN, TALLA Y PESO ADECUADOS PARA SU EDAD, 
  `,
  numberField: "",
  numberField2: "",
  numberFieldG: "",
  numberFieldP: "",
  numberFieldC: "",
  numberFieldV: "",
  numberFieldPESO: "",
  numberFieldTALLA: "",
  numberFieldPC: "",
  numberFieldPT: "",
  numberFieldPA: "",
  numberFieldCPN: "",
  numberFieldA1: "",
  numberFieldA5: "",
  numberFieldA10: "",
  radioField: "MASCULINO",
  radioField2: "CESÁREA",
  textFieldIC: "MOTIVADA POR",
  textFieldAmnioLiq: "LIQUIDO AMNIOTICO CLARO, EUTERMICO,",
  dxUCI: "",
  UciOrMaterno: "MATERNO",
  estanciaUCI:
    "SE INDICA INGRESO A UCIN POR XXXXXXX PARA TOMA DE PARACLÍNICOS Y EXÁMENES COMPLEMENTARIOS, SEGUIMIENTO, MANEJO Y VIGILANCIA ESTRICTA.",
  planMaterno: `ATENCION AL RECIEN NACIDO 
  GENTAMICINA GOTAS OFTALMICAS PROFILACTICAS
  VITAMINA K 1 MG IM 
  TRASLADO A LADO MATERNO
  LACTANCIA MATERNA EXCLUSIVA A LIBRE DEMANDA
  INICIAR ESQUEMA DE VACUNACION 
  CURACION DIARIA DE ONFALO 
  RECOMENDACIONES Y  SIGNOS DE ALARMA
  SS TSH NEONATAL, VDRL, HEMOCLASIFICACION 
  `,
  planUCI: `INGRESO A UCIN
  DIETA: 
  CURACION DE ONFALO CADA 8 HORAS
  MANTENER ONFALO FUERA DEL PAÑAL
  GLUCOMETRIA AHORA Y  CADA 6 HORAS
  CUIDADOS DEL RECIEN NACIDO
  INICIAR ESQUEMA DE VACUCION DEL RECIEN NACIDO 
  RECOMENDACIONES Y  SIGNOS DE ALARMA
  SS VDRL, HEMOCLASIFICACIÓN, TSH NEONATAL 
  `,
};

function NewBornForm({ formik }) {
  const { values, handleChange: formikHandleChange, errors } = formik;

  const handleChange = (e) => {
    formikHandleChange(e);
    localStorage.setItem("new-born-backup", JSON.stringify(values));
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
      <TextfieldInput name="textField" label="HIJO DE " {...fieldProps} />
      <TextfieldInput
        name="textField2"
        label="IDENTIFICACIÓN"
        {...fieldProps}
      />
      <DateInput name="dob" label="FECHA DE NACIMIENTO: " {...fieldProps} />
      <TextfieldInput name="ToB" label="HORA" {...fieldProps} />
      <RadioInput
        name="radioField"
        label="Radio input"
        options={["MASCULINO", "FEMENINO"]}
        {...fieldProps}
      />
      <Grid container gap={2} item>
        <NumberInput
          name="numberField"
          label="EDAD GESTACIONAL"
          {...fieldProps}
        />
        <NumberInput name="numberFieldPESO" label="PESO" {...fieldProps} />
        <NumberInput name="numberFieldTALLA" label="TALLA" {...fieldProps} />
        <NumberInput name="numberFieldPC" label="PC" {...fieldProps} />
        <NumberInput name="numberFieldPT" label="PT" {...fieldProps} />
        <NumberInput name="numberFieldPA" label="PA" {...fieldProps} />
        <NumberInput name="numberFieldA1" label="APGAR 1" {...fieldProps} />
        <NumberInput name="numberFieldA5" label="APGAR 5" {...fieldProps} />
        <NumberInput name="numberFieldA10" label="APGAR 10" {...fieldProps} />
        <NumberInput name="numberField2" label="EDAD MATERNA" {...fieldProps} />
        <TextfieldInput name="textFieldGS" label="GS" {...fieldProps} />
        <NumberInput name="numberFieldG" label="G" {...fieldProps} />
        <NumberInput name="numberFieldP" label="P" {...fieldProps} />
        <NumberInput name="numberFieldC" label="C" {...fieldProps} />
        <NumberInput name="numberFieldV" label="V" {...fieldProps} />
        <NumberInput name="numberFieldCPN" label="CPN" {...fieldProps} />
        <TextfieldInput
          name="perfilInfeccioso"
          label="PERFIL INFECCIOSO"
          {...fieldProps}
        />
      </Grid>
      <RadioInput
        name="radioField2"
        label="Radio input"
        options={["CESÁREA", "PARTO"]}
        {...fieldProps}
      />
      {values.radioField2 === "CESÁREA" && (
        <TextfieldInput
          name="textFieldIC"
          label="INDICACION CESAREA"
          {...fieldProps}
        />
      )}
      <TextfieldInput name="textFieldAmnioLiq" label="LA" {...fieldProps} />

      <TextareaInput name="malformacionesApgar" label="" {...fieldProps} />
      <TextareaInput
        name="antecedentesMaternos"
        label="ANTECEDENTES MATERNOS"
        {...fieldProps}
      />

      <RadioInput
        name="UciOrMaterno"
        label="UCI O LADO MATERNO"
        options={["MATERNO", "UCI"]}
        {...fieldProps}
      />
      {values.UciOrMaterno === "UCI" && (
        <>
          <TextareaInput
            name="estanciaUCI"
            label="Estancia UCI"
            {...fieldProps}
          />
          <TextareaInput
            name="dxUCI"
            label="DIAGNÓSTICOS UCI"
            {...fieldProps}
          />
          <TextareaInput
            name="planUCI"
            label="PLAN INGRESO A UCIN"
            {...fieldProps}
          />
        </>
      )}

      {values.UciOrMaterno === "MATERNO" && (
        <TextareaInput
          name="planMaterno"
          label="PLAN LADO MATERNO"
          {...fieldProps}
        />
      )}
    </Grid>
  );
}

export default NewBornForm;
