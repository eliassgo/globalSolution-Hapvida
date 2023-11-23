'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Ap. Circulatório',
    total: 310,
  },
  {
    name: 'Neoplasias',
    total: 150,
  },
  {
    name: 'C.Externas',
    total: 110,
  },
  {
    name: 'X. Respiratório',
    total: 100,
  },
  {
    name: 'Metabólicas',
    total: 90,
  },
  {
    name: 'Aparelho D.',
    total: 70,
  },
  {
    name: 'Perasitárias',
    total: 43,
  },
  {
    name: 'Perinais',
    total: 39,
  },
  {
    name: 'Geniturinário',
    total: 35,
  },
  {
    name: 'Sistema N',
    total: 30,
  },
  {
    name: 'Malformações C.',
    total: 23,
  },
];

export function Overview() {
  const totalSum = data.reduce((sum, item) => sum + item.total, 0);
  const dataWithPorcent = data.map((item) => ({
    ...item,
    percentage: (item.total / totalSum) * 100,
  }));

  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={dataWithPorcent}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          interval={0}
        />
        <YAxis
          type='number'
          domain={[0, 1]}
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar dataKey='percentage' fill='#082f49' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
