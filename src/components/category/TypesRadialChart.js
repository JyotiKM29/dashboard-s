
import React, { useContext, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { ThemeContext } from '../../context/ThemeProvider';

const TypesRadialChart = () => {
  const chartRef = useRef(null);
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    const labelColor = theme === 'dark' ? '#f1f5f9' : '#020617';
    const options = {
      series: [44, 55, 67, 83 ,38 ],
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
              color: labelColor,
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return 249;
              },
            },
          },
        },
      },
      labels: [
        "Self & Home",
        "Creative Fun",
        "Finance & Work",
        "Info & Learning",
        "Travel & Maps",
        "Shopping",
        
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

  return (
    <div
      id="chart"
      ref={chartRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default TypesRadialChart;
