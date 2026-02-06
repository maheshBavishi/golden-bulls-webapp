import React, { Fragment } from "react";
import CalculationsBanner from "@/modulers/calculator/CalculatorBanner";
import CalculatorData from "@/modulers/calculator/CalculatorData";
const Calculator = () => {
  return (
    <Fragment>
      <CalculationsBanner />
      <CalculatorData/>
    </Fragment>
  );
};

export default Calculator;
