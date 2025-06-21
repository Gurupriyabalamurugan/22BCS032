import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const StockChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label: "Price ($)",
        data: data.map((d) => d.price),
        borderColor: "rgba(25, 118, 210, 1)", // blue
        backgroundColor: "rgba(25, 118, 210, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Price ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default StockChart;
