'use client';
import Image from 'next/image';

import Apple from '@/components/Icons/Apple';
import Google from '@/components/Icons/Google';

import styles, { layout } from '@/constant/style';

import app from '~/images/transmissible-disease/app.png';

export const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Conectando Saúde <br className='hidden sm:block' /> Inovações na Jornada
        pelos Cuidados Médicos
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Explore o futuro dos cuidados de saúde. Navegue pelas inovações que
        estão moldando a jornada para cuidados médicos abrangentes. Descubra
        aplicativos que não apenas facilitam a localização de centros de saúde,
        mas transformam a experiência do usuário ao fornecer detalhes
        abrangentes, agendamento online e feedback da comunidade. Mergulhe na
        revolução da telemedicina, entenda o papel crucial da vigilância
        epidemiológica e explore estratégias para promover o acesso fácil a
        serviços de saúde. Conecte-se a inovações, desbrave novos caminhos para
        cuidados médicos e fortaleça sua jornada rumo a uma vida mais saudável e
        informada.
      </p>
      <div className='mt-6 flex w-full flex-row flex-wrap justify-center sm:mt-10 sm:justify-start'>
        <Apple />
        <Google />
        {/* <Image src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" /> */}
        {/* <Image src={google} alt="play_store" className="w-[128px] h-[42px] object-contain cursor-pointer" /> */}
      </div>
      {/* <Button styles="mt-10 rounded"/> */}
    </div>

    <div className={layout.sectionImg}>
      <Image src={app} alt='card' className='h-[100%] w-[370px]' />
    </div>
  </section>
);
