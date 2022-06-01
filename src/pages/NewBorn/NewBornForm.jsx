import React from "react";
import Grid from "@mui/material/Grid";
import RadioInput from "../../components/shared/RadioInput";
import TextfieldInput from "../../components/shared/TextfieldInput";
import NumberInput from "../../components/shared/NumberInput";
import DateInput from "../../components/shared/DateInput";
import CheckboxInput from "../../components/shared/CheckboxInput";
import TextareaInput from "../../components/shared/TextareaInput";

export const initialValues = {
  momName: "",
  momId: "",
  dateOfBirth: "",
  timeOfBirth: "",
  perfilInfeccioso: `ÚLTIMO PERFIL INFECCIOSO NEGATIVO`,
  antecedentesMaternos: "",
  malformacionesApgar: `SE TRASLADA PACIENTE A CUNA DE CALOR RADIENTE SE ESTIMULA Y SECA, SE CLAMPEA Y CORTA CORDÓN TRIVASCULAR (2 ARTERIAS Y UNA VENA), SE APLICA VITAMINA K. SE VERIFICA PERMEABILIDAD DE ANO Y ESÓFAGO. AL EXAMEN FÍSICO NO SE EVIDENCIAN MALFORMACIONES OSTENSIBLES, ORIFICIOS PERMEABLES, SATURACIÓN PRE Y POSTDUCTAL NORMALES. CON BUENA ADAPTACIÓN, PERÍMETRO CEFÁLICO, TALLA Y PESO ADECUADOS PARA SU EDAD, 
  `,
  careType: "BASICO",
  weeksBallard: "",
  momAge: "",
  gestaNumber: "",
  paraNumber: "",
  cesareaNumber: "",
  vivoNumber: "",
  weightAtBirth: "",
  heightAtBirth: "",
  headAtBirth: "",
  thoraxAtBirth: "",
  abdomenAtBirth: "",
  prenatalControl: "",
  apgar1: "",
  apgar5: "",
  apgar10: "",
  gender: "MASCULINO",
  birthBy: "CESÁREA",
  surgeryIndication: "MOTIVADA POR",
  amnioLiq: "LIQUIDO AMNIÓTICO CLARO, EUTÉRMICO,",
  dxUCI: "-PESO, TALLA Y PERÍMETRO CEFÁLICO ADECUADOS PARA EDAD GESTACIONAL",
  UciOrMaterno: "MATERNO",
  estanciaUCI:
    "POR LO QUE SE INDICA INGRESO A UCIN PARA TOMA DE PARACLÍNICOS Y EXÁMENES COMPLEMENTARIOS, SEGUIMIENTO, MANEJO Y VIGILANCIA ESTRICTA.",
  planMaterno: `ATENCIÓN AL RECIÉN NACIDO 
  GENTAMICINA GOTAS OFTÁLMICAS PROFILÁCTICAS
  VITAMINA K 1 MG IM 
  TRASLADO A LADO MATERNO
  LACTANCIA MATERNA EXCLUSIVA A LIBRE DEMANDA
  INICIAR ESQUEMA DE VACUNACIÓN 
  CURACION DIARIA DE ÓNFALO 
  RECOMENDACIONES Y  SIGNOS DE ALARMA
  SS TSH NEONATAL Y HEMOCLASIFICACIÓN 
  `,
  planUCI: `ATENCIÓN AL RECIÉN NACIDO 
  GENTAMICINA GOTAS OFTÁLMICAS PROFILÁCTICAS
  VITAMINA K 1 MG IM 
  TRASLADO A UCIN
  INICIAR ESQUEMA DE VACUNACIÓN 
  CURACION DIARIA DE ONFALO 
  RECOMENDACIONES Y  SIGNOS DE ALARMA
  SS TSH NEONATAL Y HEMOCLASIFICACIÓN 
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
      <TextfieldInput name="momName" label="HIJO DE " {...fieldProps} />
      <TextfieldInput name="momId" label="IDENTIFICACIÓN" {...fieldProps} />
      <TextareaInput
        name="antecedentesMaternos"
        label="ANTECEDENTES MATERNOS"
        {...fieldProps}
      />
      <DateInput
        name="dateOfBirth"
        label="FECHA DE NACIMIENTO: "
        {...fieldProps}
      />
      <TextfieldInput name="timeOfBirth" label="HORA" {...fieldProps} />
      <RadioInput
        name="gender"
        label="Sexo"
        options={["MASCULINO", "FEMENINO"]}
        {...fieldProps}
      />
      <Grid container gap={2} item>
        <NumberInput
          name="weeksBallard"
          label="EDAD GESTACIONAL"
          {...fieldProps}
        />
        <NumberInput name="momAge" label="EDAD MATERNA" {...fieldProps} />
        <TextfieldInput
          name="hemoGroup"
          label="GRUPO SANGUINEO"
          {...fieldProps}
        />
        <NumberInput name="gestaNumber" label="GESTA" {...fieldProps} />
        <NumberInput name="abortionNumber" label="ABORTOS" {...fieldProps} />
        <NumberInput name="ectopicNumber" label="ECTOPICOS" {...fieldProps} />
        <NumberInput name="paraNumber" label="PARTOS" {...fieldProps} />
        <NumberInput name="cesareaNumber" label="CESAREAS" {...fieldProps} />
        <NumberInput name="vivoNumber" label="VIVOS" {...fieldProps} />
        <NumberInput
          name="prenatalControl"
          label="CONTROLES PRENATALES"
          {...fieldProps}
        />
        <NumberInput name="weightAtBirth" label="PESO" {...fieldProps} />
        <NumberInput name="heightAtBirth" label="TALLA" {...fieldProps} />
        <NumberInput
          name="headAtBirth"
          label="PERIMETRO CEFALICO"
          {...fieldProps}
        />
        <NumberInput
          name="thoraxAtBirth"
          label="PERIMETRO TORACICO"
          {...fieldProps}
        />
        <NumberInput
          name="abdomenAtBirth"
          label="PERIMETRO ABDOMINAL"
          {...fieldProps}
        />
        <NumberInput name="apgar1" label="APGAR 1" {...fieldProps} />
        <NumberInput name="apgar5" label="APGAR 5" {...fieldProps} />
        <NumberInput name="apgar10" label="APGAR 10" {...fieldProps} />

        <TextfieldInput
          name="perfilInfeccioso"
          label="PERFIL INFECCIOSO"
          {...fieldProps}
        />
      </Grid>
      <RadioInput
        name="birthBy"
        label="NACIMIENTO POR"
        options={["CESÁREA", "PARTO"]}
        {...fieldProps}
      />
      {values.birthBy === "CESÁREA" && (
        <TextfieldInput
          name="surgeryIndication"
          label="INDICACION CESAREA"
          {...fieldProps}
        />
      )}
      <TextfieldInput
        name="amnioLiq"
        label="CARACTERISTICAS LIQUIDO AMNIOTICO"
        {...fieldProps}
      />

      <TextareaInput name="malformacionesApgar" label="" {...fieldProps} />

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
