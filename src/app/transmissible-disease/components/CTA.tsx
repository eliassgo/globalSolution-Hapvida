'use client';

import styles from '@/constant/style';

import { Button } from './Button';

export const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
  >
    <div className='flex flex-1 flex-col'>
      <h2 className={styles.heading2}>
        Objetivos de desenvolvimento sustentável
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[5000px]`}>
        Até 2030, acabar com as epidemias de AIDS, tuberculose, malária e
        doenças tropicais negligenciadas, e combater a hepatite, doenças
        transmitidas pela água, e outras doenças transmissíveis.
      </p>
    </div>
    <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
      <Button
        styles='text-black'
        href='https://www.ipea.gov.br/ods/ods3.html#coll_3_3'
        text='Saiba mais'
      />
    </div>
  </section>
);
