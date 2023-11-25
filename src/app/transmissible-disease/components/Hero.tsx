'use client';
import Image from 'next/image';

import { GetStarted } from '@/app/transmissible-disease/components/GetStarted';
import styles from '@/constant/style';

import robot from '~/images/transmissible-disease/robot.png';
export const Hero = () => {
  return (
    <section
      id='home'
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className='flex w-full flex-row items-center justify-between'>
          <h1 className='font-poppins ss:text-[72px] ss:leading-[100px] flex-1 text-[52px] font-semibold leading-[75px] text-white'>
            Doenças Transmissíveis: <br className='hidden sm:block' />{' '}
            <span className='text-gradient'>Um Guia Abrangente </span>{' '}
            <br className='hidden sm:block' />
          </h1>
          <div className='ss:flex mr-0 hidden md:mr-4'>
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins ss:text-[68px] ss:leading-[100px] text-[52px] font-semibold leading-[75px] text-white'>
          para a Saúde Pública.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Desvendando Medidas Eficazes, Inovações Tecnológicas e Engajamento
          Comunitário na Defesa contra Doenças Infecciosas.
        </p>
      </div>

      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <Image
          src={robot}
          alt='billing'
          className='relative z-[5] h-[675px] w-[669px]'
        />
        <div className='pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]' />
        <div className='white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
        <div className='blue__gradient absolute right-20 z-[0] h-[50%] w-[50%]' />
      </div>
    </section>
  );
};
