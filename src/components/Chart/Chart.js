import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxChartValue = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxChartValue}
        />
      ))}
    </div>
  );
}
