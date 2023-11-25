'use client';

import styles from '@/constant/style';

import { Button } from './Button';

export const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
  >
    <div className='flex flex-1 flex-col'>
      <h2 className={styles.heading2}>
        Saúde em Foco: Prevenção de Doenças Transmissíveis com Hapvida
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[5000px]`}>
        Explore conosco o universo da prevenção de doenças transmissíveis
        através dos serviços inovadores da Hapvida. Descubra como nossos
        aplicativos facilitam a localização de centros de saúde, proporcionando
        acesso fácil e ágil a serviços médicos essenciais. Além disso, explore
        as vantagens da telemedicina, ferramenta valiosa especialmente para
        áreas remotas. Esteja à frente na prevenção, conte com a expertise da
        Hapvida na sua jornada para uma vida mais saudável e protegida.
      </p>
    </div>
    <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
      <Button
        styles='text-black'
        href='https://hapvida.com.br/'
        text='Saiba mais'
      />
    </div>
  </section>
);
