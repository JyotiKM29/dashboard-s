
import React, { useContext, useEffect, useRef} from 'react';
import ApexCharts from 'apexcharts';
import { ThemeContext } from '../../context/Theme';

const SentimentStackedBarChart = () => {
  const chartRef = useRef(null);
  const {theme} = useContext(ThemeContext);


  useEffect(() => {
    const labelColor = theme === 'dark' ? '#f1f5f9' : '#020617';

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
          labels: {
            style: {
              colors: labelColor,
            },
          },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50,
      },
      grid: {
        borderColor: "rgba(0,0,0,0)",
        padding: {
          top: -10,
        },
      },
      yaxis: {
        show: false,
      },

      axisBorder: {
        show: false,
      },
  
      crosshairs: {
        show: false,
      },
      theme: {
        mode: theme,
      }
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [theme]);

  return <div id="chart" ref={chartRef}></div>;
};

export default SentimentStackedBarChart;
