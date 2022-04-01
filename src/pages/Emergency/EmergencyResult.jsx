import React from "react";

function EmergencyResult({ values }) {
  const isPremature = values.numberField < 37;
  const isPostTerm = values.numberField >= 40;
  const term = isPremature ? "PRETERMINO" : "A TERMINO";

  return (
    <div>
      <h1>***ATENCIÓN SERVICIO DE URGENCIAS***</h1>
      <h2>DATOS IDENTIFICACIÓN</h2>
      <h3>NOMBRE:{values.patientName}</h3>
      <p>
        <strong>DOCUMENTO</strong>: {values.Id}
      </p>
      <p>
        <strong>FECHA DE NACIMIENTO</strong>:
      </p>{" "}
      {formatDate(values.dateOfBirth)}
      <br />
      <p>DIRECCIÓN:{values.adress} </p>
      <p>BARRIO: {values.neighboorhood}</p>
      <p>NACIONALIDAD: {values.nationality}</p>
      <p>TELÉFONO:{values.phone} </p>
      <p>GÉNERO: {values.gender}</p>
      <p>ESTADO CIVIL:{values.civilState} </p>
      <p>RELIGIÓN: {values.religion}</p>
      <p>OCUPACIÓN: {values.ocupation}</p>
      <p>ESCOLARIDAD:{values.studies} </p>
      <p>NATURAL:{values.natural} </p>
      <p>RESIDENTE:{values.resident} </p>
      <p>PROCEDENTE: {values.procedent}</p>
      <br />
      <h2>MOTIVO DE CONSULTA</h2>
      <p> {values.mainComplaint}</p>
      <br />
      <h2>ENFERMEDAD ACTUAL</h2>
      <p>{values.actualDisease}</p>
      <br />
      <h2>ANTECEDENTES</h2>
      <br />
      <p>
        <strong>PERSONALES</strong>: {values.personalAnt}
      </p>
      <p>
        <strong>PATOLÓGICOS</strong>: {values.pathologicalAnt}
      </p>
      <p>
        <strong>HOSPITALIZACIONES</strong>: {values.hospitalizationAnt}
      </p>
      <p>
        <strong>QUIRÚRGICOS</strong>: {values.surgicalAnt}
      </p>
      <p>
        <strong>TRAUMÁTICOS</strong>: {values.traumaticAnt}
      </p>
      <p>
        <strong>ALÉRGICOS</strong>: {values.alergicAnt}
      </p>
      <p>
        <strong>TÓXICOS</strong>: {values.toxicAnt}
      </p>
      <p>
        <strong>TRANSFUSIONALES</strong>: {values.transfusionAnt}
      </p>
      <p>
        <strong>VACUNAS</strong>: {values.vaccinationAnt}
      </p>
      <p>
        <strong>HEMOCLASIFICACIÓN</strong>: {values.bloodType}
      </p>
      <p>
        <strong>FAMILIARES</strong>: {values.familyAnt}
      </p>
      <p>
        NO <strong>PATOLÓGICOS</strong>: {values.otherAnt}
      </p>
      <br />
      <h2>EXAMEN FÍSICO</h2>
      <br />
      <p>
        <strong>CABEZA</strong>: {values.headPhysical}
      </p>
      <p>
        <strong>CUELLO</strong>: {values.neckPhysical}
      </p>
      <p>
        <strong>TÓRAX</strong>: {values.thoraxPhysical}
      </p>
      <p>
        <strong>CORAZÓN</strong>: {values.heartPhysical}
      </p>
      <p>
        <strong>PULSOS</strong>: {values.pulsePhysical}
      </p>
      <p>
        <strong>ABDOMEN</strong>: {values.abdomenPhysical}
      </p>
      <p>
        <strong>PIEL Y FANERAS</strong>: {values.skinPhysical}
      </p>
      <br />
      <h2>PARACLÍNICOS EXTRAINSTITUCIONALES</h2>
      <p>{values.othertests}</p>
      <br />
      <h2>ANÁLISIS</h2>
      <p>{values.analysis}</p>
      <br />
      <h2>IMPRESIÓN DIAGNÓSTICA</h2>
      <p>{values.diagnostics}</p>
      <br />
      <h2>PLAN</h2>
      <p>{values.stay}</p>
      <p>{values.oxygen}</p>
      <p>{values.diet}</p>
      <p>{values.levs}</p>
      <p>{values.test}</p>
      <p>{values.images}</p>
      <p>{values.consult}</p>
      <h4>***PENDIENTES*</h4>
      <p>{values.pending}</p>
    </div>
  );
}

const formatDate = (dateOfBirth) => {
  let date = dateOfBirth.toLocaleString("en-US", {
    timeZone: "America/Bogota",
    day: "2-digit",
  });
  return date.split("-").reverse().join("/");
};

export default EmergencyResult;
