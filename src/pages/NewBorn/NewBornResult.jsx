import { add, endOfDecade } from "date-fns";
import React, { useRef } from "react";
import CopyButton from "../../components/shared/CopyButton";

function NewBornResult({ values }) {
  const NBresultRef = useRef();
  const isPremature = values.numberField < 37;
  const term = isPremature ? "PRETERMINO" : "A TERMINO";

  const apgar1 = Apgar1(
    values.apgar1Appearance,
    values.apgar1Pulse,
    values.apgar1Grimace,
    values.apgar1Activity,
    values.apgar1Respiration
  );
  const apgar5 = Apgar5(
    values.apgar5Appearance,
    values.apgar5Pulse,
    values.apgar5Grimace,
    values.apgar5Activity,
    values.apgar5Respiration
  );
  const apgar10 = Apgar10(
    values.apgar10Appearance,
    values.apgar10Pulse,
    values.apgar10Grimace,
    values.apgar10Activity,
    values.apgar10Respiration
  );

  return (
    <>
      <CopyButton resultRef={NBresultRef} />
      <div ref={NBresultRef}>
        <h1>***NOTA DE ATENCIÓN AL RECIÉN NACIDO***</h1>
        <br />
        <strong>FECHA DE NACIMIENTO:</strong> {formatDate(values.dateOfBirth)}{" "}
        {values.timeOfBirth}H<h2>HIJO DE {values.momName}</h2>
        <h3>DOCUMENTO MATERNO: {values.momId}</h3>
        <br />
        <h2>***ANTECEDENTES PERSONALES MATERNOS</h2>
        <p> {values.antecedentesMaternos}</p>
        <br />
        <h2>***ADAPTACIÓN NEONATAL</h2>
        <p style={{ fontSize: "0.5rem" }}>
          BAJO CUMPLIMIENTO ESTRICTO DE LOS PROTOCOLOS DE BIOSEGURIDAD
          ESTABLECIDOS PARA LA PREVENCIÓN DE LA INFECCIÓN POR COVID 19: LAVADO E
          HIGIENIZACIÓN DE MANOS, AISLAMIENTO ESTÁNDAR, UTILIZACIÓN ADECUADA DE
          LOS ELEMENTOS DE PROTECCIÓN PERSONAL (GAFAS, VISOR, N-95, OVEROL, BATA
          ANTIFLUIDO, POLAINAS, GORRO, GUANTES) DE ACUERDO A LOS LINEAMIENTOS DE
          MINISTERIO DE PROTECCIÓN SOCIAL, OMS, OPS Y PROTOCOLOS
          INSTITUCIONALES, SE LE REALIZA ATENCIÓN AL RECIÉN NACIDO.
        </p>
        <br />
        <p>
          <strong>FECHA DE NACIMIENTO:</strong> {formatDate(values.dateOfBirth)}{" "}
          {values.timeOfBirth}
        </p>
        <p>
          RECIÉN NACIDO DE SEXO <strong>{values.gender}</strong> DE{" "}
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
          , GRUPO SANGUÍNEO{" "}
          <strong>
            {values.hemoGroup}, {values.perfilInfeccioso}.{" "}
            {values.prenatalControl}
          </strong>{" "}
          CONTROLES PRENATALES. NACE POR{" "}
          <strong>
            {values.birthBy}
            {values.birthBy === "CESÁREA" && values.surgeryIndication}.{" "}
            {values.amnioLiq}
          </strong>{" "}
          SE OTORGA MINUTO DE ORO DURANTE EL CONTACTO PIEL A PIEL CON LA MADRE,
          SE PINZA CORDÓN Y SE CORTA. SE RECIBE DE MANOS DE GINECÓLOGO RECIÉN
          NACIDO <strong>{values.apgar1Appearance}</strong>, FRECUENCIA CARDÍACA{" "}
          <strong>{values.apgar1Pulse}</strong>, CON{" "}
          <strong>{values.apgar1Grimace}</strong>,{" "}
          <strong>
            {" "}
            {values.apgar1Respiration}, {values.apgar1Activity}
          </strong>
          ;{" "}
        </p>
        <br />
        <p>
          SE TRASLADA PACIENTE A CUNA DE CALOR RADIANTE, SE ESTIMULA Y SECA, SE
          ASPIRAN SECRECIONES CON PERILLA NASAL DE GOMA,{" "}
          <p> {values.malformacionesApgar}</p> SE CLAMPEA Y CORTA CORDÓN
          TRIVASCULAR (2 ARTERIAS Y UNA VENA), SE TOMAN MUESTRAS PARA{" "}
        </p>
        {values.gases ? (
          <strong>GASES DE CORDÓN, TSH NEONATAL Y HEMOCLASIFICACIÓN</strong>
        ) : (
          <p> TSH NEONATAL Y HEMOCLASIFICACIÓN,</p>
        )}
        SE APLICA VITAMINA K. SE VERIFICA PERMEABILIDAD DE ANO Y ESÓFAGO. SE
        TOMAN MEDIDAS ANTROPOMÉTRICAS:
        <p>
          PESO: <strong>{values.weightAtBirth}</strong> GRAMOS.
        </p>
        <p>
          TALLA:<strong>{values.heightAtBirth}</strong> CM.{" "}
        </p>
        <p>
          PERÍMETRO CEFÁLICO: <strong>{values.headAtBirth}</strong> CM.{" "}
        </p>
        <p>
          PERÍMETRO TORÁCICO:<strong>{values.thoraxAtBirth}</strong> CM.
        </p>
        <p>
          {" "}
          PERÍMETRO ABDOMINAL:<strong>{values.abdomenAtBirth}</strong> CM.
        </p>
        <p>
          APGAR AL MINUTO <strong> {apgar1}/10</strong>, A LOS 5 MIN DE
          <strong> {apgar5}/10</strong>, Y A LOS 10 MINUTOS DE
          <strong> {apgar10}/10.</strong> AL EXAMEN FÍSICO NO SE EVIDENCIAN
          MALFORMACIONES OSTENSIBLES, ORIFICIOS PERMEABLES,
        </p>{" "}
        {values.gases ? (
          <strong>
            SE RECIBEN RESULTADOS DE GASES DE CORDÓN PH:{values.ph}//PCO2:
            {values.pco2}//PO2:{values.po2}//HCO3:{values.hco3}//BE:{values.be}
            //NA:{values.na}//K:{values.k}//CA:{values.ca}//CL:{values.cl}//GLU:
            {values.glu}//LAC:{values.lac}
          </strong>
        ) : (
          <p>SATURACIÓN PRE Y POSTDUCTAL NORMALES.</p>
        )}
        {apgar5 >= 7 && " CON BUENA ADAPTACIÓN,"}
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
        {values.dxUCI}
        <br />
        <p>asfixia?</p>
        {values.gases ? (
          <p>
            903819 LABORATORIOS CREATIN QUINASA [FRACCION ME]
            <p>903821 LABORATORIOS CREATIN QUINASA TOTAL CK- CPK</p>
            <p>903856 LABORATORIOS NITROGENO UREICO (BUN)</p>
            <p>902045 LABORATORIOS TIEMPO DE PROTROMBINA (FT)</p>
            <p>902049 LABORATORIOS TIEMPO DE TROMBOPLASTINA PARCIAL (AFTT)</p>
            <p>
              903807 LABORATORIOS (TRANSAMINASA GLUTAMICO OXALACETICA O ASP,
            </p>
            <p>903866 LABORATORIOS TRANSAMINASA GLUTAMICO PIFQVICA O ALANINO</p>
            <p>903439 LABORATORIOS (TROPONINA T CUANTITATIVA</p>
            <p>903895 LABORATORIOS CREATININA EN SUERO U OTROS FLUIDOS</p>
            <p>903828 LABORATORIOS DESHIDROGENASA LACTICA [LDH]</p>
            <p>903810 LABORATORIOS CALCIO POR COLORIMETRIA</p>
            <p>
              903841 LABORATORIOS GLUCOSA EN SUERO LCR. U OTRO FLUIDO DIFERENT
            </p>
            <p>902210 LABORATORIOS HEMOGRAMA IV (HEMOGLOBINA HEMATOCRITO REC</p>
            <p>
              906914 LABORATORIOS PROTEINA C REACTIVA PRUEBA SEMICUANTITATIVA
            </p>
            <p>993503 PROCEDIMIENTOS (VACUNACION CONTRA HEPATITIS E</p>
            <p>993102 PROCEDIMIENTOS (VACUNACION CONTRA TUBERCULOSIS (BCG)</p>
            <p>
              903839 PROCEDIMIENTOS (GASES ARTERIALES (EN REPOSO O EN EJERCICIO)
            </p>
            <p>904903 LABORATORIOS HORMONA ESTIMULANTE DEL TIROIDES (TSH]</p>
            <p>asfixia perinatal severa 3 de</p>
            <p> -apgar 5 menorigual 5 </p>
            <p>-ph menor7 o be menorigual-16</p>
            <p> -sarnat ii o iii</p>
            <p>-lactato mayorigual 12</p>
            <p> moderada 2 de</p>
            <p>-apgar 5 menorigual7</p>
            <p> -ph menor 7.15 </p>
            <p>-sarnat i o ii</p>
            <p> asfixia perinatal leve sin acidosis metavbolica 2 de</p>
            <p>-apgar 5 menorigual7</p>
            <p>-ph menor 7.15</p>
            <p>acidosis metabolica sin alteracion vlinica o neurologica</p>
            <p>-ph menor7.15</p>
            <p>-apgar 5 mayor7</p>
            <p>asfixia perinatal descartada</p>
            <p> -ph mayorigual7.15</p>
            <p> -apgar 5 mayor7</p>
          </p>
        ) : (
          <p>s</p>
        )}
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
  let date = dateOfBirth
    ? dateOfBirth.toLocaleString("en-US", {
        timeZone: "America/Bogota",
        day: "2-digit",
      })
    : "";
  return date.split("-").reverse().join("/");
};

export default NewBornResult;

{
  /* 
      APGAR:
      -resultado
      0-3 depresion severa al nacer
      4-6 depresion moderada al nacer
      7-9 adecuada adaptacion al nacer
       */
}

const getAppearance1 = (apgar1Appearance) => {
  if (apgar1Appearance === "CIANÓTICO/PÁLIDO") return 0;
  if (apgar1Appearance === "ACROCIANÓTICO") return 1;
  if (apgar1Appearance === "TOTALMENTE ROSADO") return 2;
};
const getPulse1 = (apgar1Pulse) => {
  if (apgar1Pulse === "SIN PULSO") return 0;
  if (apgar1Pulse === "<100 LPM") return 1;
  if (apgar1Pulse === ">100 LPM") return 2;
};
const getGrimace1 = (apgar1Grimace) => {
  if (apgar1Grimace === "SIN RESPUESTA A ESTÍMULOS") return 0;
  if (apgar1Grimace === "MUECAS/LLANTO A ESTÍMULOS") return 1;
  if (apgar1Grimace === "LLANTO ESPONTÁNEO") return 2;
};
const getActivity1 = (apgar1Activity) => {
  if (apgar1Activity === "FLÁCIDO/HIPOTÓNICO") return 0;
  if (apgar1Activity === "EXTREMIDADES FLEXIONADAS") return 1;
  if (apgar1Activity === "MOVIMIENTOS ACTIVOS") return 2;
};
const getRespiration1 = (apgar1Respiration) => {
  if (apgar1Respiration === "APNEA") return 0;
  if (apgar1Respiration === "LENTA/IRREGULAR") return 1;
  if (apgar1Respiration === "LLANTO VIGOROSO") return 2;
};
function Apgar1(
  apgar1Appearance,
  apgar1Pulse,
  apgar1Grimace,
  apgar1Activity,
  apgar1Respiration
) {
  return (
    getAppearance1(apgar1Appearance) +
    getPulse1(apgar1Pulse) +
    getGrimace1(apgar1Grimace) +
    getActivity1(apgar1Activity) +
    getRespiration1(apgar1Respiration)
  );
}
const getAppearance5 = (apgar5Appearance) => {
  if (apgar5Appearance === "CIANÓTICO/PÁLIDO") return 0;
  if (apgar5Appearance === "ACROCIANÓTICO") return 1;
  if (apgar5Appearance === "TOTALMENTE ROSADO") return 2;
};
const getPulse5 = (apgar5Pulse) => {
  if (apgar5Pulse === "SIN PULSO") return 0;
  if (apgar5Pulse === "<100 LPM") return 1;
  if (apgar5Pulse === ">100 LPM") return 2;
};
const getGrimace5 = (apgar5Grimace) => {
  if (apgar5Grimace === "SIN RESPUESTA A ESTÍMULOS") return 0;
  if (apgar5Grimace === "MUECAS/LLANTO A ESTÍMULOS") return 1;
  if (apgar5Grimace === "LLANTO ESPONTÁNEO") return 2;
};
const getActivity5 = (apgar5Activity) => {
  if (apgar5Activity === "FLÁCIDO/HIPOTÓNICO") return 0;
  if (apgar5Activity === "EXTREMIDADES FLEXIONADAS") return 1;
  if (apgar5Activity === "MOVIMIENTOS ACTIVOS") return 2;
};
const getRespiration5 = (apgar5Respiration) => {
  if (apgar5Respiration === "APNEA") return 0;
  if (apgar5Respiration === "LENTA/IRREGULAR") return 1;
  if (apgar5Respiration === "LLANTO VIGOROSO") return 2;
};
function Apgar5(
  apgar5Appearance,
  apgar5Pulse,
  apgar5Grimace,
  apgar5Activity,
  apgar5Respiration
) {
  return (
    getAppearance5(apgar5Appearance) +
    getPulse5(apgar5Pulse) +
    getGrimace5(apgar5Grimace) +
    getActivity5(apgar5Activity) +
    getRespiration5(apgar5Respiration)
  );
}

const getAppearance10 = (apgar10Appearance) => {
  if (apgar10Appearance === "CIANÓTICO/PÁLIDO") return 0;
  if (apgar10Appearance === "ACROCIANÓTICO") return 1;
  if (apgar10Appearance === "TOTALMENTE ROSADO") return 2;
};
const getPulse10 = (apgar10Pulse) => {
  if (apgar10Pulse === "SIN PULSO") return 0;
  if (apgar10Pulse === "<100 LPM") return 1;
  if (apgar10Pulse === ">100 LPM") return 2;
};
const getGrimace10 = (apgar10Grimace) => {
  if (apgar10Grimace === "SIN RESPUESTA A ESTÍMULOS") return 0;
  if (apgar10Grimace === "MUECAS/LLANTO A ESTÍMULOS") return 1;
  if (apgar10Grimace === "LLANTO ESPONTÁNEO") return 2;
};
const getActivity10 = (apgar10Activity) => {
  if (apgar10Activity === "FLÁCIDO/HIPOTÓNICO") return 0;
  if (apgar10Activity === "EXTREMIDADES FLEXIONADAS") return 1;
  if (apgar10Activity === "MOVIMIENTOS ACTIVOS") return 2;
};
const getRespiration10 = (apgar10Respiration) => {
  if (apgar10Respiration === "APNEA") return 0;
  if (apgar10Respiration === "LENTA/IRREGULAR") return 1;
  if (apgar10Respiration === "LLANTO VIGOROSO") return 2;
};
function Apgar10(
  apgar10Appearance,
  apgar10Pulse,
  apgar10Grimace,
  apgar10Activity,
  apgar10Respiration
) {
  return (
    getAppearance10(apgar10Appearance) +
    getPulse10(apgar10Pulse) +
    getGrimace10(apgar10Grimace) +
    getActivity10(apgar10Activity) +
    getRespiration10(apgar10Respiration)
  );
}

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
  const isMacrosomic = weight > 4000;
  const isVeryLowWeight = weight < 1500;
  const isLowWeight = weight < 2501 && !isVeryLowWeight;
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
          <p>
            --PESO (P{weightPer}), TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P
            {head}) MENORES AL PERCENTIL 10
          </p>
        </>
      )}
      {isAdequate && (
        <>
          <p>
            -PESO (P{weightPer}), TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P
            {head}) ADECUADOS PARA LA EDAD GESTACIONAL
          </p>
        </>
      )}
      {isLowWeight && !isRCIU && (
        <>
          <p>
            {" "}
            -BAJO PESO AL NACER ({weight} G, P{weightPer})
          </p>{" "}
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {isVeryLowWeight && !isRCIU && (
        <>
          <p>
            -MUY BAJO PESO AL NACER ({weight} G, P{weightPer})
          </p>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {isBig && isRightHead && !isMacrosomic && (
        <>
          <p>-GRANDE PARA LA EDAD GESTACIONAL</p>
          <p>--PESO EN PERCENTIL {weightPer}</p>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}

      {isMacrosomic && isRightHead && (
        <>
          <p>-RECIÉN NACIDO MACROSÓMICO ({weight} G)</p>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO (P{head}) ADECUADOS PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {isLittle && isRightHead && !isLowWeight && !isVeryLowWeight && !isRCIU && (
        <>
          <p>-PEQUEÑO PARA LA EDAD GESTACIONAL</p>
          <p>--PESO EN PERCENTIL {weightPer}</p>
          <p>
            -TALLA (P{height}) Y PERÍMETRO CEFÁLICO ADECUADOS (P{head}) PARA LA
            EDAD GESTACIONAL
          </p>
        </>
      )}
      {hasMicrocephaly && (
        <>
          <p>-MICROCEFALIA</p>
          <p>--PERÍMETRO CEFÁLICO EN PERCENTIL {head}</p>
        </>
      )}
      {hasMacrocephaly && (
        <>
          <p>-MACROCEFALIA</p>
          <p>-PERÍMETRO CEFÁLICO EN PERCENTIL {head}</p>
        </>
      )}

      {/*     
    
    Gases de cordon
    ph
    pco2 
    po2
    hco3
    be
    lactato
    na
    k
    ca
    cl
    glu
    lac
 
  asfixia perinatal severa 3 de
  -apgar 5 < = 5
  -ph <7 o be <=-16
  -sarnat ii o iii
  -lactato > = 12
  moderada 2 de
  -apgar 5 <=7
  -ph < 7.15
  -sarnat i o ii
  asfixia perinatal leve sin acidosis metavbolica 2 de
  -apgar 5 <=7
  -ph >=7.15
  acidosis metabolica sin alteracion vlinica o neurologica
  -ph < 7.15
  -apgar 5 >7
  asfixia perinatal descartada
  -ph >=7.15
  -apgar 5 >7
      
       */}
    </>
  );
};
