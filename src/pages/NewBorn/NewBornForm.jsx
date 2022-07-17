import React from "react";
import Grid from "@mui/material/Grid";
import RadioInput from "../../components/shared/RadioInput";
import TextfieldInput from "../../components/shared/TextfieldInput";
import NumberInput from "../../components/shared/NumberInput";
import DateInput from "../../components/shared/DateInput";
import CheckboxInput from "../../components/shared/CheckboxInput";
import TextareaInput from "../../components/shared/TextareaInput";
import { autocompleteClasses } from "@mui/material";

export const initialValues = {
  momName: "",
  momId: "",
  dateOfBirth: "",
  timeOfBirth: "",
  perfilInfeccioso: `ÚLTIMO PERFIL INFECCIOSO NEGATIVO`,
  antecedentesMaternos: "",
  malformacionesApgar: ``,
  gases: "false",
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
  gender: "",
  apgar1Appearance: "ACROCIANÓTICO",
  apgar1Pulse: ">100 LPM",
  apgar1Grimace: "MUECAS/LLANTO A ESTÍMULOS",
  apgar1Activity: "EXTREMIDADES FLEXIONADAS",
  apgar1Respiration: "LLANTO VIGOROSO",
  apgar5Appearance: "ACROCIANÓTICO",
  apgar5Pulse: ">100 LPM",
  apgar5Grimace: "LLANTO ESPONTÁNEO",
  apgar5Activity: "MOVIMIENTOS ACTIVOS",
  apgar5Respiration: "LLANTO VIGOROSO",
  apgar10Appearance: "ACROCIANÓTICO",
  apgar10Pulse: ">100 LPM",
  apgar10Grimace: "LLANTO ESPONTÁNEO",
  apgar10Activity: "MOVIMIENTOS ACTIVOS",
  apgar10Respiration: "LLANTO VIGOROSO",
  birthBy: "PARTO",
  surgeryIndication: "MOTIVADA POR",
  amnioLiq: "LIQUIDO AMNIÓTICO CLARO, EUTÉRMICO,",
  ph: " ",
  pco2: " ",
  po2: " ",
  hco3: " ",
  be: " ",
  na: " ",
  k: " ",
  ca: " ",
  cl: " ",
  glu: " ",
  lac: " ",
  dxUCI: "",
  UciOrMaterno: "MATERNO",
  estanciaUCI:
    "SE INDICA INGRESO A UCIN PARA TOMA DE PARACLÍNICOS Y EXÁMENES COMPLEMENTARIOS, SEGUIMIENTO, MANEJO Y VIGILANCIA ESTRICTA.",
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
      <h2 style={{ paddingLeft: 20 }}>**IDENTIFICACION**</h2>
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
        <h2>**DATOS DE NACIMIENTO**</h2>

        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          spacing={0}
          gap={1}
          pb={0}
          pl={0}
          pr={0}
        >
          <DateInput
            md={2.4}
            name="dateOfBirth"
            label="FECHA DE NACIMIENTO: "
            {...fieldProps}
          />
          <TextfieldInput
            md={1.5}
            name="timeOfBirth"
            label="HORA"
            {...fieldProps}
          />
          <RadioInput
            md={2.74}
            name="birthBy"
            label="NACIMIENTO POR"
            options={["CESÁREA", "PARTO"]}
            {...fieldProps}
          />
          {values.birthBy === "CESÁREA" && (
            <TextfieldInput
              md={5}
              style={{ width: "100%" }}
              name="surgeryIndication"
              label="INDICACION CESAREA"
              {...fieldProps}
            />
          )}
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="left"
          alignItems="flex-start"
          spacing={0}
          gap={1}
        >
          <RadioInput
            md={3.5}
            name="gender"
            label="Sexo"
            options={["MASCULINO", "FEMENINO"]}
            {...fieldProps}
          />

          <TextfieldInput
            md={7}
            style={{ width: "100%" }}
            name="amnioLiq"
            label="CARACTERISTICAS LIQUIDO AMNIOTICO"
            {...fieldProps}
          />
        </Grid>

        <h3> APGAR 1 </h3>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          spacing={0}
          pl={0}
          pr={0}
          pb={1}
        >
          <RadioInput
            options={["CIANÓTICO/PÁLIDO", "ACROCIANÓTICO", "TOTALMENTE ROSADO"]}
            md={2.16}
            smallFont
            name="apgar1Appearance"
            label="APARIENCIA"
            {...fieldProps}
          />
          <RadioInput
            options={["SIN PULSO", "<100 LPM", ">100 LPM"]}
            md={1.4}
            smallFont
            name="apgar1Pulse"
            label="PULSO"
            {...fieldProps}
          />
          <RadioInput
            options={[
              "SIN RESPUESTA A ESTÍMULOS",
              "MUECAS/LLANTO A ESTÍMULOS",
              "LLANTO ESPONTÁNEO",
            ]}
            md={2.75}
            smallFont
            name="apgar1Grimace"
            label="GESTOS"
            {...fieldProps}
          />
          <RadioInput
            options={[
              "FLÁCIDO/HIPOTÓNICO",
              "EXTREMIDADES FLEXIONADAS",
              "MOVIMIENTOS ACTIVOS",
            ]}
            md={3}
            smallFont
            name="apgar1Activity"
            label="ACTIVIDAD"
            {...fieldProps}
          />
          <RadioInput
            options={["APNEA", "LENTA/IRREGULAR", "LLANTO VIGOROSO"]}
            md={2}
            smallFont
            name="apgar1Respiration"
            label="RESPIRACIÓN"
            {...fieldProps}
          />
        </Grid>
        <h3> APGAR 5 </h3>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          pl={0}
          pr={0}
          pb={1}
        >
          <RadioInput
            options={["CIANÓTICO/PÁLIDO", "ACROCIANÓTICO", "TOTALMENTE ROSADO"]}
            md={2.16}
            smallFont
            name="apgar5Appearance"
            label="APARIENCIA"
            {...fieldProps}
          />
          <RadioInput
            options={["SIN PULSO", "<100 LPM", ">100 LPM"]}
            md={1.4}
            smallFont
            name="apgar5Pulse"
            label="PULSO"
            {...fieldProps}
          />
          <RadioInput
            options={[
              "SIN RESPUESTA A ESTÍMULOS",
              "MUECAS/LLANTO A ESTÍMULOS",
              "LLANTO ESPONTÁNEO",
            ]}
            md={2.75}
            smallFont
            name="apgar5Grimace"
            label="GESTOS"
            {...fieldProps}
          />
          <RadioInput
            options={[
              "FLÁCIDO/HIPOTÓNICO",
              "EXTREMIDADES FLEXIONADAS",
              "MOVIMIENTOS ACTIVOS",
            ]}
            md={3}
            smallFont
            name="apgar5Activity"
            label="ACTIVIDAD"
            {...fieldProps}
          />
          <RadioInput
            options={["APNEA", "LENTA/IRREGULAR", "LLANTO VIGOROSO"]}
            md={2}
            smallFont
            name="apgar5Respiration"
            label="RESPIRACIÓN"
            {...fieldProps}
          />
        </Grid>
        <h3> APGAR 10 </h3>
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          pl={0}
          pr={0}
          pb={1}
        >
          <RadioInput
            options={["CIANÓTICO/PÁLIDO", "ACROCIANÓTICO", "TOTALMENTE ROSADO"]}
            md={2.16}
            smallFont
            name="apgar10Appearance"
            label="APARIENCIA"
            {...fieldProps}
          />
          <RadioInput
            options={["SIN PULSO", "<100 LPM", ">100 LPM"]}
            md={1.4}
            smallFont
            name="apgar10Pulse"
            label="PULSO"
            {...fieldProps}
          />
          <RadioInput
            options={[
              "SIN RESPUESTA A ESTÍMULOS",
              "MUECAS/LLANTO A ESTÍMULOS",
              "LLANTO ESPONTÁNEO",
            ]}
            md={2.75}
            smallFont
            name="apgar10Grimace"
            label="GESTOS"
            {...fieldProps}
          />
          <RadioInput
            options={[
              "FLÁCIDO/HIPOTÓNICO",
              "EXTREMIDADES FLEXIONADAS",
              "MOVIMIENTOS ACTIVOS",
            ]}
            md={3}
            smallFont
            name="apgar10Activity"
            label="ACTIVIDAD"
            {...fieldProps}
          />
          <RadioInput
            options={["APNEA", "LENTA/IRREGULAR", "LLANTO VIGOROSO"]}
            md={2}
            smallFont
            name="apgar10Respiration"
            label="RESPIRACIÓN"
            {...fieldProps}
          />
          {/*  
      APGAR:
      -resultado
      0-3 depresion severa al nacer
      4-6 depresion moderada al nacer
      7-9 adecuada adaptacion al nacer
       <NumberInput md={0.6} name="ph" label="ph" {...fieldProps} />
        <NumberInput md={0.8} name="pco2" label="pco2" {...fieldProps} />
        <NumberInput md={0.7} name="po2" label="po2" {...fieldProps} />
        <NumberInput md={0.8} name="hco3" label="hco3" {...fieldProps} />
        <NumberInput md={0.6} name="be" label="be" {...fieldProps} />
       */}
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
            md={1.3}
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
            md={1.55}
            name="headAtBirth"
            label="P CEFALICO"
            {...fieldProps}
          />
          <NumberInput
            md={1.58}
            name="thoraxAtBirth"
            label="P TORACICO"
            {...fieldProps}
          />
          <NumberInput
            md={1.7}
            name="abdomenAtBirth"
            label="P ABDOMINAL"
            {...fieldProps}
          />
          <NumberInput
            md={1.12}
            name="percentileWeightAtBirth"
            label="% PESO"
            {...fieldProps}
          />
          <NumberInput
            md={1.15}
            name="percentileHeightAtBirth"
            label="% TALLA"
            {...fieldProps}
          />
          <NumberInput
            md={1.6}
            name="percentileHeadAtBirth"
            label="% CEFALICO"
            {...fieldProps}
          />
          {/*  
 
        

      APGAR:
      -resultado
      0-3 depresion severa al nacer
      4-6 depresion moderada al nacer
      7-9 adecuada adaptacion al nacer

    Gases de cordon
    ph
    pco2 
    po2
    hco3
    be
    lactato
    na
    k
    ca
    cl
    glu
    lac
  asfixia perinatal severa 3 de
  -apgar 5 < = 5
  -ph <7 o be <=-16
  -sarnat ii o iii
  -lactato > = 12
  moderada 2 de
  -apgar 5 <=7
  -ph < 7.15
  -sarnat i o ii
  asfixia perinatal leve sin acidosis metavbolica 2 de
  -apgar 5 <=7
  -ph >=7.15
  acidosis metabolica sin alteracion vlinica o neurologica
  -ph < 7.15
  -apgar 5 >7
  asfixia perinatal descartada
  -ph >=7.15
  -apgar 5 >7
       */}
        </Grid>
      </Grid>

      <TextareaInput
        name="malformacionesApgar"
        label="DESCRIPCIÓN ADMINISTRACIÓN DE OXÍGENO"
        {...fieldProps}
      />
      <CheckboxInput
        md={2}
        label="GASES DE CORDON"
        name="gases"
        {...fieldProps}
      />
      {values.gases ? (
        <>
          <Grid container gap={1} item>
            <NumberInput md={0.9} name="ph" label="ph" {...fieldProps} />
            <NumberInput md={0.9} name="pco2" label="pco2" {...fieldProps} />
            <NumberInput md={0.9} name="po2" label="po2" {...fieldProps} />
            <NumberInput md={1} name="hco3" label="hco3" {...fieldProps} />
            <NumberInput md={1} name="be" label="be" {...fieldProps} />
            <NumberInput md={1} name="na" label="sodio" {...fieldProps} />
            <NumberInput md={1} name="k" label="potasio" {...fieldProps} />
            <NumberInput md={1} name="ca" label="calcio" {...fieldProps} />
            <NumberInput md={1} name="cl" label="cloro" {...fieldProps} />
            <NumberInput md={1.2} name="glu" label="glucosa" {...fieldProps} />
            <NumberInput md={1} name="lac" label="lactato" {...fieldProps} />
          </Grid>
        </>
      ) : null}
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
