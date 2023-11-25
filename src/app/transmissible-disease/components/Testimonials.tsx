'use client';
import { feedback } from '@/app/transmissible-disease/components/constants';
import styles from '@/constant/style';

import { FeedbackCard } from './index';

export const Testimonials = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
  >
    <div className='blue__gradient absolute -right-[50%] z-0 h-[60%] w-[60%] rounded-full' />

    <div className='relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row'>
      <h1 className={styles.heading2}>
        Qual a importancia da <br className='hidden sm:block' /> Prevenção de
        Doenças Transmissíveis
      </h1>
      <div className='mt-6 w-full md:mt-0'>
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
          Veja feedbacks de especialistas e profissionais da saúde sobre a
          importância da prevenção de doenças transmissíveis.
        </p>
      </div>
    </div>

    <div className='feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} feedback={card} />
      ))}
    </div>
  </section>
);
