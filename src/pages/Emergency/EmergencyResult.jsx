import React, { useRef } from "react";
import CopyButton from "../../components/shared/CopyButton";

function EmergencyResult({ values }) {
  const eResultRef = useRef();
  return (
    <>
      <CopyButton resultRef={eResultRef} />
      <div ref={eResultRef}>
        <h1>***Valoración inicial servicio de urgencias***</h1>
        <h3>{values.patientName}</h3>
        <h3>{values.patientAge} años</h3>
        <h3>Cama {values.patientBed}</h3>
        <br />
        <h2>MOTIVO DE CONSULTA</h2>
        {values.consult == "dolor" && <p> dolor {values.painPlace}</p>}
        {values.consult == "trauma" && (
          <p>
            trauma <strong>{values.traumaType}</strong> en{" "}
            <strong>{values.traumaPlace}</strong> con{" "}
            <strong>{values.traumaObject}</strong>
          </p>
        )}
        {values.consult == "otro" && (
          <p>
            <strong>{values.mainComplaint}</strong>
          </p>
        )}
        <h2>ENFERMEDAD ACTUAL</h2>
        <p>
          {" "}
          {values.consult == "dolor" && (
            <p>
              Paciente <strong>{values.gender}</strong> de{" "}
              <strong>{values.patientAge}</strong> años de edad quien consulta
              por cuadro clínico de <strong>{values.evolutionHours}</strong>{" "}
              horas de evolución consistente en dolor{" "}
              <strong>
                {values.painPlace}, {values.painPlaceSpecific}
              </strong>{" "}
              tipo <strong>{values.painType}</strong> de intensidad{" "}
              <strong>{values.painScale}</strong>/10 de aparición{" "}
              <strong>{values.painApparition}</strong>{" "}
              <strong>{values.painActivity}</strong>
              <strong>{values.painConcomitant}</strong>, automedica con{" "}
              <strong>{values.painMeds}</strong>{" "}
              <strong>{values.painBetter}</strong>. Antecedentes de importancia,{" "}
              <strong>{values.pathologicalAnt}</strong>. Motivo por el cual
              consulta.
            </p>
          )}
        </p>
        <p>
          {" "}
          {values.consult == "trauma" && (
            <p>
              Paciente <strong>{values.gender}</strong> de{" "}
              <strong>{values.patientAge}</strong> años de edad quien consulta
              por cuadro clínico de <strong>{values.evolutionHours}</strong>{" "}
              horas de evolución consistente en trauma{" "}
              <strong>{values.traumaType}</strong> con{" "}
              <strong>{values.traumaObject}</strong> a nivel de{" "}
              <strong>{values.traumaPlace}</strong> al{" "}
              <strong>{values.traumaActivity}</strong>, automedica con{" "}
              <strong>{values.painMeds}</strong>{" "}
              <strong>{values.painBetter}</strong>. Antecedentes de importancia,{" "}
              <strong>{values.pathologicalAnt}</strong>. Motivo por el cual
              consulta.
            </p>
          )}
          {values.consult == "otro" && (
            <p>
              Paciente <strong>{values.gender}</strong> de{" "}
              <strong>{values.patientAge}</strong> años de edad quien consulta
              por cuadro clínico de <strong>{values.evolutionHours}</strong>{" "}
              horas de evolución consistente en{" "}
              <strong>{values.actualDisease}</strong> , automedica con{" "}
              <strong>{values.painMeds}</strong>{" "}
              <strong>{values.painBetter}</strong>. Antecedentes de importancia,{" "}
              <strong>{values.pathologicalAnt}</strong>. Motivo por el cual
              consulta.
            </p>
          )}
        </p>
        <br />

        <h2>ANTECEDENTES</h2>
        <br />

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
          <strong>ABDOMEN</strong>: {values.abdomenPhysical}
        </p>
        <p>
          <strong>EXTREMIDADES</strong>: {values.extremitiesPhysical}
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
    </>
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
