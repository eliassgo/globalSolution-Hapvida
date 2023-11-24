import Navbar from "@/app/transmissible-disease/components/Navbar/nav";
import styles from "@/constant/style";

export function SiteHeader() {
  return (
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar/>
        </div>
      </div>
  );
}
