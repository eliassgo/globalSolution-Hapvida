import Image from 'next/image';
import React from 'react';

import { Separator } from '@/components/ui/separator';

import diabetes from '~/images/';

const Living_health = () => {
  return (
    <div className='text-foreground mx-auto mt-20 w-4/5 '>
      <h3 className='text-cyan-500'>
        Conectando Saúde e Tecnologia: Apps que Transformam Vidas
      </h3>
      <Separator className='mb-10 bg-cyan-500' />
      <div className='grid grid-cols-2 justify-items-center text-start font-bold text-sky-950 lg:grid-cols-5'>
        <div className='flex flex-col items-center'>
          <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
          <h3 className='mt-5'> Bem-Estar</h3>
        </div>
        <div className='mb-5 flex flex-col items-center'>
          <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
          <h3 className='mt-5'>Obesidade</h3>
        </div>
        <div className='mb-5 flex flex-col items-center'>
          <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
          <h3 className='mt-5'>Saúde Mental</h3>
        </div>
        <div className='mb-5 flex flex-col items-center'>
          <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
          <h3 className='mt-5'>Hipertensão</h3>
        </div>
        <div className='mb-5 flex flex-col items-center'>
          <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
          <h3 className='mt-5'>Diabetes</h3>
        </div>
      </div>
    </div>
  );
};

export default Living_health;
