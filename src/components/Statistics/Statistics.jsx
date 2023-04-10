import React from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="bg-emerald-50 py-10">
        <h1 className="text-4xl text-center font-bold">Statistics of My Assignment</h1>
      </div>
      <div className="bg-slate-50">
        <PieChart width={1250} height={800}>
          <Pie
            dataKey="number"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
