import React from "react";

function BalanceResult({ values }) {
  const weightInKg = values.weight / 1000;
  const weight = values.weight;
  const daysOfLife = values.daysOfLife;
  const output = values.output;
  const intake = values.intake;
  const waterBalanceTime = values.waterBalanceTime;
  const constantPia = findConstantPia(weight, daysOfLife);
  const pia = ((constantPia * weight) / 1000) * waterBalanceTime;
  const totalOutput = pia + output;
  const gu = output / weightInKg / waterBalanceTime;
  const dailyBalance = intake - totalOutput;

  return (
    <div>
      <h2 style={{ marginBottom: 0 }}>
        BALANCE HÍDIRICO EN {values.waterBalanceTime}HR{" "}
      </h2>
      <br />
      <p>
        DIAS DE VIDA: <strong>{daysOfLife}</strong>
      </p>
      <br />
      <p>
        {" "}
        CONSTANTE: <strong>{findConstantPia(values.weight, daysOfLife)}</strong>
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
            PERDIDAS INSENSIBLES APROXIMADAS: <strong>
              {pia.toFixed(2)}
            </strong>{" "}
            CC/KG/
            {values.waterBalanceTime}H{" "}
          </p>
          <br />
          <p>
            {" "}
            TOTAL DE LÍQUIDOS ELIMINADOS:{" "}
            <strong>{totalOutput.toFixed(2)}</strong> GR{" "}
          </p>
          <br />
          <p>
            {" "}
            BALANCE: <strong>{dailyBalance.toFixed(2)}</strong> CC{" "}
          </p>
          <br />
          <p>
            {" "}
            DIURESIS: <strong>{gu.toFixed(2)}</strong> CC/KG/HORA{" "}
          </p>
        </>
      )}
    </div>
  );
}

const findConstantPia = (weight, daysOfLife) => {
  if (daysOfLife === "<7" && weight <= 1000) {
    return 2.6;
  }
  if (daysOfLife === "<7" && weight >= 1001 && weight <= 1250) {
    return 2.3;
  }
  if (daysOfLife === "<7" && weight >= 1251 && weight <= 1500) {
    return 1.6;
  }
  if (daysOfLife === "<7" && weight >= 1501 && weight <= 1750) {
    return 0.95;
  }
  if (daysOfLife === "<7" && weight >= 1751) {
    return 0.83;
  }
  if (daysOfLife === ">7") {
    return 1.25;
  }
  return null;
};

export default BalanceResult;
