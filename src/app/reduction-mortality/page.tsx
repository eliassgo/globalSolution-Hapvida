import styles from '@/constant/style';

import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Hero,
  Testimonials,
} from './components';

const ReductionMortality = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} `}>
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
          {/*<Footer/>*/}
        </div>
      </div>
    </div>
  );
};

export default ReductionMortality;
