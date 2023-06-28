import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ContentTemperature = () => {
  const data = [
    {
      name: "00.00",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "00.01",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "00.02",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "00.03",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "00.04",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "00.05",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "00.06",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "00.07",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "00.08",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "00.09",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "00.10",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
  return (
    <div className="py-2">
      <ResponsiveContainer width="100%" height={550}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="red" // Adjusted color to red
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContentTemperature;
