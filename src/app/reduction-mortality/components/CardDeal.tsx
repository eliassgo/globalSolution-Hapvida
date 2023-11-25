'use client';
import Image from 'next/image';

import Apple from '@/app/transmissible-disease/components/Icons/Apple';
import Google from '@/app/transmissible-disease/components/Icons/Google';
import styles, { layout } from '@/constant/style';

import app from '~/images/app-infantil.png';

export const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Aplicativos para Monitoramento Pediátrico
        <br className='hidden sm:block' />
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        A tecnologia não apenas auxilia os profissionais de saúde, mas também
        capacita os pais na monitorização do desenvolvimento e saúde de seus
        filhos. Alguns aplicativos notáveis incluem: Growth Tracker: Permite que
        os pais registrem o crescimento, peso e altura de seus filhos,
        fornecendo gráficos visuais para acompanhamento. Vacinação em Dia:
        Aplicativos dedicados ajudam os pais a manterem registros precisos das
        vacinas recebidas por seus filhos, com lembretes automáticos para doses
        subsequentes. Diário de Desenvolvimento: Facilita o registro de marcos
        de desenvolvimento, desde os primeiros passos até as primeiras palavras,
        auxiliando os pais a identificar eventuais atrasos no desenvolvimento.
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
