import React from "react";
import { ThemeConsumer } from "styled-components";

function HistoryResult({ values }) {
  const egc = findEgc(values.dob, values.reportDate, values.weeks);
  const ageInDays = findAgeInDays(values.dob, values.reportDate);

  const daysFromAdmission = findDaysFromAdmission(
    values.admissionDate,
    values.reportDate
  );

  const weightInKg = values.weight / 1000;
  const pia =
    ((findConstantPia(values.weight, ageInDays) * values.weight) / 1000) *
    values.waterBalanceTime;
  const totalOutput = pia + Number(values.output);
  const gu = values.output / weightInKg / values.waterBalanceTime;
  const dailyBalance = values.intake - totalOutput;
  const isPremature = values.weeks < 37;
  const isPostTerm = values.weeks >= 40;
  const term = isPremature ? "PRETERMINO" : "A TERMINO";
  const isIntermediate =
    values.hasOxygen ||
    values.foley ||
    values.nutritionSupport === "LEVS" ||
    values.nutritionSupport === "NPT" ||
    values.hidricRate;
  const careType = isIntermediate ? "INTERMEDIO" : "BASICO";

  return (
    <div>
      <h1 style={{ marginBottom: 0 }}>{values.bedNumber}</h1>
      <p>
        ***{values.exit ? "NOTA DE EGRESO" : "EVOLUCION MÉDICA"}{" "}
        {values.timeOfDay} CUIDADOS {careType}S NEONATALES***{" "}
      </p>
      <p>
        NOTA: PACIENTE VALORADO CON TODAS LAS MEDIDAS DE PROTECCIÓN REQUERIDAS
        POR EVENTUALIDAD DE PANDEMIA POR VIRUS SARS COV 2{" "}
      </p>
      <br />
      {values.justBorn ? (
        <p>
          NEONATO EN SUS PRIMERAS HORAS DE VIDA Y ESTANCIA HOSPITALARIA CON
          DIAGNÓSTICOS DE:
        </p>
      ) : (
        <p>
          NEONATO CON {ageInDays} DÍAS DE VIDA Y{" "}
          {daysFromAdmission === ageInDays
            ? "DE ESTANCIA HOSPITALARIA"
            : `${daysFromAdmission} DIAS DE ESTANCIA HOSPITALARIA `}
          CON DIAGNÓSTICOS DE:
        </p>
      )}
      <p>
        -RECIÉN NACIDO {term} {values.sex} DE {values.weeks} SEMANAS POR BALLARD{" "}
        {!isPostTerm && <span>EDAD GESTACIONAL CORREGIDA {egc}</span>}
      </p>
      <p> {values.diagnosis}</p>
      <p>{values.nutritionRecovery && "-RECUPERACIÓN NUTRICIONAL"}</p>
      <br />
      <p> FN {formatDate(values.dob)}</p>
      <p> FI {formatDate(values.admissionDate)}</p>
      {(values.lastWeight ||
        values.weight ||
        values.glucose ||
        values.intake ||
        values.output) && (
        <>
          <br />
          <h2 style={{ marginBottom: 0 }}>
            BALANCE HÍDIRICO EN {values.waterBalanceTime}HR{" "}
            {valNumShow(dailyBalance.toFixed(1), " ", "CC")}
          </h2>
          <p>{valNumShow(values.lastWeight, "PESO AYER", "GR")}</p>
          <p> {valNumShow(values.weight, "PESO ACTUAL", "GR")}</p>
          <p>{valNumShow(values.intake, "LÍQUIDOS ADMINISTRADOS", "CC")}</p>
          <p>{valNumShow(values.output, "LÍQUIDOS ELIMINADOS", "CC")}</p>
          <p>
            {valNumShow(
              pia.toFixed(1),
              "PERDIDAS INSENSIBLES APROXIMADAS",
              "CC"
            )}
          </p>
          <p>
            {valNumShow(
              totalOutput.toFixed(2),
              "TOTAL DE LÍQUIDOS ELIMINADOS",
              "CC"
            )}
          </p>
          <p>{valNumShow(gu.toFixed(2), "DIURESIS", "CC/KG/HORA")}</p>
        </>
      )}
      <br />
      <h2 style={{ marginBottom: 0 }}> EXAMEN FÍSICO </h2>
      <p>
        SIGNOS VITALES FC:<strong> {values.cardiacFreq} </strong>LPM – FR:{" "}
        <strong>{values.respiratoryFreq}</strong> RPM – SAT02:{" "}
        <strong>{values.saturation} </strong>% - T:{" "}
        <strong>{values.temperture}°C</strong>
      </p>
      <br />
      <p>{values.physicalExam}</p>
      <p> {valNumShow(values.glucose, "GLUCOMETRÍA", "MG/DL")}</p>
      {hasParaclinics(values) && (
        <>
          <br />
          <h2 style={{ marginBottom: 0 }}>REPORTE DE PARACLÍNICOS</h2>
          <p>
            <strong>{formatDate(values.reportDate)}</strong>
          </p>
          <p>
            {hemogram.map((item) =>
              values[item] ? (
                <span key={item}>{` ${item.toUpperCase()}: ${
                  values[item]
                } `}</span>
              ) : null
            )}
          </p>
          <p>
            {ions.map((item) =>
              values[item] ? (
                <span key={item}>{` ${item.toUpperCase()}: ${
                  values[item]
                } `}</span>
              ) : null
            )}
          </p>
          <p>
            {gases.map((item) =>
              values[item] ? (
                <span key={item}>{` ${item.toUpperCase()}: ${
                  values[item]
                } `}</span>
              ) : null
            )}
          </p>
          <p>
            {paraclinics.map((item) =>
              values[item] ? (
                <span key={item}>{` ${item.toUpperCase()}: ${
                  values[item]
                } `}</span>
              ) : null
            )}
          </p>
          <p>
            {bilirubins.map((item) =>
              values[item] ? (
                <span key={item}>{` ${item.toUpperCase()}: ${
                  values[item]
                } `}</span>
              ) : null
            )}
          </p>
          <p>{values.otherLabs}</p>
        </>
      )}
      <br />
      <h2 style={{ marginBottom: 0 }}>ANÁLISIS </h2>
      <p>
        PACIENTE {term} EN REGULARES CONDICIONES GENERALES. CON IDX PREVIAMENTE
        DESCRITOS. SE ENCUENTRA PACIENTE ACTIVO REACTIVO, SIN DÉFICIT APARENTE,
        NI CRISIS NEONATALES,{" "}
        {values.hasOxygen ? (
          <strong> RECIBIENDO OXÍGENO SUPLEMENTARIO DE BAJO FLUJO </strong>
        ) : (
          <strong>TOLERANDO OXÍGENO AMBIENTE</strong>
        )}
        , PATRÓN RESPIRATORIO ADECUADO, NORMOSATURADO, MANTIENE SIGNOS VITALES
        ESTABLES, NO SOPORTES, BIEN PERFUNDIDO,
        {values.oralIntake ? (
          <strong> AYUNADO</strong>
        ) : values.foley ? (
          <strong> TOLERANDO APORTE ENTERAL POR SONDA </strong>
        ) : (
          <strong> TOLERANDO APORTE ENTERAL POR SUCCIÓN </strong>
        )}
        {values.nutritionSupport === "LEVS" && (
          <strong>
            , CON SOPORTE DE LIQUIDOS ENDOVENOSOS DEXTROSADOS CON ELECTROLITOS
            PARA EVITAR DESPLOME NUTRICIONAL
          </strong>
        )}
        {values.nutritionSupport === "NPT" && (
          <strong>
            , CON SOPORTE DE NUTRICIÓN PARENTERAL PARA EVITAR CATABOLISMO
            PROTEICO
          </strong>
        )}
        {values.upOralIntake && (
          <strong>
            , POR LO QUE SE PROGRESA{" "}
            {values.nutritionSupport === "LEVS" && " Y SE AJUSTAN LEVS"}
            {values.nutritionSupport === "NPT" &&
              " Y SE AJUSTA NUTRICION PARENTERAL"}
          </strong>
        )}
        {/* {values.upOralIntake && <strong>, POR LO QUE SE PROGRESA</strong>}
        {values.ivFLUIDS ? (
          <strong> Y SE AJUSTAN LEVS </strong>
        ) : values.parenteralNut ? (
          <p> Y SE AJUSTA NUTRICION PARENTERAL</p>
        ) : (
          <p></p>
        )} */}
        , HIDRATADO, NORMOGLICÉMICO, DIURESIS POR PAÑAL PRESENTE, NO EDEMAS, NO
        DISTERMIAS, NO DETERIORO CLÍNICO.{" "}
        <strong>{values.paraclinicAnalysis}</strong>{" "}
        {values.nutritionRecovery &&
          "SE ENCUENTRA EN RECUPERACION NUTRICIONAL PARA GANANCIA DE PESO PONDERAL YA QUE NO TIENE EL PESO ADECUADO ESTABLECIDO POR LAS GUIAS DE NEONATALOGIA COLOMBIANA DE ASCON DE BAJO PESO AL NACER"}{" "}
        {values.exit
          ? `DIAGNÓSTICOS DE INGRESO RESUELTOS POR LO QUE SE OTORGA ALTA HOSPITALARIA
           CON CITA DE CONTROL POR PEDIATRÍA, SIGNOS DE ALARMA Y RECOMENDACIONES.`
          : `CONTINÚA EN LA UNIDAD PARA VIGILANCIA ESTRICTA Y MANEJO, PRONÓSTICO SUJETO A EVOLUCIÓN CLÍNICA. SE EXPLICA A LOS PADRES QUIENES REFIEREN ENTENDER Y ACEPTAR.`}
      </p>
      <br />
      <h2 style={{ marginBottom: 0 }}> PLAN:</h2>
      <p>
        <strong>PESO {values.weight}GR</strong>
      </p>
      {values.exit ? (
        <p>
          {` EGRESO INSTITUCIONAL
APORTE ENTERAL LECHE MATERNA A LIBRE DEMANDA
RECOMENDACIONES Y SIGNOS DE ALARMA VERBALES+FISICAS
CITA POR PEDIATRIA POR SU EPS
CITA POR ENFERMERIA PARA CRECIMIENTO Y DESARROLLO

RECOMENDACIONES
1. LACTANCIA MATERNA EXCLUSIVA LOS 6 PRIMEROS MESES Y HASTA LOS 2 AÑOS
2. BAÑO DIARIO CON AGUA Y JABÓN (SECARLO Y VESTIRLO RÁPIDO)
3. BAÑO DE SOL TODOS LOS DIAS UNICAMENTE EN PAÑAL, EN EL SOL DE LA MAÑANA Y DE LA TARDE , 20 MINUTOS BOCA ARRIBA Y 20 MINUTOS BOCA ABAJO, NO IMPORTA SI NO HAY SOL.
4. LIMPIEZA DEL OMBLIGO 3 VECES AL DIA CON ALCOHOL BLANCO, HASTA QUE SE CAIGA. SI NOTA QUE EL OMBLIGO TIENE MAL OLOR O A SU ALREDEDOR LA PIEL ESTÁ ROJA O CALIENTE, FAVOR CONSULTE POR URGENCIAS
5. TODA PERSONA QUE VAYA A CARGAR A SU BEBÉ DEBE LAVARSE LAS MANOS, Y SI TIENE GRIPA USAR TAPABOCAS Y NO ACERCARSE AL MENOR.
6. COLECHO: LA MADRE PUEDE DORMIR CON EL RECIÉN NACIDO EN LA MISMA CAMA O MISMA HABITACIÓN DURANTE LOS 6 PRIMEROS MESES DE EDAD
7. PRÓXIMA VACUNA A LOS 2 MESES DE VIDA, EN CUALQUIER HOSPITAL O PUESTO DE SALUD CERCANO A LA RESIDENCIA
8. RECLAMAR EL REPORTE DEL EXAMEN “TSH” EN 10 DÍAS EN EL LABORATORIO CON EL NOMBRE DE LA MADRE. (SI NO TIENE EL RESULTADO YA)
9. DEBE ASISTIR AL PRIMER CONTROL DESPUÉS DE NACER A LOS 8 DÍAS DE VIDA Y LUEGO CADA MES AL CONTROL DE CRECIMIENTO Y DESARROLLO DE MEDICINA GENERAL.
10. DEBE INSCRIBIR AL BEBÉ EN SU SEGURIDAD SOCIAL, ANTES DE SU PRIMER MES DE VIDA

RECIÉN NACIDOS : SIGNOS DE ALARMA
1. DIFICULTAD RESPIRATORIA (RESPIRA RÁPIDO, PECHUGUERA, SE LE HUNDEN LAS COSTILLAS, LABIOS Y DEDOS MORADOS).
2. ESTA MUY AMARILLO A PESAR DE PONERLO AL SOL (OJOS, PIERNAS, LENGUA).
3. NO QUIERE COMER, RECHAZA EL SENO O VOMITA TODO LO QUE COME.
4. FIEBRE MAYOR DE 38 GRADOS TOMADA CON TERMÓMETRO.
5. LLANTO INCONSOLABLE – ESTÁ DEMASIADO IRRITABLE.
6. HACE DEL CUERPO CON SANGRE O MOCO.
7. CONVULSIONA
8. ESTA MUY DORMIDO – NO RESPONDE A ESTÍMULOS.

`}
        </p>
      ) : (
        <>
          <p>
            THT <strong>{values.hidricRate + values.newOralIntake}</strong>
          </p>
          <p>
            <strong>-CUIDADOS {careType}S NEONATALES</strong>
            {values.foley && " //SOG "}
            {values.hasOxygen && " //OXÍGENO "}
            {(values.nutritionSupport === "LEVS" || values.hidricRate) &&
              "//LEVS "}
            {values.nutritionSupport === "NPT" && " //NPT "}
          </p>
          {values.oxygen && `-${values.oxygen}`}
          <Diet
            weight={values.weight}
            foley={values.foley}
            newOralIntake={values.newOralIntake}
            momMilk={values.momMilk}
          />
          <Liquids
            weight={values.weight}
            hidricRate={values.hidricRate}
            meqSodium={values.meqSodium}
            meqPotassium={values.meqPotassium}
            TIG={values.TIG}
          />
          {planFields.map((field) => {
            return (
              <React.Fragment key={field}>
                {values[field] && <p>-{values[field]}</p>}
              </React.Fragment>
            );
          })}

          <p>{values.nurse}</p>
          <p>
            {isIntermediate
              ? "-GLUCOMETRÍA CADA 12 HORAS"
              : "-GLUCOMETRÍA CADA 24 HORAS"}
          </p>
          <p>
            {planFieldsSS.map((field) => {
              return (
                <React.Fragment key={field}>
                  {values[field] && <p>- SS {values[field]}</p>}
                </React.Fragment>
              );
            })}
          </p>
          {values.pending && (
            <>
              <h3 style={{ marginBottom: 0 }}>PENDIENTES</h3>
              <p>-{values.pending}</p>
            </>
          )}
        </>
      )}
    </div>
  );
}

