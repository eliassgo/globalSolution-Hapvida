'use client';

import Image from 'next/image';

import { clients } from '@/app/transmissible-disease/components/constants';
import styles from '@/constant/style';
export const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} min-w[120px] sm:min-w-[192px]`}
        >
          <Image
            src={client.logo}
            alt='client'
            className='w-[100px] object-contain sm:w-[192px]'
          />
        </div>
      ))}
    </div>
  </section>
);
