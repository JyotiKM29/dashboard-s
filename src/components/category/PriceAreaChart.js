import React, { useContext, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { ThemeContext } from '../../context/ThemeProvider';

const PriceAreaChart = () => {
  const chartRef = useRef(null);
  const {theme} = useContext(ThemeContext);

  const applyToolbarStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
      .apexcharts-toolbar {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  };

  useEffect(() => {
    const labelColor = theme === 'dark' ? '#f1f5f9' : '#020617';
    applyToolbarStyles();

    const options = {
     
      series: [

        {
          name: "Price",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "free",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "string",
        categories: [
          "Self & Home",
          "Creative Fun",
          "Finance & Work",
          "Info & Learning",
          "Travel & Maps",
          "Shopping",
          "Family",
        ],
        labels: {
          style: {
            colors: labelColor,
          },
        },
      },
      grid: {
        borderColor: "rgba(0,0,0,0)",
        padding: {
          top: -10,
        },
      },
      markers: {
        // strokeColor: "#172554",
      },
      tooltip: {
       
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

  return <div id="chart" ref={chartRef} style={{ height: "100%" }}></div>;
};

export default PriceAreaChart;
