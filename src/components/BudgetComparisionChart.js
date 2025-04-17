"use client";

import { BarChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function BudgetComparisonChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="actual" fill="#8884d8" />
        <Line dataKey="budget" stroke="#FF8042" />
      </BarChart>
    </ResponsiveContainer>
  );
}