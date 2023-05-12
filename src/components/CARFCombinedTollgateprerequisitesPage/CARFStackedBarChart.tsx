import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Ready to Design",
    completed: 100,
    ["not started"]: 0,
    ["in progress"]: 0,
    amt: 100,
  },
  {
    name: "Ready to Build",
    completed: 34,
    ["not started"]: 33,
    ["in progress"]: 33,
    amt: 100,
  },
  {
    name: "Ready to Release",
    completed: 0,
    ["not started"]: 100,
    ["in progress"]: 0,
    amt: 100,
  },
];

export const CARFStackedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 40,
          right: 40,
          left: 40,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" stackId="a" fill="#01579B" barSize={50} />
        <Bar dataKey="in progress" stackId="a" fill="#FFA000" />
        <Bar dataKey="not started" stackId="a" fill="#B8BFCB" />
      </BarChart>
    </ResponsiveContainer>
  );
};
