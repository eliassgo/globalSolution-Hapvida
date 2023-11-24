'use client';
import Image from 'next/image';
import { useRef } from 'react';
import React from 'react';

import { Separator } from '@/components/ui/separator';

import ChildCard from '@/app/(home)/components/child-card';

import bem_estar from '~/images/bem-estar.png';
import diabetes from '~/images/diabetes.png';
import hipertensão from '~/images/hipertensão.png';
import mental_health from '~/images/mental-health.png';
import obesidade from '~/images/obesidade.png';
const Card_diseases = () => {
  const ref = useRef(null);

  return (
    <>
      <h3 className='text-cyan-500'>CONDIÇÕES</h3>
      <Separator className='mb-10 bg-cyan-500' />
      <div className='grid grid-cols-1 text-center font-bold text-sky-950 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5'>
        <div className='mb-5'>
          <ChildCard
            className='top-20'
            hasDecoration={true}
            image={bem_estar}
            altImage='Criança Sorrindo na frente de um notebook'
            effectDirection='top'
            inViewRef={ref}
          />
          <Image src={bem_estar} alt='' className='h-48' />
          <h3 className='mt-5 hover:text-sky-700'> Bem-Estar</h3>
        </div>
        <div className='mb-5'>
          <Image src={obesidade} alt='' className='h-48' />
          <h3 className='mt-5 hover:text-sky-700'>Obesidade</h3>
        </div>
        <div className='mb-5'>
          <Image src={mental_health} alt='' className='h-48' />
          <h3 className='mt-5 hover:text-sky-700'>Saúde Mental</h3>
        </div>
        <div className='mb-5'>
          <Image src={hipertensão} alt='' className='h-48' />
          <h3 className='mt-5 hover:text-sky-700'>Hipertensão</h3>
        </div>
        <div className='mb-5'>
          <Image src={diabetes} alt='' className='h-48' />
          <h3 className='mt-5 hover:text-sky-700'>Diabetes</h3>
        </div>
      </div>
    </>
  );
};

export default Card_diseases;
