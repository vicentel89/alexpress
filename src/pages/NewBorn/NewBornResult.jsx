import React from "react";

function NewBornResult({ values }) {
  const isPremature = values.numberField < 37;
  const isPostTerm = values.numberField >= 40;
  const term = isPremature ? "PRETERMINO" : "A TERMINO";

  return (
    <div>
      <h1>NOTA DE ATENCIÓN AL RECIÉN NACIDO</h1>
      <h2>HIJO DE {values.textField}</h2>
      <h3>DOCUMENTO MATERNO: {values.textField2}</h3>
      <h2>ANTECEDENTES PERSONALES MATERNOS</h2>
      <p> {values.antecedentesMaternos}</p>
      <h2>ADAPTACIÓN NEONATAL</h2>
      <p style={{ fontSize: "0.5rem" }}>
        BAJO CUMPLIMIENTO ESTRICTO DE LOS PROTOCOLOS DE BIOSEGURIDAD
        ESTABLECIDOS PARA LA PREVENCIÓN DE LA INFECCIÓN POR COVID 19: LAVADO E
        HIGIENIZACION DE MANOS, AISLAMIENTO ESTANDAR, UTILIZACION ADECUADA DE
        LOS ELEMENTOS DE PROTECCIÓN PERSONAL (GAFAS, VISOR, N-95, OVEROL, BATA
        ANTIFLUIDO, POLAINAS, GORRO, GUANTES) DE ACUERDO A LOS LINEAMIENTOS DE
        MINISTERIO DE PROTECCIÓN SOCIAL, OMS, OPS Y PROTOCOLOS INSTITUCIONALES,
        SE LE REALIZA ATENCIÓN AL RECIEN NACIDO.
      </p>
      <br />
      <p>
        <strong>FECHA DE NACIMIENTO:</strong> {formatDate(values.dob)}{" "}
        {values.ToB}
      </p>
      <p>
        RECIBO RECIÉN NACIDO DE MANOS DE GINECÓLOGO, DE SEXO{" "}
        <strong>{values.radioField}</strong> DE{" "}
        <strong>{values.numberField}</strong> SEMANAS POR BALLARD, PRODUCTO DE
        MADRE <strong>{values.numberField2}</strong> AÑOS
        <strong>
          G{values.numberFieldG}P{values.numberFieldP}C{values.numberFieldC}V
          {values.numberFieldV}
        </strong>
        , GRUPO SANGUINEO <strong>{values.textFieldGS}</strong>,{" "}
        {values.perfilInfeccioso}. <strong>{values.numberFieldCPN}</strong>{" "}
        CONTROLES PRENATALES. NACE POR{" "}
        <strong>
          {values.radioField2} {values.textFieldIC}
        </strong>
        . {values.textFieldAmnioLiq} APGAR AL MINUTO{" "}
        <strong>{values.numberFieldA1}/10</strong> A LOS 5 MIN DE{" "}
        <strong>{values.numberFieldA5}/10</strong> Y A LOS 10 MIN DE{" "}
        <strong>{values.numberFieldA10}/10.</strong> PESO:{" "}
        <strong>{values.numberFieldPESO}</strong>GRAMOS. TALLA:{" "}
        <strong>{values.numberFieldTALLA}</strong> CM. PC:{" "}
        <strong>{values.numberFieldPC}</strong> CM. PT:{" "}
        <strong>{values.numberFieldPT}</strong> CM. PA:{" "}
        <strong>{values.numberFieldPA}</strong> CM.
      </p>
      <br />
      <p> {values.malformacionesApgar}</p>
      {values.UciOrMaterno === "MATERNO" ? (
        <p>SE INDICA TRASLADO A LADO MATERNO</p>
      ) : (
        <p>{values.estanciaUCI}</p>
      )}
      <h2>DIAGNÓSTICOS</h2>
      <p>
        -RECIÉN NACIDO {term} {values.radioField} DE {values.numberField}{" "}
        SEMANAS POR BALLARD
      </p>
      <p>-PESO Y TALLA ADECUADOS PARA SU EDAD GESTACIONAL</p>
      {values.UciOrMaterno === "UCI" && <p>{values.dxUCI}</p>}
      <h2>PLAN</h2>
      {values.UciOrMaterno === "MATERNO" ? (
        <p>{values.planMaterno}</p>
      ) : (
        <p>{values.planUCI}</p>
      )}
    </div>
  );
}

const formatDate = (dob) => {
  let date = dob.toLocaleString("en-US", {
    timeZone: "America/Bogota",
    day: "2-digit",
  });
  return date.split("-").reverse().join("/");
};

export default NewBornResult;
