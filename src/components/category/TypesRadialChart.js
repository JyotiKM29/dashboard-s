
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const TypesRadialChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
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
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div
      id="chart"
      ref={chartRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default TypesRadialChart;
