import { Footer } from '@/app/transmissible-disease/components';
import styles from '@/constant/style';

export function SiteFooter() {
  return (
    <div className={`${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth} `}>
        <Footer />
      </div>
    </div>
  );
}
