"use client";
import React, { useState, useEffect } from "react";
import styles from "./currencyCorrelation.module.scss";

// Correlation Bar Component
const CorrelationBar = ({ pair, correlation, onClick }) => {
  const getBarColor = (corr) => {
    if (corr > 0.7) return "#22c55e";
    if (corr > 0.3) return "#84cc16";
    if (corr > -0.3) return "#94a3b8";
    if (corr > -0.7) return "#f97316";
    return "#ef4444";
  };

  const barColor = getBarColor(correlation);
  const barWidth = Math.abs(correlation) * 50;
  const isPositive = correlation >= 0;

  return (
    <div className={styles.correlationBarWrapper} onClick={onClick}>
      <div className={styles.pairLabel}>{pair}</div>
      
      <div className={styles.barContainer}>
        <div className={styles.barLeft}>
          {!isPositive && (
            <div
              className={styles.barFill}
              style={{
                width: `${barWidth}%`,
                background: barColor,
              }}
            />
          )}
        </div>
        
        <div className={styles.barRight}>
          {isPositive && (
            <div
              className={styles.barFill}
              style={{
                width: `${barWidth}%`,
                background: barColor,
              }}
            />
          )}
        </div>
      </div>
      
      <div className={styles.correlationValue} style={{ color: barColor }}>
        {correlation.toFixed(2)}
      </div>
    </div>
  );
};

export default function CurrencyCorrelation() {
  const currencyOptions = [
    "AUD/USD",
    "BTC/USD",
    "EUR/USD",
    "GBP/USD",
    "NZD/USD",
    "USD/CAD",
    "USD/CHF",
    "USD/JPY",
    "XAU/USD",
  ];

  const timeRangeOptions = [
    { value: "1m", label: "1 Month" },
    { value: "3m", label: "3 Months" },
    { value: "6m", label: "6 Months" },
    { value: "1y", label: "1 Year" },
  ];

  const [selectedPair, setSelectedPair] = useState("AUD/USD");
  const [timeRange, setTimeRange] = useState("1m");
  const [correlationData, setCorrelationData] = useState({});
  const [loading, setLoading] = useState(false);

  // Generate correlation data for all pairs
  const generateCorrelationData = (basePair, timeRange) => {
    const correlations = {};
    currencyOptions.forEach((pair) => {
      if (pair === basePair) return;

      const hash = (pair + basePair + timeRange)
        .split("")
        .reduce((a, b) => {
          a = ((a << 5) - a) + b.charCodeAt(0);
          return a & a;
        }, 0);

      let corr = Math.sin(hash) * 0.95;

      if (pair.includes("USD") && basePair.includes("USD")) {
        corr = Math.abs(corr) * 0.7 * (corr > 0 ? 1 : -1);
      }
      if (pair.includes("GBP") && basePair.includes("EUR")) {
        corr = Math.abs(corr) * 0.8;
      }

      correlations[pair] = corr;
    });
    return correlations;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const corrData = generateCorrelationData(selectedPair, timeRange);
        setCorrelationData(corrData);
      } catch (err) {
        console.error("Failed to fetch correlation data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPair, timeRange]);

  return (
    <div className={styles.currencyCorrelation}>
      <div className={styles.controlsSection}>
        <div className={styles.formGroup}>
          <label>Base Currency Pair</label>
          <select
            value={selectedPair}
            onChange={(e) => setSelectedPair(e.target.value)}
            className={styles.select}
          >
            {currencyOptions.map((pair) => (
              <option key={pair} value={pair}>
                {pair}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Time Range</label>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className={styles.select}
          >
            {timeRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.correlationSection}>
        {loading ? (
          <div className={styles.loadingState}>Loading correlation data...</div>
        ) : (
          <>
            <div className={styles.correlationHeader}>
              <h3>Correlation with {selectedPair}</h3>
              <p>Click on any pair to view its correlations</p>
            </div>

            <div className={styles.axisLabels}>
              <span>-1.0</span>
              <span>-0.5</span>
              <span>0.0</span>
              <span>0.5</span>
              <span>1.0</span>
            </div>

            <div className={styles.correlationBars}>
              {currencyOptions.map((pair) => {
                if (pair === selectedPair) return null;
                const pairCorr = correlationData[pair] || 0;
                return (
                  <CorrelationBar
                    key={pair}
                    pair={pair}
                    correlation={pairCorr}
                    onClick={() => setSelectedPair(pair)}
                  />
                );
              })}
            </div>

            <div className={styles.centerLine} />
          </>
        )}
      </div>

      <div className={styles.infoBox}>
        <strong>Note:</strong> This calculator uses simulated data for
        demonstration purposes. The correlation coefficient ranges from -1 to
        +1, where +1 indicates perfect positive correlation, -1 indicates
        perfect negative correlation, and 0 indicates no correlation.
      </div>
    </div>
  );
}
