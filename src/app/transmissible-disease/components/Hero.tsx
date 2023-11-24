"use client"
import Image from "next/image";

import {GetStarted} from "@/app/transmissible-disease/components/GetStarted";
import styles from "@/constant/style";

import robot from "~/images/transmissible-disease/robot.png";
export const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Doenças Transmissíveis:   <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Um Guia Abrangente </span> {" "}
            <br className="sm:block hidden" />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        para a Saúde Pública.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Desvendando Medidas Eficazes, Inovações Tecnológicas e Engajamento Comunitário na Defesa contra Doenças Infecciosas.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={robot} alt="billing" className="w-[669px] h-[675px] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient"/>

      </div>
    </section>
  )
}
