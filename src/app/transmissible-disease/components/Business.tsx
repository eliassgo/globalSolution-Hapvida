import React from 'react';

import { features } from '@/app/transmissible-disease/components/constants';
import styles, { layout } from '@/constant/style';

import { Button } from './Button';

type Feature = {
  id: string;
  icon: React.FC;
  title: string;
  content: string;
  index: number;
};

type FeatureCardProps = {
  feature: Feature;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      feature.index !== features.length - 1 ? 'mb-6' : 'mb-9'
    } feature-card`}
  >
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <feature.icon />
    </div>
    <div className='ml-3 flex flex-1 flex-col'>
      <h4 className='font-poppins mb-1 text-[18px] font-semibold leading-[23px] text-white'>
        {feature.title}
      </h4>
      <p className='font-poppins text-dimBlue mb-1 text-[16px] font-semibold leading-[24px]'>
        {feature.content}
      </p>
    </div>
  </div>
);

export const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Impacto das doenças transmissíveis <br className='hidden sm:block' />{' '}
          na saúde pública
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          As doenças transmissíveis têm um impacto significativo na saúde
          pública, afetando populações em todo o mundo e desempenhando um papel
          crucial nos desafios enfrentados pelos sistemas de saúde.
        </p>
        <Button styles='mt-10' text='Saiba mais' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={{ ...feature, index: index }}
          />
        ))}
      </div>
    </section>
  );
};
