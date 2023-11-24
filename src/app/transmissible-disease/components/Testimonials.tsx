"use client"
import {feedback} from "@/app/transmissible-disease/components/constants";
import styles from "@/constant/style";

import { FeedbackCard } from "./index"

export const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Qual a importancia da <br className="sm:block hidden"/> Prevenção de Doenças Transmissíveis</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Veja feedbacks de especialistas e profissionais da saúde sobre a importância da prevenção de doenças transmissíveis.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} feedback={card}/>
      ))}
    </div>
  </section>
)