const Diet = ({ weight, foley, newOralIntake, momMilk }) => {
  if (!newOralIntake) return <strong> -NVO/SOG ABIERTA </strong>;
  if (newOralIntake && momMilk && `-${newOralIntake}`)
    return (
      <p>
        {" "}
        -APORTE ENTERAL LACTANCIA MATERNA EXCLUSIVA{" "}
        <strong>{((newOralIntake * weight) / 1000 / 8).toFixed(0)} </strong>CC
        CADA 3 HORAS POR{" "}
        {foley ? <strong> SONDA </strong> : <strong> SUCCIÓN </strong>} (TH{" "}
        {newOralIntake} CC/KG/DIA){" "}
      </p>
    );

  if (newOralIntake || !momMilk)
    return (
      <p>
        {" "}
        -APORTE ENTERAL LM/LF{" "}
        <strong>{((newOralIntake * weight) / 1000 / 8).toFixed(0)}</strong> CC
        CADA 3 HORAS POR{" "}
        {foley ? <strong> SONDA </strong> : <strong> SUCCIÓN </strong>} (TH{" "}
        <strong>{newOralIntake}</strong> CC/KG/DIA){" "}
      </p>
    );
  return null;
};

const Liquids = ({ TIG, weight, meqSodium, meqPotassium, hidricRate }) => {
  const weightInKg = weight / 1000;

  const volTot = (hidricRate * weightInKg).toFixed(0);
  const DAD = ((TIG / 100) * weightInKg * 1440).toFixed(0);
  const AD = (volTot - DAD).toFixed(0);
  const Natrol = ((meqSodium * weightInKg) / 2).toFixed(0);
  const Katrol = ((meqPotassium * weightInKg) / 2).toFixed(0);
  const dropVolTot = (volTot / 24).toFixed(1);

  if ((!meqSodium || !meqPotassium || !TIG) && hidricRate)
    return (
      <p>
        {" "}
        -LÍQUIDOS ENDOVENOSOS DAD 10% <strong>{volTot}</strong> CC PASAR A{" "}
        <strong>{dropVolTot}</strong> CC/HORA (TH<strong> {hidricRate}</strong>{" "}
        CC/KG/DIA){" "}
      </p>
    );
  if (hidricRate && meqSodium && meqPotassium)
    return (
      <p>
        {" "}
        -LIQUIDOS ENDOVENOSOS DAD 10% {DAD} CC, AD {AD} CC, NATROL {Natrol} CC,
        KATROL {Katrol} CC, PASAR A {dropVolTot}
        CC/H (TH {hidricRate} CC/KG/DIA, NA {meqSodium}mEq, K {meqPotassium}mEq,
        TIG {TIG})
      </p>
    );
  return null;
};

