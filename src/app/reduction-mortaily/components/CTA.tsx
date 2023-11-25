'use client';

import styles from '@/constant/style';

import { Button } from './Button';

export const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} box-shadow flex-col rounded-[20px] bg-green-700 sm:flex-row`}
  >
    <div className='flex flex-1 flex-col'>
      <h2 className={styles.heading2}>
        METAS DA ODS 3: Assegurar uma vida saudável e promover o bem-estar para
        todos, em todas as idades
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[5000px]`}>
        Meta 3.1
        <br />
        Nações Unidas
        <br />
        Até 2030, reduzir a taxa de mortalidade materna global para menos de 70
        mortes por 100.000 nascidos vivos.
        <br />
        Brasil
        <br />
        Até 2030, reduzir a razão de mortalidade materna para no máximo 30
        mortes por 100.000 nascidos vivos
        <br />
        ustificativa para a adequação Na alteração da meta considerou-se que o
        Brasil já observa valores abaixo da meta global. Em 2015 a Razão de
        Mortalidade Materna (RMM) foi estimada em 62 óbitos por 100.000 nascidos
        vivos. No dia 28 de maio de 2018, em reunião da Comissão Nacional de
        combate à Mortalidade Materna e lançamento da Semana Nacional de
        Mobilização pela Saúde das Mulheres, o Ministério da Saúde assumiu a
        meta de redução de 51,7% da RMM até 2030, que corresponde a 30 mortes
        maternas por 100.000 nascidos vivos. Conceitos importantes mencionados
        na meta Razão de Mortalidade Materna: número de mortes maternas em
        determinado período por 100.000 nascidos vivos durante o mesmo período.
        Taxa de Mortalidade Materna: número de mortes maternas em determinado
        período por 100.000 mulheres em idade reprodutiva durante o mesmo
        período.
      </p>
    </div>
    <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
      <Button
        styles='text-black'
        href='https://www.ipea.gov.br/ods/ods3.html'
        text='Saiba mais'
      />
    </div>
  </section>
);
