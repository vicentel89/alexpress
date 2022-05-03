import React from "react";
import Grid from "@mui/material/Grid";
import RadioInput from "../../components/shared/RadioInput";
import TextfieldInput from "../../components/shared/TextfieldInput";
import NumberInput from "../../components/shared/NumberInput";
import DateInput from "../../components/shared/DateInput";
import CheckboxInput from "../../components/shared/CheckboxInput";
import TextareaInput from "../../components/shared/TextareaInput";

export const initialValues = {
  patientName: "",
  patientAge: "",
  patientBed: "",
  gender: "",
  consult: "",
  painPlace: "",
  painPlaceSpecific: "",
  painScale: "",
  painType: "",
  painApparition: "",
  painActivity: "",
  painConcomitant: ", concomitante con",
  traumatype: "",
  traumaPlace: "",
  traumaActivity: "",
  traumaObject: "",
  painMeds: "",
  mainComplaint: "",
  evolutionHours: "",
  actualDisease: "",
  personalAnt: "niega",
  pathologicalAnt: "niega",
  pharmacologicAnt: "niega",
  hospitalizationAnt: "niega",
  surgicalAnt: "niega",
  traumaticAnt: "niega",
  alergicAnt: "niega",
  toxicAnt: "niega",
  transfusionAnt: "niega",
  vaccinationAnt: "niega",
  bloodType: "",
  familyAnt: "niega",
  otherAnt:
    "Personales no patológicos ginecoobstétricos: G, P, A, C, M, V, E, Compañeros sexuales en los últimos 6 meses, menarquia, FUM, ciclos regulares, duración de ciclos, inicio de vida sexual, inicio de vida obstétrica, planificación, última citología, ETS, EPI, menopausia",
  headPhysical:
    "Normocéfalo, surcos frontales simétricos, pupilas isocóricas normorreactivas a la luz, sin evidencia de nistagmo, conjuntivas normocrómicas, escleras anictéricas, buena implantación de cejas y pestañas narinas de conformación normal, mucosa oral húmeda, hidratada, orofaringe sin alteraciones.",
  neckPhysical:
    "móvil, no doloroso a la palpación ni movilización, no se palpan masas ni adenomegalias, tiroides no visible ni palpable, pulsos carotídeos simétricos, no ingurgitación yugular",
  thoraxPhysical:
    "Simétrico, expansible, sin uso de musculatura accesoria, no doloroso a la palpación pulmones con adecuada entrada de aire bilateral, ruidos respiratorios bilaterales sin agregados patológicos, percusión sin alteraciones",
  heartPhysical:
    "Ruidos cardíacos rítmicos, de buen tono e intensidad, sin soplos ni agregados, llenado capilar distal inmediato",
  abdomenPhysical:
    "No distendido, peristalsis positiva, blando, depresible, no doloroso a la palpación, sin evidencia de signos de irritación peritoneal, no se palpan masas. Puño percusión bilateral negativa.",
  extremitiesPhysical: "simétricas y eutróficas sin edemas",
  skinPhysical:
    "íntegra sin lesiones aparentes, no se evidencia tinte ictérico",
  othertests: "",
  analysis: "",
  diagnostics: "",
  stay: "",
  oxygen: "",
  diet: "",
  levs: "",
  test: "",
  images: "",
  consult: "",
  pending: "",
};
function EmergencyForm({ formik }) {
  const { values, handleChange: formikHandleChange, errors } = formik;

  const handleChange = (e) => {
    formikHandleChange(e);
    localStorage.setItem("emergency-backup", JSON.stringify(values));
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
      <h2>***DATOS IDENTIFICACIÓN</h2>
      <TextfieldInput name="patientName" label="NOMBRE" {...fieldProps} />
      <NumberInput name="patientAge" label="EDAD" {...fieldProps} />
      <TextfieldInput name="patientBed" label="Cama" {...fieldProps} />
      <RadioInput
        name="gender"
        label="GÉNERO"
        options={["masculino", "femenino"]}
        {...fieldProps}
      />
      <h2>***MOTIVO DE CONSULTA</h2>
      <RadioInput
        name="consult"
        label="MC"
        options={["dolor", "trauma", "otro"]}
        {...fieldProps}
      />
      {values.consult === "otro" && (
        <TextareaInput
          name="mainComplaint"
          label="MOTIVO DE CONSULTA"
          {...fieldProps}
        />
      )}

      <h2>***ENFERMEDAD ACTUAL</h2>

      <NumberInput
        name="evolutionHours"
        label="horas de evolución"
        {...fieldProps}
      />
      {values.consult === "dolor" && (
        <>
          <RadioInput
            name="painPlace"
            label="lugar"
            options={["torácico", "abdominal", "de cabeza"]}
            {...fieldProps}
          />
          <TextfieldInput
            name="painPlaceSpecific"
            label="Especificaciones locaclizacion del dolor"
            {...fieldProps}
          />
          <RadioInput
            name="painType"
            label="tipo"
            options={[
              "peso",
              "urente",
              "cólico",
              "desgarrante",
              "transfixiante",
              "corrientazo",
              "pulsátil",
            ]}
            {...fieldProps}
          />
          <NumberInput
            name="painScale"
            label="escala analoga del dolor"
            {...fieldProps}
          />
          <RadioInput
            name="painApparition"
            label="aparición"
            options={["súbita", "insidiosa"]}
            {...fieldProps}
          />
          <TextfieldInput
            name="painActivity"
            label="actividad que estaba realizando cuando aparecio el dolor, alivio del dolor"
            {...fieldProps}
          />
          <TextfieldInput
            name="painConcomitant"
            label="Concomitancias"
            {...fieldProps}
          />
          )
        </>
      )}
      {values.consult === "trauma" && (
        <>
          <TextfieldInput
            name="traumaType"
            label="tipo de trauma"
            {...fieldProps}
          />
          <TextfieldInput
            name="traumaObject"
            label="tipo de objeto que genera trauma"
            {...fieldProps}
          />
          <TextfieldInput
            name="traumaPlace"
            label="Localizacion del trauma"
            {...fieldProps}
          />
          <TextfieldInput
            name="traumaActivity"
            label="actividad que estaba realizando cuando aparecio el dolor, alivio del dolor"
            {...fieldProps}
          />
          )
        </>
      )}
      {values.consult === "otro" && (
        <>
          <TextareaInput
            name="actualDisease"
            label="cuadro clinico"
            {...fieldProps}
          />
          )
        </>
      )}
      <TextfieldInput
        name="painMeds"
        label="Medicamentos que consumio"
        {...fieldProps}
      />
      <RadioInput
        name="painBetter"
        label="efecto del mediamento sobre el dolor"
        options={["con alivio", "sin alivio"]}
        {...fieldProps}
      />

      <h2>***ANTECEDENTES</h2>
      <TextfieldInput
        name="pathologicalAnt"
        label="PATOLÓGICOS "
        {...fieldProps}
      />
      <TextfieldInput
        name="pharmacologicAnt"
        label="FARMACOLÓGICOS "
        {...fieldProps}
      />
      <TextfieldInput
        name="hospitalizationAnt"
        label="HOSPITALIZACIONES "
        {...fieldProps}
      />
      <TextfieldInput name="surgicalAnt" label="QUIRÚRGICOS " {...fieldProps} />
      <TextfieldInput
        name="traumaticAnt"
        label="TRAUMÁTICOS "
        {...fieldProps}
      />
      <TextfieldInput name="alergicAnt" label="ALÉRGICOS " {...fieldProps} />
      <TextfieldInput name="toxicAnt" label="TÓXICOS " {...fieldProps} />
      <TextfieldInput
        name="transfusionAnt"
        label="TRANSFUSIONALES "
        {...fieldProps}
      />
      <TextfieldInput
        name="vaccinationAnt"
        label="VACUNACIÓN "
        {...fieldProps}
      />
      <TextfieldInput
        name="bloodType"
        label="HEMOCLASIFICACIÓN "
        {...fieldProps}
      />
      <TextfieldInput name="familyAnt" label="FAMILIARES " {...fieldProps} />
      <TextareaInput
        name="otherAnt"
        label="PERSONALES NO PATOLOGICOS/GINECOOBSTÉTRICOS"
        {...fieldProps}
      />
      <h2>***EXAMEN FÍSICO</h2>
      <TextareaInput name="headPhysical" label="Cabeza" {...fieldProps} />
      <TextareaInput name="neckPhysical" label="Cuello" {...fieldProps} />
      <TextareaInput name="thoraxPhysical" label="Tórax" {...fieldProps} />
      <TextareaInput name="heartPhysical" label="Corazón" {...fieldProps} />
      <TextareaInput name="abdomenPhysical" label="Abdomen" {...fieldProps} />
      <TextareaInput
        name="extremitiesPhysical"
        label="Extremidades"
        {...fieldProps}
      />
      <TextareaInput name="skinPhysical" label="Piel" {...fieldProps} />
      <h2>***PARACLÍNICOS EXTRAINSTITUCIONALES</h2>
      <TextareaInput name="otherTests" label="" {...fieldProps} />
      <h2>***ANÁLISIS</h2>
      <TextareaInput name="analysis" label="" {...fieldProps} />
      <h2>***IMPRESIÓN DIAGNÓSTICA</h2>
      <TextareaInput name="diagnostics" label="" {...fieldProps} />
      <h2>***PLAN</h2>
      <h4>*****ESTANCIA*</h4>
      <TextareaInput name="stay" label="" {...fieldProps} />
      <h4>*****OXIGENO*</h4>
      <TextareaInput name="oxygen" label="" {...fieldProps} />
      <h4>*****DIETA*</h4>
      <TextareaInput name="diet" label="" {...fieldProps} />
      <h4>*****LEVS*</h4>
      <TextareaInput name="levs" label="" {...fieldProps} />
      <h4>*****TRATAMIENTO*</h4>
      <TextareaInput name="drugs" label="" {...fieldProps} />
      <h4>*****SOLICITAR*</h4>
      <TextareaInput name="test" label="PARACLINICOS" {...fieldProps} />
      <TextareaInput name="images" label="IMÁGENES" {...fieldProps} />
      <TextareaInput name="consult" label="INTERCONSULTAS" {...fieldProps} />
      <h4>*****PENDIENTES*</h4>
      <TextareaInput name="pending" label="" {...fieldProps} />
    </Grid>
  );
}

export default EmergencyForm;