const findEgc = (dob, reportD, weeks) => {
  if (!dob || !reportD || !weeks)
    return <strong style={{ color: "red" }}>FALTAN FECHAS Y/O EG</strong>;

  // Edad gestacional corregia en semanas
  const ageInDays = findAgeInDays(dob, reportD);
  const weeksFromBirth = Math.floor(ageInDays / 7);
  const weeksFromBirthReminder = ageInDays % 7;
  const egc = weeks + weeksFromBirth + weeksFromBirthReminder / 10;

  return egc;
};

const findAgeInDays = (dob, reportD) => {
  if (!dob || !reportD)
    return <strong style={{ color: "red" }}>FALTAN FECHAS</strong>;

  const reportDate = new Date(`${reportD} 00:00`);
  const dobDate = new Date(`${dob} 00:00`);
  const ageInDays = (reportDate - dobDate) / (1000 * 60 * 60 * 24);

  return ageInDays;
};

const findConstantPia = (weight, ageInDays) => {
  if (ageInDays <= 7 && weight <= 1000) {
    return 2.6;
  }
  if (ageInDays <= 7 && weight >= 1001 && weight <= 1250) {
    return 2.3;
  }
  if (ageInDays <= 7 && weight >= 1251 && weight <= 1500) {
    return 1.6;
  }
  if (ageInDays <= 7 && weight >= 1501 && weight <= 1750) {
    return 0.95;
  }
  if (ageInDays <= 7 && weight >= 1751) {
    return 0.83;
  }
  if (ageInDays >= 8) {
    return 1.25;
  }
  return null;
};

