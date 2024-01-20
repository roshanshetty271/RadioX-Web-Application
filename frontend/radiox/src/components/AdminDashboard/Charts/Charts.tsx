// Charts.tsx

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Charts.css';

const Charts: React.FC = () => {
  const chartOptions = {
    chart: {
      type: 'bar' as const,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const totalPatientsSeries = [
    {
      name: 'Total Patients',
      data: [100, 150],
    },
  ];

  const totalRevenueSeries = [
    {
      name: 'Total Revenue Generated',
      data: [300000, 450000],
    },
  ];

  const scansSeries = [
    {
      name: 'Scans Done',
      data: [50, 20],
    },
  ];

  const AppointmentSeries = [
    {
      name: 'Appointment',
      data: [50, 80],
    },
  ];

  return (
    <div className="charts">
      <div className="chart-item fade-in">
        <h3 className="chart-title">{totalPatientsSeries[0].name}</h3>
        <ReactApexChart
          options={{ ...chartOptions, labels: ['MAY', 'JULY'] }}
          series={totalPatientsSeries}
          type="bar"
          height={350}
        />
      </div>

      <div className="chart-item fade-in">
        <h3 className="chart-title">{totalRevenueSeries[0].name}</h3>
        <ReactApexChart
          options={{ ...chartOptions, labels: ['2021', '2022'] }}
          series={totalRevenueSeries}
          type="bar"
          height={350}
        />
      </div>

      <div className="chart-item fade-in">
        <h3 className="chart-title">{scansSeries[0].name}</h3>
        <ReactApexChart
          options={{ ...chartOptions, labels: ['Done', 'Pending'] }}
          series={scansSeries}
          type="bar"
          height={350}
        />
      </div>

      <div className="chart-item fade-in">
        <h3 className="chart-title">{AppointmentSeries[0].name}</h3>
        <ReactApexChart
          options={{ ...chartOptions, labels: ['Cancelled', 'Booked'] }}
          series={AppointmentSeries}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Charts;
