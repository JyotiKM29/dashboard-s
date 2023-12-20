
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const SentimentStackedBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: 'Neutral',
          data: [44, 55, 41, 67, 22, 43, 21],
        },
        {
          name: 'Positive',
          data: [13, 23, 20, 8, 13, 27, 33],
        },
        {
          name: 'Nagative',
          data: [11, 17, 15, 15, 21, 14, 15],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
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
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50,
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

  return <div id="chart" ref={chartRef}></div>;
};

export default SentimentStackedBarChart;
