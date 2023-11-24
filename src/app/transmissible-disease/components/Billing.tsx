"use client"

import Image from "next/image";

import styles, {layout} from "@/constant/style";

import { Button } from "./Button"


export const Billing = () => (
  <section id="product" className={layout.sectionReverse} >
    <div className={layout.sectionImgReverse}>
      <Image src="https://cdn.discordapp.com/attachments/789842582829531136/1177712558917029908/image.png" alt="billing"  className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      <div/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Saúde Desvendada:  <br className="sm:block hidden"/> Navegando pela Prevenção de Doenças Transmissíveis</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explore um guia completo e acessível sobre a prevenção de doenças transmissíveis. Desvendamos os segredos das características dessas enfermidades, ilustrando com exemplos claros e vias de propagação detalhadas. Da educação à conscientização, mergulhe em parcerias comunitárias, avanços tecnológicos e estratégias de resposta rápida. Capacite-se com conhecimento tangível, unindo-se a nós na construção de comunidades mais resilientes e saudáveis. Saúde desvendada, a chave para uma vida preventiva e consciente.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 w-full sm:justify-start justify-center">
        <Button styles="sm:mx-0 ml-0" text="Saiba mais" href="https://www.who.int/news-room/questions-and-answers"/>
      </div>
    </div>

  </section>
)
