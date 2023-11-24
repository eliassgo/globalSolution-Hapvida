import Image from "next/image";

import {features} from "@/app/transmissible-disease/components/constants";
import styles, {layout} from "@/constant/style";

import { Button } from "./Button"

type Feature = {
  id: string;
  icon: string;
  title: string;
  content: string;
  index: number;
}

type FeatureCardProps = {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${feature.index !== features.length -1 ? "mb-6" : "mb-9"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Image src={feature.icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {feature.title}
      </h4>
      <p className="font-poppins font-semibold text-dimBlue text-[16px] leading-[24px] mb-1"> 
        {feature.content}
      </p>
    </div>
  </div>
);


export const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Impacto das doenças transmissíveis <br className="sm:block hidden"/>  na saúde pública
        </h2>
        <p
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          As doenças transmissíveis têm um impacto significativo na saúde pública, afetando populações em todo o mundo e desempenhando um papel crucial nos desafios enfrentados pelos sistemas de saúde.
        </p>
        <Button styles="mt-10" text="Saiba mais"/>
      </div>
      
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={{...feature, index: index}} />
        ))}
      </div>

    </section>
  )
}
