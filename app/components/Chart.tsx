"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import useTaskStore from "../store";

export function Chart() {
  const { getDailyGoals } = useTaskStore();
  const data = getDailyGoals();

  return (
    <ResponsiveContainer width="100%" height={200} className="text-xs">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: -32,
          bottom: 0,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Bar dataKey="progress" fill="#5a92cb" barSize={14}>
          <LabelList dataKey="progress" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