const findDaysFromAdmission = (admissionDate, reportD) => {
  if (!admissionDate || !reportD)
    return <strong style={{ color: "red" }}>FALTAN FECHAS</strong>;

  const reportDate = new Date(`${reportD} 00:00`);
  const admDate = new Date(`${admissionDate} 00:00`);
  const daysFromAdmission = (reportDate - admDate) / (1000 * 60 * 60 * 24);

  return daysFromAdmission;
};

const formatDate = (reportDate) => {
  let date = reportDate.toLocaleString("en-US", {
    timeZone: "America/Bogota",
    day: "2-digit",
  });
  return date.split("-").reverse().join("/");
};

const valNumShow = (val, label, units) => {
  return val !== "" && isFinite(val) ? `${label}: ${val}${units} ` : "";
};

const hasParaclinics = (values) => {
  const hasParaclinic = (group) =>
    group.reduce((result, key) => result || !!values[key], false);

  const hasHemogram = hasParaclinic(hemogram);
  const hasIons = hasParaclinic(ions);
  const hasGases = hasParaclinic(gases);
  const hasParacl = hasParaclinic(paraclinics);
  const hasBilirubins = hasParaclinic(bilirubins);

  return (
    !!values.otherLabs ||
    hasHemogram ||
    hasIons ||
    hasGases ||
    hasParacl ||
    hasBilirubins
  );
};

const hemogram = ["hb", "hto", "plt", "wbc", "n", "l"];
const ions = ["na", "k", "ca", "cl"];
const gases = ["ph", "pco2", "po2", "hco3", "be"];
const paraclinics = ["glicemia", "pcr", "vdrl", "hemoclasificacion", "tsh"];
const bilirubins = ["bt", "bd", "bi", "ret"];

const planFields = ["NPT", "drugs"];

const planFieldsSS = ["test", "images", "consult"];

export default HistoryResult;