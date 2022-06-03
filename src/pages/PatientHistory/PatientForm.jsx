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
      spacing={1.5}
    >
      <h3 style={{ paddingLeft: 20 }}>**IDENTIFICACION**</h3>
      <TextfieldInput
        style={{ width: "30%" }}
        name="bedNumber"
        label="Nombre del paciente"
        {...fieldProps}
      />
      <Grid
        container
        direction="row"
        justifyContent="left"
        gap={4}
        spacing={1.5}
        item
      >
        <DateInput
          md={4}
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
          md={2}
          label="¿Nacio hoy?"
          name="justBorn"
          {...fieldProps}
        />
      </Grid>
      <RadioInput
        options={[
          "DRA GRACIELA AGAMEZ",
          "DR MANUEL BRAVO",
          "DRA DANNY VIÑA",
          "DR LUIS MENDEZ",
        ]}
        name="pediatricianShift"
        label="Pediatra en turno"
        {...fieldProps}
      />
      <Grid container direction="row" justifyContent="left" gap={2} item>
        <DateInput
          md={4}
          label="Fecha nacimiento: "
          name="dob"
          {...fieldProps}
        />
        <DateInput
          md={3.7}
          label="Fecha ingreso: "
          name="admissionDate"
          {...fieldProps}
        />
        <CheckboxInput md={1} label="EGRESO" name="exit" {...fieldProps} />
      </Grid>
      <Grid container direction="column" justifyContent="left" gap={1} item>
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
      </Grid>
      <TextareaInput name="diagnosis" label="Diagnósticos" {...fieldProps} />
      <h3 style={{ paddingLeft: 20 }}>**OBJETIVO**</h3>
      <RadioInput
        options={[24, 12, 6]}
        name="waterBalanceTime"
        label="Tiempo de balance de agua"
        {...fieldProps}
      />
      <Grid container gap={2} item>
        <NumberInput
          md={2}
          name="lastWeight"
          label="Peso anterior"
          {...fieldProps}
        />
        <NumberInput md={2} name="weight" label="Peso actual" {...fieldProps} />
        <NumberInput
          md={2}
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
      <h3 style={{ paddingLeft: 20 }}>**SIGNOS VITALES**</h3>
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
      <h3 style={{ paddingLeft: 20 }}>**PARACLÍNICOS**</h3>
      <Grid container direction="row" justifyContent="left" spacing={4} item>
        <strong>
          -----I--------------PERINATALES------------I--------------------------------------HEMOGRAMA
          ------------------------------------------I
        </strong>
      </Grid>
      <Grid container gap={1} item>
        <TextfieldInput md={0.7} name="vdrl" label="vdrl" {...fieldProps} />
        <NumberInput md={0.6} name="tsh" label="tsh" {...fieldProps} />
        <TextfieldInput
          md={2}
          name="hemoclasificacion"
          label="hemoclasificación"
          {...fieldProps}
        />
        <NumberInput md={1.5} name="hb" label="hemoglobina" {...fieldProps} />
        <NumberInput md={1.4} name="hto" label="hematocrito" {...fieldProps} />
        <NumberInput md={1.25} name="plt" label="plaquetas" {...fieldProps} />
        <NumberInput md={1} name="wbc" label="leucos" {...fieldProps} />
        <NumberInput md={1.05} name="n" label="neutros" {...fieldProps} />
        <NumberInput md={1} name="l" label="linfos" {...fieldProps} />
      </Grid>
      <Grid container direction="row" justifyContent="left" spacing={1} item>
        <strong>
          -I-----------------------ELECTROLITOS------------------------I---------------------GASES-------------------I---PCR---I--GLICEMIA--I
        </strong>
      </Grid>
      <Grid container gap={1} item>
        <NumberInput md={0.9} name="ca" label="calcio" {...fieldProps} />
        <NumberInput md={0.9} name="na" label="sodio" {...fieldProps} />
        <NumberInput md={1} name="k" label="potasio" {...fieldProps} />
        <NumberInput md={0.8} name="cl" label="cloro" {...fieldProps} />
        <NumberInput md={1.3} name="mg" label="magnesio" {...fieldProps} />
        <NumberInput md={0.6} name="ph" label="ph" {...fieldProps} />
        <NumberInput md={0.8} name="pco2" label="pco2" {...fieldProps} />
        <NumberInput md={0.7} name="po2" label="po2" {...fieldProps} />
        <NumberInput md={0.8} name="hco3" label="hco3" {...fieldProps} />
        <NumberInput md={0.6} name="be" label="be" {...fieldProps} />
        <NumberInput md={1} name="pcr" label="PCR" {...fieldProps} />
        <NumberInput
          md={1.1}
          name="glicemia"
          label="glicemia"
          {...fieldProps}
        />
      </Grid>
      <Grid container gap={1} item>
        <strong>
          I--------------------------BILIRRUBINAS-------------------------I
        </strong>
      </Grid>
      <Grid container gap={1} item>
        <NumberInput md={1.1} name="bt" label="bili total" {...fieldProps} />
        <NumberInput md={1.3} name="bd" label="bili directa" {...fieldProps} />
        <NumberInput
          md={1.5}
          name="bi"
          label="bili indirecta"
          {...fieldProps}
        />
        <NumberInput
          md={1.5}
          name="ret"
          label="reticulocitos"
          {...fieldProps}
        />
      </Grid>
      <TextareaInput name="otherLabs" label="Otros" {...fieldProps} />
      <h3 style={{ paddingLeft: 20 }}>**ANÁLISIS**</h3>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={1}
        gap={-15}
      >
        <CheckboxInput
          md={2}
          label="OXÍGENO"
          name="hasOxygen"
          {...fieldProps}
        />
        <CheckboxInput
          md={2}
          label="AYUNADO"
          name="oralIntake"
          {...fieldProps}
        />
        <CheckboxInput md={1.6} label="SONDA" name="foley" {...fieldProps} />

        <CheckboxInput
          md={2.3}
          label="PROGRESAR AE"
          name="upOralIntake"
          {...fieldProps}
        />
        <CheckboxInput
          md={4}
          label="RECUPERACIÓN NUTRICIONAL"
          name="nutritionRecovery"
          {...fieldProps}
        />
      </Grid>
      <RadioInput
        md={4}
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
      <h3 style={{ paddingLeft: 20 }}>**PLAN**</h3>
      <TextareaInput name="oxygen" label="Oxigeno" {...fieldProps} />
      <h5 style={{ paddingLeft: 20 }}>*DIETA*</h5>
      <Grid container item>
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
      </Grid>
      <h5 style={{ paddingLeft: 20 }}>*LEVS*</h5>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        spacing={1}
        gap={1}
        style={{ paddingLeft: 20 }}
      >
        <NumberInput md={2} name="hidricRate" label="TH LEVS" {...fieldProps} />
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
      </Grid>{" "}
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
    </Grid>
  );
}

export default PatientForm;
