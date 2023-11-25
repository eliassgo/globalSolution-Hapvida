import React from 'react';

// import { features } from '@/app/transmissible-disease/components/constants';
import styles, { layout } from '@/constant/style';

// type Feature = {
//   id: string;
//   icon: React.FC;
//   title: string;
//   content: string;
//   index: number;
// };

// type FeatureCardProps = {
//   feature: Feature;
// };

// const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
//   <div
//     className={`flex flex-row rounded-[20px] p-6 ${
//       feature.index !== features.length - 1 ? 'mb-6' : 'mb-9'
//     } feature-card`}
//   >
//     <div
//       className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
//     >
//       <feature.icon />
//     </div>
//     <div className='ml-3 flex flex-1 flex-col'>
//       <h4 className='font-poppins mb-1 text-[18px] font-semibold leading-[23px] text-white'>
//         {feature.title}
//       </h4>
//       <p className='font-poppins text-dimBlue mb-1 text-[16px] font-semibold leading-[24px]'>
//         {feature.content}
//       </p>
//     </div>
//   </div>
// );

export const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Avanços em Equipamentos e <br className='hidden sm:block' />{' '}
          Tecnologias Neonatais
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          A tecnologia desempenha um papel crucial na redução da mortalidade
          infantil, especialmente na área da neonatologia. Avanços contínuos em
          equipamentos e tecnologias têm contribuído significativamente para
          melhorar os cuidados prestados a recém-nascidos, proporcionando
          melhores chances de sobrevivência e desenvolvimento saudável. Nesta
          página, exploraremos os últimos avanços nesta área e também
          abordaremos iniciativas inovadoras, como a telemedicina, que ampliam o
          alcance e a qualidade dos cuidados neonatais.
        </p>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Mortalidade infantil no Brasil
          <br className='hidden sm:block' />{' '}
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          A mortalidade infantil é um importante indicador de saúde e condições
          de vida de uma população. Com o cálculo da sua taxa, estima-se o risco
          de um nascido vivo morrer antes de chegar a um ano de vida. Valores
          elevados refletem precárias condições de vida e saúde e baixo nível de
          desenvolvimento social e econômico1 . No Brasil, vem-se observando um
          declínio na taxa de mortalidade nesse grupo, com uma diminuição de
          5,5% ao ano nas décadas de 1980 e 1990, e 4,4% ao ano desde 20002 .
        </p>
      </div>
    </section>
  );
};
