import React from 'react';

function HistoryResult({ values }) {
  const egc = findEgc(values.dob, values.reportDate, values.weeks);
  const gu = (values.output / (values.weight / 1000) / 24).toFixed(2);
  const pia = values.intake - values.output + (values.lastWeight - values.weight);
  const bh = values.intake - (values.output + pia);

  return (
    <div>
      <h1>{values.bedNumber}</h1>

      <p>
        NOTA: PACIENTE VALORADO CON TODAS LAS MEDIDAS DE PROTECCION REQUERIDAS POR EVENTUALIDAD DE
        PANDEMIA POR VIRUS SARS COV 2 EVOLUCION MÉDICA CUIDADOS {values.careType}S NEONATALES
      </p>

      {values.isNew && (
        <>
          <p>NEONATO EN SUS PRIMERAS HORAS DE VIDA Y ESTANCIA HOSPITALARIA CON DIAGNÓSTICOS DE:</p>
          <p>
            -RECIEN NACIDO PRETERMINO {values.sex} DE {values.weeks} SEMANAS POR BALLARD EGC {egc}
          </p>
          <p>-PESO Y TALLA ADECUADOS PARA SU EDAD GESTACIONAL</p>
        </>
      )}
      <p>{values.diagnosis}</p>

      <h2>BALANCE HIDIRICO {values.waterBalanceTime}HR</h2>
      <p>
        PESO AYER: {values.lastWeight}GR PESO: {values.weight}GR GLUCOMETRIA: {values.glucose}MG/DL
        LA: {values.intake}CC LE: {values.output}CC GU: {gu}CC/KG/HORA BH: {bh}
      </p>

      <h2> EXAMEN FISICO </h2>
      <p>
        SIGNOS VITALES FC: {values.cardiacFreq}LPM – FR: {values.respiratoryFreq}RPM – SAT02:{' '}
        {values.saturation}% - T: {values.temperture}°C
      </p>

      <p>{values.physicalExam}</p>

      <h2> REPORTE DE PARACLÍNICOS</h2>
      <p>{formatDate(values.reportDate)}</p>

      {paraclinics.map((paraclinic) =>
        values[paraclinic] ? (
          <p key={paraclinic}>
            {paraclinic.toUpperCase()}: {values[paraclinic]}
          </p>
        ) : null
      )}

      <h2>ANALISIS </h2>
      {values.analysis}

      <h2> PLAN:</h2>
      <p>- CUIDADOS {values.careType}S NEONATALES </p>

      {planFields.map((field) => {
        return (
          <React.Fragment key={field}>{values[field] && <p>{values[field]}</p>}</React.Fragment>
        );
      })}

      {values.pending && (
        <>
          <p>*****PENDIENTES******</p>
          <p>{values.pending}</p>
        </>
      )}
    </div>
  );
}

const findEgc = (dob, reportD, weeks) => {
  const reportDate = new Date(`${reportD} 00:00`);
  const dobDate = new Date(`${dob} 00:00`);
  const daysFromBirth = (reportDate - dobDate) / (1000 * 60 * 60 * 24);
  const weeksFromBirth = Math.floor(daysFromBirth / 7);
  const weeksFromBirthReminder = daysFromBirth % 7;
  const egc = weeks + weeksFromBirth + weeksFromBirthReminder / 10;

  return egc;
};

const formatDate = (reportDate) => {
  let date = reportDate.toLocaleString('en-US', { timeZone: 'America/Bogota', day: '2-digit' });
  return date.split('-').reverse().join('/');
};

const paraclinics = [
  'wbc',
  'hb',
  'hto',
  'plt',
  'neut',
  'linfos',
  'pcr',
  'glycemia',
  'na',
  'k',
  'ca',
  'ph',
  'pco2',
  'po2',
  'hco3',
  'be',
  'vdrl',
  'tsh',
  'otherLabs',
];

const planFields = ['oxygen', 'diet', 'liquid', 'drugs', 'nurse', 'test', 'images', 'consult'];

export default HistoryResult;
