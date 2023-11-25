'use client';

import Image from 'next/image';

import styles, { layout } from '@/constant/style';

import virus from '~/images/telemedicine.jpg';
export const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={virus}
        alt='billing'
        className='relative z-[5] h-[100%] w-[100%]'
      />
      <div className='z[3] pink__gradient absolute -left-1/2 top-0 h-[50%] w-[50%] rounded-full' />
      <div />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Telemedicina na Assistência a Gestantes e Recém-Nascidos
        <br className='hidden sm:block' />
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        A telemedicina emergiu como uma ferramenta valiosa para aprimorar o
        acompanhamento de gestantes e recém-nascidos, especialmente em áreas
        remotas ou carentes de recursos médicos. Destacamos algumas iniciativas
        significativas: Consulta Remota Pré-Natal: A teleconsulta permite que as
        gestantes recebam cuidados médicos adequados sem a necessidade de
        deslocamento, contribuindo para a detecção precoce de problemas e o
        monitoramento regular da saúde materna. Aconselhamento à Distância:
        Profissionais de saúde podem oferecer orientações e conselhos por meio
        de plataformas virtuais, promovendo a conscientização sobre cuidados
        pré-natais e pós-natais. Monitoramento Remoto de Bebês Prematuros:
        Dispositivos de monitoramento conectados permitem que médicos monitorem
        os sinais vitais de bebês prematuros após a alta hospitalar, garantindo
        um acompanhamento contínuo de seu desenvolvimento.
      </p>
    </div>
  </section>
);
