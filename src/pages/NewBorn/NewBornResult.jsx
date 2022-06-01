import React, { useRef } from "react";
import CopyButton from "../../components/shared/CopyButton";

function NewBornResult({ values }) {
  const NBresultRef = useRef();
  const isPremature = values.numberField < 37;
  const isPostTerm = values.numberField >= 40;
  const term = isPremature ? "PRETERMINO" : "A TERMINO";

  return (
    <>
      <CopyButton resultRef={NBresultRef} />
      <div ref={NBresultRef}>
        <h1>***NOTA DE ATENCIÓN AL RECIÉN NACIDO***</h1>
        <br />
        <h2>HIJO DE {values.momName}</h2>
        <h3>DOCUMENTO MATERNO: {values.momId}</h3>
        <br />
        <h2>***ADAPTACIÓN NEONATAL</h2>
        <p style={{ fontSize: "0.5rem" }}>
          BAJO CUMPLIMIENTO ESTRICTO DE LOS PROTOCOLOS DE BIOSEGURIDAD
          ESTABLECIDOS PARA LA PREVENCIÓN DE LA INFECCIÓN POR COVID 19: LAVADO E
          HIGIENIZACION DE MANOS, AISLAMIENTO ESTANDAR, UTILIZACION ADECUADA DE
          LOS ELEMENTOS DE PROTECCIÓN PERSONAL (GAFAS, VISOR, N-95, OVEROL, BATA
          ANTIFLUIDO, POLAINAS, GORRO, GUANTES) DE ACUERDO A LOS LINEAMIENTOS DE
          MINISTERIO DE PROTECCIÓN SOCIAL, OMS, OPS Y PROTOCOLOS
          INSTITUCIONALES, SE LE REALIZA ATENCIÓN AL RECIEN NACIDO.
        </p>
        <br />
        <p>
          <strong>FECHA DE NACIMIENTO:</strong> {formatDate(values.dateOfBirth)}{" "}
          {values.timeOfBirth}
        </p>
        <p>
          RECIBO RECIÉN NACIDO DE MANOS DE GINECÓLOGO, DE SEXO{" "}
          <strong>{values.gender}</strong> DE{" "}
          <strong>{values.weeksBallard}</strong> SEMANAS POR BALLARD, PRODUCTO
          DE MADRE DE <strong> {values.momAge}</strong> AÑOS
          <strong>
            G{values.gestaNumber} P{values.paraNumber} C{values.cesareaNumber} A
            {values.abortionNumber} E{values.ectopicNumber} V{values.vivoNumber}
          </strong>
          , GRUPO SANGUINEO <strong>{values.hemoGroup}</strong>,{" "}
          {values.perfilInfeccioso}. <strong>{values.prenatalControl}</strong>{" "}
          CONTROLES PRENATALES. NACE POR{" "}
          <strong>
            {values.birthBy} {values.surgeryIndication}
          </strong>
          . {values.amnioLiq} APGAR AL MINUTO{" "}
          <strong>{values.apgar1}/10</strong> A LOS 5 MIN DE{" "}
          <strong>{values.apgar5}/10</strong> Y A LOS 10 MIN DE{" "}
          <strong>{values.apgar10}/10.</strong> PESO:{" "}
          <strong>{values.weightAtBirth}</strong>GRAMOS. TALLA:{" "}
          <strong>{values.heightAtBirth}</strong> CM. PERÍMETRO CEFALICO:{" "}
          <strong>{values.headAtBirth}</strong> CM. PERÍMETRO TORÁCICO:{" "}
          <strong>{values.thoraxAtBirth}</strong> CM. PERÍMETRO ABDOMINAL:{" "}
          <strong>{values.abdomenAtBirth}</strong> CM.
        </p>
        <br />
        <h2>***ANTECEDENTES PERSONALES MATERNOS</h2>
        <p> {values.antecedentesMaternos}</p>
        <br />
        <p> {values.malformacionesApgar}</p>
        {values.UciOrMaterno === "MATERNO" ? (
          <p>SE INDICA TRASLADO A LADO MATERNO</p>
        ) : (
          <p>{values.estanciaUCI}</p>
        )}
        <br />
        <h2>DIAGNÓSTICOS</h2>
        <p>
          -RECIÉN NACIDO {values.gender} {term} DE {values.weeksBallard} SEMANAS
          POR BALLARD
        </p>
        {values.UciOrMaterno === "UCI" && <p>{values.dxUCI}</p>}
        <br />
        <h2>PLAN</h2>
        {values.UciOrMaterno === "MATERNO" ? (
          <p>{values.planMaterno}</p>
        ) : (
          <p>{values.planUCI}</p>
        )}
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

export default NewBornResult;
