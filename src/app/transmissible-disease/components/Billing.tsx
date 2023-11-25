'use client';

import Image from 'next/image';

import styles, { layout } from '@/constant/style';

import { Button } from './Button';

export const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src='https://cdn.discordapp.com/attachments/789842582829531136/1177712558917029908/image.png'
        alt='billing'
        className='relative z-[5] h-[100%] w-[100%]'
      />
      <div className='z[3] pink__gradient absolute -left-1/2 top-0 h-[50%] w-[50%] rounded-full' />
      <div />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Saúde Desvendada: <br className='hidden sm:block' /> Navegando pela
        Prevenção de Doenças Transmissíveis
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Explore um guia completo e acessível sobre a prevenção de doenças
        transmissíveis. Desvendamos os segredos das características dessas
        enfermidades, ilustrando com exemplos claros e vias de propagação
        detalhadas. Da educação à conscientização, mergulhe em parcerias
        comunitárias, avanços tecnológicos e estratégias de resposta rápida.
        Capacite-se com conhecimento tangível, unindo-se a nós na construção de
        comunidades mais resilientes e saudáveis. Saúde desvendada, a chave para
        uma vida preventiva e consciente.
      </p>
      <div className='mt-6 flex w-full flex-row flex-wrap justify-center sm:mt-10 sm:justify-start'>
        <Button
          styles='sm:mx-0 ml-0'
          text='Saiba mais'
          href='https://www.who.int/news-room/questions-and-answers'
        />
      </div>
    </div>
  </section>
);
