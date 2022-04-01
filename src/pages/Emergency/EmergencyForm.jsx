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
  Id: "",
  dateOfBirth: "",
  adress: "",
  neighboorhood: "",
  nationality: "COLOMBIANO",
  phone: "",
  gender: "",
  civilState: "",
  religion: "",
  ocupation: "",
  studies: "",
  natural: "",
  resident: "",
  procedent: "",
  mainComplaint: "",
  actualDisease:
    "PACIENTE M/F DE X AÑOS DE EDAD, QUE CONSULTA POR CUADRO CLÍNICO DE _TIEMPO DE EVOLUCIÓN, CARACTERIZADO POR APARICIÓN, LOCALIZACIÓN, TIPO, INTENSIDAD, CONCOMITANCIAS, IRRADIACIÓN, ALIVIO",
  personalAnt: "NIEGA",
  pathologicalAnt: "NIEGA",
  pharmacologicAnt: "NIEGA",
  hospitalizationAnt: "NIEGA",
  surgicalAnt: "NIEGA",
  traumaticAnt: "NIEGA",
  alergicAnt: "NIEGA",
  toxicAnt: "NIEGA",
  transfusionAnt: "NIEGA",
  vaccinationAnt: "NIEGA",
  bloodType: "",
  familyAnt: "NIEGA",
  otherAnt:
    "Personales no patológicos ginecoobstétricos: G, P, A, C, M, V, E, Compañeros sexuales en los últimos 6 meses, menarquia, FUM, ciclos regulares, duración de ciclos, inicio de vida sexual, inicio de vida obstétrica, planificación, última citología, ETS, EPI, menopausia",
  headPhysical:
    "NORMOCÉFALO, DOLIOCÉFALO (EJE LONGITUDINAL MÁS LARGO QUE EL TRANSVERSAL), BRAQUICÉFALO (EJE LONGITUDINAL MÁS CORTO QUE EL TRANSVERSAL), MESATICÉFALO (EJES IGUALES, CRANEOSINOSTOSIS (CIERRE PRECOZ DE LAS SUTURAS), SURCOS FRONTALES SIMÉTRICOS, PUPILAS ISOCÓRICAS NORMORREACTIVAS A LA LUZ, SIN EVIDENCIA DE NISTAGMO, CONJUNTIVAS NORMOCRÓMICAS, ESCLERAS ANICTÉRICAS, BUENA IMPLANTACIÓN DE CEJAS Y PESTAÑAS NARINAS DE CONFORMACIÓN NORMAL, MUCOSA ORAL HÚMEDA, HIDRATADA, OROFARINGE SIN ALTERACIONES.NARIZ: SINUSITIS SI DUELE AL PRESIONAR, AL INCLINARSE HACIA DELANTE, SI LA TRANSILUMINACIÓN ES POSITIVA. SINUSITIS MAXILAR: DOLOR RETROORBITAL, CERCA DEL 2DO PREMOLAR Y 1ER Y 2NDO MOLARES. SINUSITIS FRONTAL: ARCADAS SUPERCILIARES, SINUSITIS ETMOIDAL: PERIORBITAL, SINUSITIS ESFENOIDAL: OCCIPITAL. GOTEO NASAL POSTERIOR. ALIENTO OLOR A MANZANA: CETOACIDOSIS DIABÉTICA. ALIENTO AMONIACAL: UREMIA, ALIENTO PÚTRIDO: ABSCESO PULMONAR.",
  neckPhysical:
    "MÓVIL, NO DOLOROSO A LA PALPACIÓN NI MOVILIZACIÓN, NO SE PALPAN MASAS NI ADENOMEGALIAS, TIROIDES NO VISIBLE NI PALPABLE, PULSOS CAROTÍDEOS SIMÉTRICOS, NO INGURGITACIÓN YUGULAR",
  thoraxPhysical:
    "SIMÉTRICO, EXPANSIBLE, SIN USO DE MUSCULATURA ACCESORIA, NO DOLOROSO A LA PALPACIÓN PULMONES CON ADECUADA ENTRADA DE AIRE BILATERAL, RUIDOS RESPIRATORIOS BILATERALES SIN AGREGADOS PATOLÓGICOS. VIBRACIONES VOCALES AUSENTES/PRESENTES/AUMENTADAS/DISMINUIDAS, FRÉMITOS AUSENTES/PRESENTES/AUMENTADOS/ DISMINUIDOS, BRONCOFONÍA, PECTORILOQUIA ÁFONA, PERCUSIÓN SIN ALTERACIONES",
  heartPhysical:
    "RUIDOS CARDÍACOS RÍTMICOS, DE BUEN TONO E INTENSIDAD, SIN SOPLOS NI AGREGADOS, LLENADO CAPILAR DISTAL INMEDIATO",
  pulsePhysical:
    "CAROTÍDEO, HUMERAL, RADIAL, FEMORAL, POPLÍTEO, TIBIAL POSTERIOR, PEDIO",
  urinaryPhysical: "PUÑOPERCUSIÓN BILATERAL NEGATIVA",
  abdomenPhysical:
    "NO DISTENDIDO, PERISTALSIS POSITIVA, BLANDO, DEPRESIBLE, NO DOLOROSO A LA PALPACIÓN, SIN EVIDENCIA DE SIGNOS DE IRRITACIÓN PERITONEAL, NO SE PALPAN MASAS.",
  skinPhysical:
    "ÍNTEGRA SIN LESIONES APARENTES, NO SE EVIDENCIA TINTE ICTÉRICO",
  othertests: "",
  analysis: "",
  diagnostics: "",
  stay: "",
  oxygen: "",
  diet: "",
  levs: "",
  test: "SS",
  images: "SS",
  consult: "SS VALORACIÓN POR",
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
      <TextfieldInput name="Id" label="IDENTIFICACIÓN" {...fieldProps} />
      <DateInput
        name="dateOfBirth"
        label="FECHA DE NACIMIENTO: "
        {...fieldProps}
      />
      <TextfieldInput name="neighboorhood" label="BARRIO " {...fieldProps} />
      <TextfieldInput
        name="nationality"
        label="NACIONALIDAD "
        {...fieldProps}
      />
      <NumberInput name="phone" label="TELEFONO" {...fieldProps} />
      <RadioInput
        name="gender"
        label="GÉNERO"
        options={["MASCULINO", "FEMENINO"]}
        {...fieldProps}
      />
      <TextfieldInput name="civilState" label="ESTADO CIVIL " {...fieldProps} />
      <TextfieldInput name="religion" label="RELIGION " {...fieldProps} />
      <TextfieldInput name="ocupation" label="OCUPACION " {...fieldProps} />
      <TextfieldInput name="studies" label="ESCOLARIDAD" {...fieldProps} />
      <TextfieldInput name="natural" label="NATURAL " {...fieldProps} />
      <TextfieldInput name="resident" label="RESIDENTE " {...fieldProps} />
      <TextfieldInput name="procedent" label="PROCEDENTE " {...fieldProps} />
      <h2>***MOTIVO DE CONSULTA</h2>
      <TextareaInput
        name="mainComplaint"
        label="MOTIVO DE CONSULTA"
        {...fieldProps}
      />
      <h2>***ENFERMEDAD ACTUAL</h2>
      <TextareaInput
        name="actualDisease"
        label="ENFERMEDAD ACTUAL"
        {...fieldProps}
      />
      <h2>***ANTECEDENTES</h2>
      <TextfieldInput name="personalAnt" label="PERSONALES " {...fieldProps} />
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
      <TextareaInput name="headPhysical" label="CABEZA" {...fieldProps} />
      <TextareaInput name="neckPhysical" label="CUELLO" {...fieldProps} />
      <TextareaInput name="thoraxPhysical" label="TÓRAX" {...fieldProps} />
      <TextareaInput name="heartPhysical" label="CORAZÓN" {...fieldProps} />
      <TextareaInput name="pulsePhysical" label="PULSOS" {...fieldProps} />
      <TextareaInput name="abdomenPhysical" label="ABDOMEN" {...fieldProps} />
      <TextareaInput name="skinPhysical" label="PIEL" {...fieldProps} />

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
