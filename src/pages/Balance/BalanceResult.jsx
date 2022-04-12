import React from "react";
import { ThemeConsumer } from "styled-components";

function BalanceResult({ values }) {
  const ageInDays = findAgeInDays(values.dob, values.reportDate);
  const weightInKg = values.weight / 1000;
  const pia = (
    findConstantPia(values.weight, ageInDays) *
    weightInKg *
    values.waterBalanceTime
  ).toFixed(2);
  const totalOutput = pia + values.output;
  const gu = (values.output / weightInKg / values.waterBalanceTime).toFixed(2);
  const dailyBalance = (values.intake - totalOutput).toFixed(2);

  return (
    <div>
      <h2 style={{ marginBottom: 0 }}>
        BALANCE HÍDIRICO EN {values.waterBalanceTime}HR{" "}
      </h2>
      <br />
      <p>
        DIAS DE VIDA: <strong>{ageInDays}</strong>
      </p>
      <br />
      <p>
        {" "}
        CONSTANTE: <strong>{findConstantPia(values.weight, ageInDays)}</strong>
      </p>
      <br />
      {(values.weight || values.glucose || values.intake || values.output) && (
        <>
          <p>
            {" "}
            PESO ACTUAL: <strong>{values.weight}</strong> GR
          </p>
          <br />
          <p>
            {" "}
            LÍQUIDOS ADMINISTRADOS: <strong>{values.intake}</strong> CC{" "}
          </p>
          <br />
          <p>
            {" "}
            LÍQUIDOS ELIMINADOS: <strong>{values.output}</strong> CC{" "}
          </p>
          <br />
          <p>
            {" "}
            PERDIDAS INSENSIBLES APROXIMADAS: <strong>{pia}</strong> CC/KG/
            {values.waterBalanceTime}H{" "}
          </p>
          <br />
          <p>
            {" "}
            TOTAL DE LÍQUIDOS ELIMINADOS: <strong>{totalOutput}</strong> GR{" "}
          </p>
          <br />
          <p>
            {" "}
            BALANCE: <strong>{dailyBalance}</strong> CC{" "}
          </p>
          <br />
          <p>
            {" "}
            DIURESIS: <strong>{gu}</strong> CC/KG/HORA{" "}
          </p>
        </>
      )}
    </div>
  );
}

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

const formatDate = (reportDate) => {
  let date = reportDate.toLocaleString("en-US", {
    timeZone: "America/Bogota",
    day: "2-digit",
  });
  return date.split("-").reverse().join("/");
};

export default BalanceResult;
