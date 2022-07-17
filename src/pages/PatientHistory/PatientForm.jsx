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
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      pl={1}
      pr={0}
      pb={1}
    >
      <h3>**IDENTIFICACION**</h3>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        pl={1}
        pr={0}
        pb={1.7}
      >
        <TextfieldInput
          style={{ width: "100%" }}
          name="bedNumber"
          label="Nombre del paciente"
          {...fieldProps}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        pl={1}
        pr={0}
        pb={1.7}
      >
        <DateInput
          md={3}
          label=" Fecha evolución: "
          name="reportDate"
          {...fieldProps}
        />
        <RadioInput
          md={3}
          options={["AM", "PM"]}
          name="timeOfDay"
          label="Evolución"
          {...fieldProps}
        />
        <CheckboxInput
          md={3}
          label="¿Nacio hoy?"
          name="justBorn"
          {...fieldProps}
        />
        <CheckboxInput md={3} label="EGRESO" name="exit" {...fieldProps} />
        <RadioInput
          options={[
            "DRA GRACIELA AGAMEZ",
            "DR MANUEL BRAVO",
            "DRA ADRIANA DONADO",
            "DR LUIS MENDEZ",
            "DRA MILENA BUSTAMANTE",
            "DRA NAZLY MULFORD",
            "DR ROY CASTRO",
            "DRA TANIA GOMEZ",
          ]}
          name="pediatricianShift"
          label="Pediatra en turno"
          smallFont
          md={9}
          {...fieldProps}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        pl={1}
        pr={0}
        pb={1.7}
      >
        <DateInput
          md={5}
          label="Fecha nacimiento: "
          name="dob"
          {...fieldProps}
        />
        <DateInput
          md={5}
          label="Fecha ingreso: "
          name="admissionDate"
          {...fieldProps}
        />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="left"
        alignItems="flex-start"
        pl={1}
        pr={0}
        pb={1.7}
        gap={2}
      >
        <RadioInput
          md={5}
          options={["MASCULINO", "FEMENINO"]}
          name="sex"
          label="Sexo"
          {...fieldProps}
        />
        <NumberInput
          md={3}
          name="weeks"
          label="Edad gestacional"
          {...fieldProps}
        />
        <TextareaInput name="diagnosis" label="Diagnósticos" {...fieldProps} />
        <TextareaInput
          name="studies"
          label="Estudios Realizados"
          {...fieldProps}
        />
      </Grid>
      <h3>**OBJETIVO**</h3>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        pl={1}
        pr={0}
        pb={1.7}
        gap={1}
      >
        <RadioInput
          options={[24, 12, 6]}
          name="waterBalanceTime"
          label="Tiempo balance hídrico"
          {...fieldProps}
        />
        <NumberInput
          md={1.55}
          name="lastWeight"
          label="Peso anterior"
          {...fieldProps}
        />
        <NumberInput
          md={1.4}
          name="weight"
          label="Peso actual"
          {...fieldProps}
        />
        <NumberInput
          md={1.5}
          name="glucose"
          label="Glucometría"
          {...fieldProps}
        />
        <NumberInput
          md={2.5}
          name="intake"
          label="Liquidos administrados"
          {...fieldProps}
        />
        <NumberInput
          md={2.3}
          name="output"
          label="Liquidos eliminados"
          {...fieldProps}
        />
      </Grid>
      <h4>**SIGNOS VITALES**</h4>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        pl={1}
        pr={0}
        pb={1.7}
        gap={1}
      >
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
        <TextareaInput
          name="physicalExam"
          label="Examen físico"
          md={11.7}
          {...fieldProps}
        />
      </Grid>

      {values.exit ? (
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="flex-start"
          pl={1}
          pr={0}
          pb={1.7}
          gap={1}
        >
          <h4>**ANTECEDENTES PERINATALES**</h4>
          <TextareaInput
            md={11.7}
            name="otherLabs"
            label="Otros"
            {...fieldProps}
          />
          <NumberInput md={1} name="tsh" label="tsh" {...fieldProps} />
          <TextfieldInput
            md={3}
            name="hemoclasificacion"
            label="Grupo Sanguíneo"
            {...fieldProps}
          />
        </Grid>
      ) : null}

      <h3>**PARACLÍNICOS**</h3>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={1}
        gap={0}
        pl={2}
        pr={0}
        pb={2}
      >
        <TextfieldInput md={1} name="vdrl" label="vdrl" {...fieldProps} />
        <NumberInput md={1} name="tsh" label="tsh" {...fieldProps} />
        <TextfieldInput
          md={2.5}
          name="hemoclasificacion"
          label="Grupo Sanguíneo"
          {...fieldProps}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={1}
        gap={0}
        pl={2}
        pr={0}
        pb={2}
      >
        <NumberInput md={2} name="hb" label="hemoglobina" {...fieldProps} />
        <NumberInput md={2} name="hto" label="hematocrito" {...fieldProps} />
        <NumberInput md={2} name="plt" label="plaquetas" {...fieldProps} />
        <NumberInput md={2} name="wbc" label="leucos" {...fieldProps} />
        <NumberInput md={1.5} name="n" label="neutros" {...fieldProps} />
        <NumberInput md={1.5} name="l" label="linfos" {...fieldProps} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={1}
        gap={0}
        pl={2}
        pr={0}
        pb={2}
      >
        <NumberInput md={1} name="pcr" label="PCR" {...fieldProps} />
        <NumberInput
          md={1.5}
          name="glicemia"
          label="glicemia"
          {...fieldProps}
        />
        <NumberInput md={1.5} name="ca" label="calcio" {...fieldProps} />
        <NumberInput md={1.5} name="na" label="sodio" {...fieldProps} />
        <NumberInput md={1.5} name="k" label="potasio" {...fieldProps} />
        <NumberInput md={1.5} name="cl" label="cloro" {...fieldProps} />
        <NumberInput md={1.5} name="mg" label="magnesio" {...fieldProps} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={1}
        gap={0}
        pl={2}
        pr={0}
        pb={2}
      >
        <NumberInput md={1} name="ph" label="ph" {...fieldProps} />
        <NumberInput md={1} name="pco2" label="pco2" {...fieldProps} />
        <NumberInput md={1} name="po2" label="po2" {...fieldProps} />
        <NumberInput md={1} name="hco3" label="hco3" {...fieldProps} />
        <NumberInput md={1} name="be" label="be" {...fieldProps} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={1}
        gap={0}
        pl={2}
        pr={0}
        pb={2}
      >
        <NumberInput md={3} name="bt" label="bili total" {...fieldProps} />
        <NumberInput md={3} name="bd" label="bili directa" {...fieldProps} />
        <NumberInput md={3} name="bi" label="bili indirecta" {...fieldProps} />
        <NumberInput md={3} name="ret" label="reticulocitos" {...fieldProps} />
        <TextareaInput md={12} name="otherLabs" label="Otros" {...fieldProps} />
      </Grid>
      <h3>**ANÁLISIS**</h3>
      {values.exit ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
          gap={0}
          pl={2}
          pr={0}
          pb={2}
        >
          <TextareaInput
            name="paraclinicAnalysis"
            label="Notas análisis"
            {...fieldProps}
          />
          <CheckboxInput
            md={2}
            label="OFTALMO"
            name="ophtalmo"
            {...fieldProps}
          />
          <CheckboxInput md={2} label="NEURO" name="neuro" {...fieldProps} />
          <CheckboxInput md={2} label="NEFRO" name="nefro" {...fieldProps} />
          <CheckboxInput
            md={2}
            label="POTENCIALES"
            name="potentials"
            {...fieldProps}
          />
        </Grid>
      ) : (
        <>
          <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="flex-start"
            spacing={0}
            gap={0}
            pl={2}
            pr={0}
            pb={1}
          >
            <CheckboxInput
              md={1.5}
              label="Oxígeno"
              name="hasOxygen"
              {...fieldProps}
            />
            <CheckboxInput
              md={1.5}
              label="Ayunado"
              name="oralIntake"
              {...fieldProps}
            />
            <CheckboxInput
              md={1.5}
              label="Sonda"
              name="foley"
              {...fieldProps}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="flex-start"
            spacing={0}
            gap={0}
            pl={2}
            pr={0}
            pb={1}
          >
            <CheckboxInput
              md={3}
              label="Progresar aporte"
              name="upOralIntake"
              {...fieldProps}
            />
            <CheckboxInput
              md={4}
              label="Recuperación nutricional"
              name="nutritionRecovery"
              {...fieldProps}
            />
            <RadioInput
              md={5}
              options={["Ninguno", "LEVS", "NPT"]}
              name="nutritionSupport"
              label="Soporte nutricional"
              {...fieldProps}
            />
            <TextareaInput
              name="paraclinicAnalysis"
              label="Notas análisis"
              {...fieldProps}
            />
          </Grid>
          <h3>**PLAN**</h3>
          <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="flex-start"
            spacing={0}
            gap={0}
            pl={2}
            pr={0}
            pb={1}
          >
            <TextareaInput name="oxygen" label="Oxigeno" {...fieldProps} />
          </Grid>
          <h5>*DIETA*</h5>
          <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="flex-start"
            spacing={0}
            gap={0}
            pl={2}
            pr={0}
            pb={2}
          >
            <NumberInput
              md={2}
              name="newOralIntake"
              label="Tasa hídrica"
              {...fieldProps}
            />
            <CheckboxInput
              md={4}
              label="LECHE MATERNA EXCLUSIVA"
              name="momMilk"
              {...fieldProps}
            />
            <CheckboxInput
              md={4}
              label="LIBRE DEMANDA"
              name="freeMilk"
              {...fieldProps}
            />
          </Grid>
          <h5>*LEVS*</h5>
          <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="flex-start"
            spacing={0}
            gap={1}
            pl={2}
            pr={0}
            pb={2}
          >
            <NumberInput
              md={2}
              name="hidricRate"
              label="TH LEVS"
              {...fieldProps}
            />
            <NumberInput md={2} name="TIG" label="TIG" {...fieldProps} />
            <NumberInput
              md={2}
              name="meqSodium"
              label="mEq Sodio"
              {...fieldProps}
            />
            <NumberInput
              md={2}
              name="meqPotassium"
              label="mEq Potasio"
              {...fieldProps}
            />
            <TextareaInput name="NPT" label="NPT" {...fieldProps} />
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
          </Grid>{" "}
        </>
      )}
    </Grid>
  );
}

export default PatientForm;
