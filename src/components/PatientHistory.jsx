import React from 'react';
import { useFormik } from 'formik';
import PatientForm from './PatientForm';
import HistoryResult from './HistoryResult';

function PatientHistory() {
  const formik = useFormik({
    initialValues: {
      bedNumber: '',
      careType: 'BASICO',
      isNew: false,
      sex: 'MASCULINO',
      dob: '',
      weeks: '',
      diagnosis: '',
      waterBalanceTime: 24,
      lastWeight: '',
      weight: '',
      glucose: '',
      intake: '',
      output: '',
      cardiacFreq: 136,
      respiratoryFreq: 40,
      saturation: 99,
      temperture: 36.5,
      hasSog: false,
      physicalExam: `NORMOCEFALO, FONTANELA ANTERIOR NORMOTENSA, POSTERIOR PUNTIFORME, PUPILAS ISOCORICAS NORMOREACTIVAS, ESCLERAS ANICTERICAS, NARINAS PERMEABLES, MUCOSA ORAL HUMEDA, SOG CERRADA, CUELLO MOVIL SIN ADENOPATIAS PALPABLES. 
      TÓRAX SIMETRICO, EXPANSIBLE, SIN TIRAJES, NO AGREGADOS. 
      RUIDOS CARDIACOS RITMICOS SIN SOPLOS. 
      ABDOMEN BLANDO, DEPRESIBLE, NO IMPRESIONA DOLOR A LA PALPACION, NO MASAS NO MEGALIAS, ONFALO CLAMPEADO SIN INFECCIONES  
      GENITOURINARIO NORMOCONFIGURADO PARA SEXO Y EDAD.   
      EXTREMIDADES EUTROFICAS, SIN EDEMAS, LLENADO CAPILAR<2 SG, PULSOS DISTALES PRESENTES Y SIMETRICOS. 
      NEUROLÓGICO, ACTIVO, REACTIVO CON RESPUESTA A ESTIMULOS, REFLEJOS PRIMITIVOS PRESENTES, LIBRE DE CRISIS NEONATALES.  
      PIEL Y ANEXOS ÍNTEGRA, SIN LESIONES, ROSADA 
      `,
      wbc: '',
      hb: '',
      hto: '',
      plt: '',
      neut: '',
      linfos: '',
      pcr: '',
      glycemia: '',
      na: '',
      k: '',
      ca: '',
      ph: '',
      pco2: '',
      po2: '',
      hco3: '',
      be: '',
      vdrl: '',
      tsh: '',
      otherLabs: '',
      analysis: `NEUROLOGICO: ACTIVO REACTIVO, SIN DEFICIT APARENTE, NI CRISIS. 
      RESPIRATORIO: TOLERANDO OXÍGENO AMBIENTE.  PATRON RESPIRATORIO ADECUADO, NORMOSATURADO. 
      HEMODINAMICO: MANTIENE SIGNOS VITALES ESTABLES, NO SOPORTES, BIEN PERFUNDIDO, NO GRADIENTE TERMICO.
      GI: TOLERANDO APORTE ENTERAL POR SONDA, HIDRATADO, NORMOGLICEMICO, 
      RENAL: DIURESIS POR PAÑAL PRESENTE, NO EDEMAS.
      INFECCIOSO: NO DISTERMIAS.
      SE INDICA TOMA DE PARACLINICOS Y ESTUDIOS COMPLEMENTARIOS. SE EXPLICA A LOS PADRES QUIENES REFIEREN ENTENDER Y ACEPTAR, PRONOSTICO SUJETO A EVOLUCION
      `,
      oxygen: '',
      diet: '',
      liquid: '',
      drugs: '',
      nurse: `-CUIDADOS BASICOS  NEONATALES
      -MONITORIZACIÓN ELECTRONICA NO INVASIVA
      -GLUCOMETRIA CADA 12 HORAS
      -CUIDADOS DE ENFERMERÍA
      -PESO DIARIO
      -CONTROL DE LA, LE, BH
      -CONTROL DE SIGNOS VITALES Y AVISAR CAMBIOS
      `,
      test: '',
      images: '',
      consult: '',
      pending: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <PatientForm formik={formik} />
      <HistoryResult values={formik.values} />
    </div>
  );
}

export default PatientHistory;
