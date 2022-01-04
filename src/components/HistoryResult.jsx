import React from 'react';

function HistoryResult({ values }) {
  const egc = findEgc(values.dob, values.reportDate, values.weeks);
  const gu = (values.output / (values.weight / 1000) / values.waterBalanceTime).toFixed(2);
  const pia = values.intake - values.output + (values.lastWeight - values.weight);
  const bh = values.intake - (values.output + pia);
  const ageInDays = findAgeInDays(values.dob, values.reportDate);
  const daysFromAdmission = findDaysFromAdmission(values.admissionDate, values.reportDate);
  const isPremature = values.weeks < 37;
  const isPostTerm = values.weeks >= 40;
  const term = isPremature ? 'PRETERMINO' : 'A TERMINO';

  return (
    <div>
      <h1>{values.bedNumber}</h1>

      <p>
        NOTA: PACIENTE VALORADO CON TODAS LAS MEDIDAS DE PROTECCIÓN REQUERIDAS POR EVENTUALIDAD DE
        PANDEMIA POR VIRUS SARS COV 2 EVOLUCION MÉDICA CUIDADOS {values.careType}S NEONATALES
      </p>

      {values.justBorn ? (
        <p>NEONATO EN SUS PRIMERAS HORAS DE VIDA Y ESTANCIA HOSPITALARIA CON DIAGNÓSTICOS DE:</p>
      ) : (
        <p>
          NEONATO CON {ageInDays} DÍAS DE VIDA Y {daysFromAdmission} DIAS DE ESTANCIA HOSPITALARIA
          CON DIAGNÓSTICOS DE:
        </p>
      )}
      <p>
        -RECIÉN NACIDO {term} {values.sex} DE {values.weeks} SEMANAS POR BALLARD{' '}
        {!isPostTerm && <span>EGC {egc}</span>}
      </p>
      <p>-PESO Y TALLA ADECUADOS PARA SU EDAD GESTACIONAL</p>
      <p>{values.diagnosis}</p>

      {(values.lastWeight || values.weight || values.glucose || values.intake || values.output) && (
        <>
          <h2>BALANCE HÍDIRICO {values.waterBalanceTime}HR</h2>
          <p>
            {valNumShow(values.lastWeight, 'PESO AYER', 'GR')}
            {valNumShow(values.weight, 'PESO ACTUAL', 'GR')}
            {valNumShow(values.glucose, 'GLUCOMETRÍA', 'MG/DL')}
            {valNumShow(values.intake, 'LA', 'CC')}
            {valNumShow(values.output, 'LE', 'CC')}
            {valNumShow(gu, 'GU', 'CC/KG/HORA')}
            {valNumShow(bh, 'BH', '')}
          </p>
        </>
      )}

      <h2> EXAMEN FÍSICO </h2>
      <p>
        SIGNOS VITALES FC: {values.cardiacFreq}LPM – FR: {values.respiratoryFreq}RPM – SAT02:{' '}
        {values.saturation}% - T: {values.temperture}°C
      </p>

      <p>{values.physicalExam}</p>

      <h2> REPORTE DE PARACLÍNICOS</h2>
      <p>{formatDate(values.reportDate)}</p>
      <p>
        {hemogram.map((item) =>
          values[item] ? <span key={item}>{`${item.toUpperCase()}: ${values[item]} ;`}</span> : null
        )}
      </p>
      <p>
        {ions.map((item) =>
          values[item] ? <span key={item}>{`${item.toUpperCase()}: ${values[item]} ;`}</span> : null
        )}
      </p>
      <p>
        {gases.map((item) =>
          values[item] ? <span key={item}>{`${item.toUpperCase()}: ${values[item]} ;`}</span> : null
        )}
      </p>
      <p>
        {paraclinics.map((item) =>
          values[item] ? <span key={item}>{`${item.toUpperCase()}: ${values[item]} ;`}</span> : null
        )}
      </p>
      <p>
        {bilirubins.map((item) =>
          values[item] ? <span key={item}>{`${item.toUpperCase()}: ${values[item]} ;`}</span> : null
        )}
      </p>
      <p>{values.otherLabs}</p>

      <h2>ANÁLISIS </h2>
      <p>PACIENTE {term} EN REGULARES CONDICIONES GENERALES. CON IDX PREVIAMENTE DESCRITOS. </p>
      <p>{values.analysis}</p>

      <h2> PLAN:</h2>
      <p>PESO {values.weight}GR</p>
      <p>-CUIDADOS {values.careType}S NEONATALES </p>
      {planFields.map((field) => {
        return (
          <React.Fragment key={field}>{values[field] && <p>-{values[field]}</p>}</React.Fragment>
        );
      })}
      {planFieldsSS.map((field) => {
        return (
          <React.Fragment key={field}>
            {values[field] && <p>- SS {values[field]}</p>}
          </React.Fragment>
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
  if (!dob || !reportD || !weeks)
    return <strong style={{ color: 'red' }}>FALTAN FECHAS Y/O EG</strong>;

  // Edad gestacional corregia en semanas
  const ageInDays = findAgeInDays(dob, reportD);
  const weeksFromBirth = Math.floor(ageInDays / 7);
  const weeksFromBirthReminder = ageInDays % 7;
  const egc = weeks + weeksFromBirth + weeksFromBirthReminder / 10;

  return egc;
};

const findAgeInDays = (dob, reportD) => {
  if (!dob || !reportD) return <strong style={{ color: 'red' }}>FALTAN FECHAS</strong>;

  const reportDate = new Date(`${reportD} 00:00`);
  const dobDate = new Date(`${dob} 00:00`);
  const ageInDays = (reportDate - dobDate) / (1000 * 60 * 60 * 24);

  return ageInDays;
};

const findDaysFromAdmission = (admissionDate, reportD) => {
  if (!admissionDate || !reportD) return <strong style={{ color: 'red' }}>FALTAN FECHAS</strong>;

  const reportDate = new Date(`${reportD} 00:00`);
  const admDate = new Date(`${admissionDate} 00:00`);
  const daysFromAdmission = (reportDate - admDate) / (1000 * 60 * 60 * 24);

  return daysFromAdmission;
};

const formatDate = (reportDate) => {
  let date = reportDate.toLocaleString('en-US', { timeZone: 'America/Bogota', day: '2-digit' });
  return date.split('-').reverse().join('/');
};

const valNumShow = (val, label, units) => {
  return val !== '' && isFinite(val) ? `${label}: ${val}${units} ` : '';
};

const hemogram = ['wbc', 'hb', 'hto', 'plt', 'n', 'l'];
const ions = ['na', 'k', 'ca'];
const gases = ['ph', 'pco2', 'po2', 'hco3', 'be'];
const paraclinics = ['glicemia', 'pcr', 'vdrl', 'tsh'];
const bilirubins = ['bt', 'bd', 'bi'];

const planFields = ['oxygen', 'diet', 'liquid', 'drugs', 'nurse'];

const planFieldsSS = ['test', 'images', 'consult'];

export default HistoryResult;
