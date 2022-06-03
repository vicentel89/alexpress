import { endOfDecade } from "date-fns";
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
            {values.gestaNumber && ` G${values.gestaNumber}`}
            {values.abortionNumber && ` A${values.abortionNumber}`}
            {values.ectopicNumber && ` E${values.ectopicNumber}`}
            {values.obitosNumber && ` O${values.obitosNumber}`}
            {values.paraNumber && ` P${values.paraNumber}`}
            {values.cesareaNumber && ` C${values.cesareaNumber}`}
            {values.vivoNumber && ` V${values.vivoNumber}`}
          </strong>
          , GRUPO SANGUINEO <strong>{values.hemoGroup}</strong>,{" "}
          {values.perfilInfeccioso}. <strong>{values.prenatalControl}</strong>{" "}
          CONTROLES PRENATALES. NACE POR{" "}
          <strong>
            {values.birthBy}{" "}
            {values.birthBy === "CESÁREA" && values.surgeryIndication}
          </strong>
          . {values.amnioLiq} APGAR AL MINUTO{" "}
          <strong>{values.apgar1}/10</strong> A LOS 5 MIN DE{" "}
          <strong>{values.apgar5}/10</strong> Y A LOS 10 MIN DE{" "}
          <strong>{values.apgar10}/10.</strong> PESO:{" "}
          <strong>{values.weightAtBirth}</strong>GRAMOS. TALLA:{" "}
          <strong>{values.heightAtBirth}</strong> CM. PERÍMETRO CEFÁLICO:{" "}
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
        <PercentileAnalysis
          head={values.percentileHeadAtBirth}
          weightPer={values.percentileWeightAtBirth}
          weight={values.weightAtBirth}
          height={values.percentileHeightAtBirth}
        />
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

