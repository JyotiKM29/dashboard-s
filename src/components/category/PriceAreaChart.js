
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const PriceAreaChart = () => {
  const chartRef = useRef(null);

  const applyToolbarStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .apexcharts-toolbar {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  };

  useEffect(() => {
    applyToolbarStyles();

    const options = {
      series: [
        {
          name: 'Price',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'free',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'string',
        categories: [
            "Self & Home",
            'Creative Fun',
            'Finance & Work',
            'Info & Learning',
            'Travel & Maps',
            'Shopping',
            'Family',
          ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="chart" ref={chartRef} style={{ height: '100%' }}></div>;
};

export default PriceAreaChart;
