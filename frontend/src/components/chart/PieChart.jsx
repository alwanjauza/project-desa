import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { UserData } from "../../data/penduduk";

function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: UserData.map((data) => data.gender),
        datasets: [
          {
            label: "Jumlah Penduduk",
            data: UserData.map((data) => data.jumlah),
            backgroundColor: ["#36A2EB", "#FF6384"],
            borderColor: ["#36A2EB", "#FF6384"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Jumlah Penduduk Berdasarkan Jenis Kelamin 2020",
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} className='w-full' />
    </div>
  );
}

export default PieChart;
