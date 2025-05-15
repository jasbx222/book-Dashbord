'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const pieData = [
  { name: 'منتجات', value: 400 },
  { name: 'مستخدمين', value: 300 },
  { name: 'طلبات', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const ChartsPage = () => {
  return (
    <div className="p-6 space-y-12">

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">التقارير </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

    
      </div>
    </div>
  );
};

export default ChartsPage;
