
import React, { useContext, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

import { ThemeContext } from '../../context/Theme';

const CatgoryDonut = () => {
  const chartRef = useRef(null);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    const labelColor = theme === 'dark' ? '#f1f5f9' : '#020617';
    const categories = [
      "Creativity & Leisure",
     
      "Wellness & Home",
      "Money & Business",
      "Knowledge & Info",
      "Communication & Utility",
     
    ];

    const seriesData = [44, 55, 41, 17, 15 ];

    const options = {
      series: seriesData,
      labels: categories,
      chart: {
        type: "donut",
        height: "100%",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
              height: "auto",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
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

export default CatgoryDonut;
