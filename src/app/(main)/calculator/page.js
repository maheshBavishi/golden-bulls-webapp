import React, { Fragment } from "react";
import CalculationsBanner from "@/modulers/calculator/CalculatorBanner";
import CalculatorData from "@/modulers/calculator/CalculatorData";

export const metadata = {
  title: "Trading Calculator | Forex & Crypto Calculators",
  description: "Use our comprehensive trading calculators for forex, crypto, and stock trading. Calculate pip values, position sizes, profit/loss, margin requirements, and currency correlations.",
};

const Calculator = () => {
  return (
    <Fragment>
      <CalculationsBanner />
      <CalculatorData/>
    </Fragment>
  );
};

export default Calculator;