const PercentileAnalysis = ({ head, height, weightPer, weight }) => {
  const isRCIU = [head, height, weightPer].reduce(
    (prev, cur) => prev && cur < 10,
    true
  );
  const isRightHead = head >= 3 && head <= 97;
  const isRightHeight = height >= 3 && height <= 97;
  const isRightWeightPer = weightPer >= 10 && weightPer <= 90;
  const hasMacrocephaly = head > 97;
  const hasMicrocephaly = head < 3;
  const isBig = weightPer > 90;
  const isVeryLowWeight = weight < 1500;
  const isLowWeight = weight < 2500 && !isVeryLowWeight;
  const isLittle = weightPer < 10;
  const isAdequate =
    !isRCIU &&
    !isBig &&
    !isLittle &&
    !hasMicrocephaly &&
    !hasMacrocephaly &&
    isRightHead &&
    isRightHeight &&
    isRightWeightPer;

  return (
    <>
      {isRCIU && (
        <>
          <p>-RESTRICCIÓN DEL CRECIMIENTO INTRAUTERINO</p>
          <p>--PESO, TALLA Y PERÍMETRO CEFÁLICO MENORES AL PERCENTIL 10</p>
        </>
      )}
      {isAdequate && (
        <>
          <p>
            -PESO, TALLA Y PERÍMETRO CEFÁLICO ADECUADOS PARA LA EDAD GESTACIONAL
          </p>
        </>
      )}
      {isLowWeight && <p>-BAJO PESO AL NACER</p>}
      {isVeryLowWeight && <p>-MUY BAJO PESO AL NACER</p>}
      {isBig && isRightHead && (
        <>
          <p>-GRANDE PARA LA EDAD GESTACIONAL</p>
          <p>--PESO EN PERCENTIL {weightPer}</p>
          <p>-TALLA Y PERÍMETRO CEFÁLICO ADECUADOS PARA LA EDAD GESTACIONAL</p>
        </>
      )}
      {isLittle && isRightHead && (
        <>
          <p>-PEQUEÑO PARA LA EDAD GESTACIONAL</p>
          <p>--PESO EN PERCENTIL {weightPer}</p>
          <p>-TALLA Y PERÍMETRO CEFÁLICO ADECUADOS PARA LA EDAD GESTACIONAL</p>
        </>
      )}
      {hasMicrocephaly && (
        <>
          <p>-MICROCEFALIA</p>
          <p>-PERÍMETRO CEFÁLICO EN PERCENTIL {head}</p>
        </>
      )}
      {hasMacrocephaly && (
        <>
          <p>-MACROCEFALIA</p>
          <p>-PERÍMETRO CEFÁLICO EN PERCENTIL {head}</p>
        </>
      )}

      {/*            
      {isRCIU && (
        <>
          <p>-RESTRICCION CEL CRECIMIENTO INTRAUTERINO</p>
          <p>--PESO, TALLA Y PERÍMETRO CEFÁLICO MENORES AL PERCENTIL 10</p>
        </>
      )}

      {hasMacrocephaly && isRightHeight && isRightHead && (
        <>
          <p>
            -PESO (P{weightPer}) Y TALLA (P{height}) ADECUADOS PARA LA EDAD
            GESTACIONAL
          </p>
          <strong>-MACROCEFALIA</strong>
          <p>--PERÍMETRO CEFÁLICO EN P{head}</p>
        </>
      )}
      {hasMicrocephaly && (
        <>
          <p>
            -PESO (P{weightPer}) Y TALLA (P{height}) ADECUADOS PARA LA EDAD
            GESTACIONAL
          </p>
          <strong>-MICROCEFALIA </strong>
          <p>--PERÍMETRO CEFÁLICO EN P{head}</p>
        </>
      )}
      {isLittle && (
        <>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
          <strong>-PEQUEÑO PARA LA EDAD GESTACIONAL</strong>
          <p>--PESO EN P{weightPer}</p>
        </>
      )}
      {isBig && (
        <>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
          <strong>-GRANDE PARA LA EDAD GESTACIONAL</strong>
          <p>--PESO EN P{weightPer}</p>
        </>
      )}
      {isLowWeight && (
        <>
          <strong>-BAJO PESO AL NACER {""}</strong>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {isVeryLowWeight && (
        <>
          <strong>-MUY BAJO PESO AL NACER {""}</strong>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {isAdequate && (
        <p>
          -PESO (P{weightPer}), TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head})
          ADECUADOS PARA LA EDAD GESTACIONAL
        </p>
      )} */}
      {/* {isRCIU && (
        <>
          <p>-RESTRICCION CEL CRECIMIENTO INTRAUTERINO</p>
          <p>--PESO, TALLA Y PERÍMETRO CEFÁLICO MENORES AL PERCENTIL 10</p>
        </>
      )}

      {hasMacrocephaly && isRightHeight && isRightHead && (
        <>
          <p>
            -PESO (P{weightPer}) Y TALLA (P{height}) ADECUADOS PARA LA EDAD
            GESTACIONAL
          </p>
          <strong>-MACROCEFALIA</strong>
          <p>--PERÍMETRO CEFÁLICO EN P{head}</p>
        </>
      )}
      {hasMicrocephaly && (
        <>
          <p>
            -PESO (P{weightPer}) Y TALLA (P{height}) ADECUADOS PARA LA EDAD
            GESTACIONAL
          </p>
          <strong>-MICROCEFALIA </strong>
          <p>--PERÍMETRO CEFÁLICO EN P{head}</p>
        </>
      )}
      {isLittle && (
        <>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
          <strong>-PEQUEÑO PARA LA EDAD GESTACIONAL</strong>
          <p>--PESO EN P{weightPer}</p>
        </>
      )}
      {isBig && (
        <>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
          <strong>-GRANDE PARA LA EDAD GESTACIONAL</strong>
          <p>--PESO EN P{weightPer}</p>
        </>
      )}
      {isLowWeight && (
        <>
          <strong>-BAJO PESO AL NACER {""}</strong>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {isVeryLowWeight && (
        <>
          <strong>-MUY BAJO PESO AL NACER {""}</strong>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {isAdequate && (
        <p>
          -PESO (P{weightPer}), TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head})
          ADECUADOS PARA LA EDAD GESTACIONAL
        </p>
      )} */}
    </>
  );
};
