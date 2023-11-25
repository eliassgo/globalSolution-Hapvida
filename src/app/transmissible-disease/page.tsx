// src/App.tsx
import styles from '@/constant/style';

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Hero,
  Stats,
  Summarizer,
  Testimonials,
} from './components';

export default function transmissible_disease() {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Summarizer />
          <Testimonials />
          <Clients />
          <CTA />
          {/*<Footer/>*/}
        </div>
      </div>
    </div>
  );
}
