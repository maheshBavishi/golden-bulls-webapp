"use client";
import React, { useState } from "react";
import styles from "./calculatorData.module.scss";
import classNames from "classnames";
import PipValueCalculator from "../pipValueCalculator";
import PositionSizeCalculator from "../positionSizeCalculator";
import CurrencyCorrelation from "../currencyCorrelation";

export default function CalculatorData() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Pip Value", "Position Size", "Currency Correlation"];

  const components = [
    <PipValueCalculator key="pip" />,
    <PositionSizeCalculator key="position" />,
    <CurrencyCorrelation key="correlation" />,
  ];

  return (
    <div className={styles.calculatorData}>
      <div className="container-md">
        <div className={styles.tabAlignment}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={classNames(styles.buttonUi, {
                [styles.active]: activeTab === index,
              })}
              onClick={() => setActiveTab(index)}
            >
              <span>{tab}</span>
            </div>
          ))}
        </div>
        <div className={styles.boxCenter}>
          <div className={styles.box}>{components[activeTab]}</div>
        </div>
      </div>
    </div>
  );
}
