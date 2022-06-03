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
  malformacionesApgar: `SE TRASLADA PACIENTE A CUNA DE CALOR RADIENTE SE ESTIMULA Y SECA, SE CLAMPEA Y CORTA CORDÓN TRIVASCULAR (2 ARTERIAS Y UNA VENA), SE APLICA VITAMINA K. SE VERIFICA PERMEABILIDAD DE ANO Y ESÓFAGO. AL EXAMEN FÍSICO NO SE EVIDENCIAN MALFORMACIONES OSTENSIBLES, ORIFICIOS PERMEABLES, SATURACIÓN PRE Y POSTDUCTAL NORMALES. CON BUENA ADAPTACIÓN, PERÍMETRO CEFÁLICO, TALLA Y PESO ADECUADOS PARA SU EDAD,`,
  careType: "BASICO",
  weeksBallard: "",
  momAge: "",
  gestaNumber: "",
  paraNumber: "",
  cesareaNumber: "",
  obitosNumber: "",
  vivoNumber: "",
  weightAtBirth: "",
  heightAtBirth: "",
  headAtBirth: "",
  percentileWeightAtBirth: "",
  percentileHeightAtBirth: "",
  percentileHeadAtBirth: "",
  thoraxAtBirth: "",
  abdomenAtBirth: "",
  prenatalControl: "",
  apgar1: "",
  apgar5: "",
  apgar10: "",
  gender: "",
  birthBy: "CESÁREA",
  surgeryIndication: "MOTIVADA POR",
  amnioLiq: "LIQUIDO AMNIÓTICO CLARO, EUTÉRMICO,",
  dxUCI: "",
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
  SS TSH NEONATAL Y HEMOCLASIFICACIÓN`,
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
      justifyContent="left"
      alignItems="flex-start"
      spacing={0}
      gap={2}
    >
      <h3 style={{ paddingLeft: 20 }}>**IDENTIFICACION**</h3>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={0}
        gap={1}
      >
        <TextfieldInput
          md={3}
          style={{ width: "100%" }}
          name="momName"
          label="HIJO DE "
          {...fieldProps}
        />
        <TextfieldInput md={1.5} name="momId" label="CC MAMA" {...fieldProps} />
        <NumberInput
          md={2}
          name="momAge"
          label="EDAD MATERNA"
          {...fieldProps}
        />
        <TextfieldInput
          md={2.4}
          name="hemoGroup"
          label="GRUPO SANGUINEO"
          {...fieldProps}
        />
        <NumberInput
          md={2.4}
          name="weeksBallard"
          label="EDAD GESTACIONAL"
          {...fieldProps}
        />
        <NumberInput md={1} name="gestaNumber" label="GESTA" {...fieldProps} />
        <NumberInput
          md={1.35}
          name="abortionNumber"
          label="ABORTOS"
          {...fieldProps}
        />
        <NumberInput
          md={1.55}
          name="ectopicNumber"
          label="ECTOPICOS"
          {...fieldProps}
        />
        <NumberInput
          md={1.1}
          name="obitosNumber"
          label="ÓBITOS"
          {...fieldProps}
        />
        <NumberInput
          md={1.15}
          name="paraNumber"
          label="PARTOS"
          {...fieldProps}
        />
        <NumberInput
          md={1.45}
          name="cesareaNumber"
          label="CESAREAS"
          {...fieldProps}
        />
        <NumberInput md={1} name="vivoNumber" label="VIVOS" {...fieldProps} />
        <NumberInput
          md={3}
          style={{ width: "100%" }}
          name="prenatalControl"
          label="CONTROLES PRENATALES"
          {...fieldProps}
        />
        <TextfieldInput
          md={8.885}
          style={{ width: "100%" }}
          name="perfilInfeccioso"
          label="PERFIL INFECCIOSO"
          {...fieldProps}
        />
        <TextareaInput
          name="antecedentesMaternos"
          label="ANTECEDENTES MATERNOS"
          {...fieldProps}
        />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="left"
        alignItems="flex-start"
        spacing={0}
        gap={1}
      >
        <h3>**DATOS DE NACIMIENTO**</h3>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          spacing={1}
          style={{ paddingLeft: 30 }}
        >
          <RadioInput
            md={5}
            name="gender"
            label="Sexo"
            options={["MASCULINO", "FEMENINO"]}
            {...fieldProps}
          />
          <DateInput
            md={3}
            name="dateOfBirth"
            label="FECHA DE NACIMIENTO: "
            {...fieldProps}
          />
          <TextfieldInput
            md={1.1}
            name="timeOfBirth"
            label="HORA"
            {...fieldProps}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          spacing={0}
          gap={1}
        >
          <NumberInput
            md={1.2}
            name="weightAtBirth"
            label="PESO"
            {...fieldProps}
          />
          <NumberInput
            md={1}
            name="heightAtBirth"
            label="TALLA"
            {...fieldProps}
          />
          <NumberInput
            md={2.65}
            name="headAtBirth"
            label="PERIMETRO CEFALICO"
            {...fieldProps}
          />
          <NumberInput
            md={2.75}
            name="thoraxAtBirth"
            label="PERIMETRO TORACICO"
            {...fieldProps}
          />
          <NumberInput
            md={2.9}
            name="abdomenAtBirth"
            label="PERIMETRO ABDOMINAL"
            {...fieldProps}
          />
          <NumberInput
            md={2.1}
            name="percentileWeightAtBirth"
            label="PERCENTIL PESO"
            {...fieldProps}
          />
          <NumberInput
            md={2.2}
            name="percentileHeightAtBirth"
            label="PERCENTIL TALLA"
            {...fieldProps}
          />
          <NumberInput
            md={2.65}
            name="percentileHeadAtBirth"
            label="PERCENTIL CEFALICO"
            {...fieldProps}
          />

          <NumberInput md={1.3} name="apgar1" label="APGAR 1" {...fieldProps} />
          <NumberInput md={1.3} name="apgar5" label="APGAR 5" {...fieldProps} />
          <NumberInput
            md={1.5}
            name="apgar10"
            label="APGAR 10"
            {...fieldProps}
          />
        </Grid>
      </Grid>

      <RadioInput
        name="birthBy"
        label="NACIMIENTO POR"
        options={["CESÁREA", "PARTO"]}
        {...fieldProps}
      />
      {values.birthBy === "CESÁREA" && (
        <TextfieldInput
          md={6}
          style={{ width: "100%" }}
          name="surgeryIndication"
          label="INDICACION CESAREA"
          {...fieldProps}
        />
      )}
      <TextfieldInput
        md={6}
        style={{ width: "100%" }}
        name="amnioLiq"
        label="CARACTERISTICAS LIQUIDO AMNIOTICO"
        {...fieldProps}
      />
      <TextareaInput name="malformacionesApgar" label="" {...fieldProps} />
      <TextareaInput name="dxUCI" label="DIAGNÓSTICOS" {...fieldProps} />
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
