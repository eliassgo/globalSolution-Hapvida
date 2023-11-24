"use client"
import Image from "next/image";
import app from "public/images/transmissible-disease/app.png";
import apple from "public/images/transmissible-disease/apple_store.png";
import google from "public/images/transmissible-disease/play_store.png";

import styles, {layout} from "@/constant/style";

export const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Conectando Saúde <br className="sm:block hidden"/> Inovações na Jornada pelos Cuidados Médicos
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explore o futuro dos cuidados de saúde. Navegue pelas inovações que estão moldando a jornada para cuidados médicos abrangentes. Descubra aplicativos que não apenas facilitam a localização de centros de saúde, mas transformam a experiência do usuário ao fornecer detalhes abrangentes, agendamento online e feedback da comunidade. Mergulhe na revolução da telemedicina, entenda o papel crucial da vigilância epidemiológica e explore estratégias para promover o acesso fácil a serviços de saúde. Conecte-se a inovações, desbrave novos caminhos para cuidados médicos e fortaleça sua jornada rumo a uma vida mais saudável e informada.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 w-full sm:justify-start justify-center">
        <Image src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <Image src={google} alt="play_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    {/* <Button styles="mt-10 rounded"/> */}
    </div>

    <div className={layout.sectionImg}>
      <Image src={app} alt="card" className="w-[370px] h-[100%]" />
    </div>


  </section>
)
