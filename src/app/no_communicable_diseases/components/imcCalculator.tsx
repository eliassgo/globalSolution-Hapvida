// components/IMCCalculator.tsx
'use client';

import React, { useState } from 'react';

const IMCCalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateIMC = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
      setResult(null);
      return;
    }

    const imc = weightNum / Math.pow(heightNum, 2);
    setResult(imc);
  };

  return (
    <div className=' mt-8'>
      <h1 className='mb-4 text-2xl font-bold'>Calculadora de IMC</h1>
      <div className='mb-4 flex items-center'>
        <label htmlFor='weight' className='mr-2'>
          Peso (kg ex: 80):
        </label>
        <input
          type='text'
          id='weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className='mb-4 flex items-center'>
        <label htmlFor='height' className='mr-2'>
          Altura (m ex: 1.88):
        </label>
        <input
          type='text'
          id='height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        className='bg-blue-500 px-4 py-2 text-white'
        onClick={calculateIMC}
      >
        Calcular IMC
      </button>
      {result !== null && (
        <p className='mt-4'>
          Seu IMC é: <strong>{result.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
};

export default IMCCalculator;
