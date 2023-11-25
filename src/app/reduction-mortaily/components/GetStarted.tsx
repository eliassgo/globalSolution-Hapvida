'use client';
import Image from 'next/image';

import styles from '@/constant/style';

import arrowUp from '~/images/transmissible-disease/arrow-up.png';

export const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} h-[100%] w-[100%] flex-col rounded-full bg-black`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins mr-2 text-[18px] font-medium leading-[23px]'>
          <span className='text-gradient'>Get</span>
        </p>
        <Image
          src={arrowUp}
          alt='arrow'
          className='h-[23px] w-[23px] object-contain'
        />
      </div>
      <p className='font-poppins text-[18px] font-medium leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
);
