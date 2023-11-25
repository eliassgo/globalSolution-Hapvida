'use client';
import styles from '@/constant/style';

export const Testimonials = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
  >
    <div className='blue__gradient absolute -right-[50%] z-0 h-[60%] w-[60%] rounded-full' />

    <div className='relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row'>
      <h1 className={styles.heading2}>
        Dicas de Cuidados Preventivos e Vacinação Infantil{' '}
        <br className='hidden sm:block' />
      </h1>
      <div className='mt-6 w-full md:mt-0'>
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
          Além de tecnologias específicas, é fundamental fornecer informações
          sobre práticas de cuidados preventivos. Destacamos algumas dicas
          importantes:
          <br />
          Amamentação: Incentivar a amamentação exclusiva nos primeiros seis
          meses de vida fortalece o sistema imunológico e fornece nutrientes
          essenciais.
          <br />
          Higiene Adequada: Orientações sobre práticas de higiene, como lavagem
          das mãos, ajudam a prevenir infecções que podem ser especialmente
          prejudiciais aos recém-nascidos.
          <br />
          Calendário de Vacinação: Fornecer informações detalhadas sobre o
          calendário de vacinação infantil, enfatizando a importância da
          imunização para prevenir doenças graves.
        </p>
      </div>
    </div>
  </section>
);
