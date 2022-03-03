import React from "react";

function AdmissionResult({ values }) {
  const isPremature = values.numberField < 37;
  const isPostTerm = values.numberField >= 40;
  const term = isPremature ? "PRETERMINO" : "A TERMINO";
  const planFields = ["oxygen", "diet", "liquid", "drugs", "nurse"];
  const planFieldsSS = ["test", "images", "consult"];

  return (
    <div>
      <h1>
        {" "}
        NOTA DE INGRESO A UNIDAD DE CUIDADOS {values.careType}S NEONATALES
      </h1>
      <h2>HIJO DE {values.kidOf}</h2>
      <h3>DOCUMENTO MATERNO: {values.idMom}</h3>
      <h2>MOTIVO DE CONSULTA</h2>
      <p>
        {" "}
        REMITIDO DE {values.placeofRemission} POR {values.consultMotive}{" "}
      </p>
      <h2>ENFERMEDAD ACTUAL</h2> <p> {values.actualDisease}</p>
      <h2>ANTECEDENTES PERINATALES</h2>
      <p style={{ fontSize: "0.5rem" }}>
        {" "}
        AQUÍ ES DONDE QUIERO QUE VAYA LA ADAPTACIÓN DE ATENCIONES{" "}
      </p>
      <h2> EXAMEN FÍSICO </h2>
      <p>
        {" "}
        SIGNOS VITALES FC:<strong> {values.cardiacFreq} </strong>LPM – FR:{" "}
        <strong>{values.respiratoryFreq}</strong> RPM – SAT02:{" "}
        <strong>{values.saturation} </strong>% - T:{" "}
        <strong>{values.temperture}°C</strong>{" "}
      </p>
      <p>{values.physicalExam}</p>
      <h2>DIAGNÓSTICOS</h2>
      <p>
        -RECIÉN NACIDO {term} {values.babyGender} DE {values.numberField}{" "}
        SEMANAS POR BALLARD
      </p>
      <p>-PESO Y TALLA ADECUADOS PARA SU EDAD GESTACIONAL</p>
      <p>{values.diagnosis}</p>
      <h2>ANÁLISIS </h2>
      <p>
        RECIBO PACIENTE {term} EN REGULARES CONDICIONES GENERALES. SE ENCUENTRA
        PACIENTE ACTIVO REACTIVO, SIN DÉFICIT APARENTE, NI CRISIS NEONATALES,{" "}
        {values.hasOxygen ? (
          <strong> RECIBIENDO OXÍGENO SUPLEMENTARIO DE BAJO FLUJO </strong>
        ) : (
          <strong>TOLERANDO OXÍGENO AMBIENTE</strong>
        )}{" "}
        , PATRÓN RESPIRATORIO ADECUADO, NORMOSATURADO, MANTIENE SIGNOS VITALES
        ESTABLES, NO SOPORTES, BIEN PERFUNDIDO,{" "}
        {values.oralIntake ? (
          <strong> AYUNADO</strong>
        ) : values.foley ? (
          <strong> TOLERANDO APORTE ENTERAL POR SONDA </strong>
        ) : (
          <strong> TOLERANDO APORTE ENTERAL POR SUCCIÓN </strong>
        )}
        , HIDRATADO, NORMOGLICÉMICO, NO EDEMAS, {values.paraclinicAnalysis} SE
        INGRESA LA UNIDAD PARA VIGILANCIA ESTRICTA Y MANEJO, PRONÓSTICO SUJETO A
        EVOLUCIÓN CLÍNICA. SE EXPLICA A LOS PADRES QUIENES REFIEREN ENTENDER Y
        ACEPTAR.
      </p>
      <h2> PLAN </h2>
      <p>-HOSPITALIZAR EN CUIDADOS {values.careType}S NEONATALES </p>
      {planFields.map((field) => {
        return (
          <React.Fragment key={field}>
            {values[field] && <p>-{values[field]}</p>}
          </React.Fragment>
        );
      })}
      {planFieldsSS.map((field) => {
        return (
          <React.Fragment key={field}>
            {values[field] && <p>-{values[field]}</p>}
          </React.Fragment>
        );
      })}
      {values.pending && (
        <>
          <h3>*****PENDIENTES******</h3>
          <p>-{values.pending}</p>
        </>
      )}
    </div>
  );
}
export default AdmissionResult;
