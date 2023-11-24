"use client"

import Image from "next/image";

import {clients} from "@/app/transmissible-disease/components/constants";
import styles from "@/constant/style";
export const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w[120px]`}>
          <Image src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
        </div>
      ))}
    </div>
  </section>
)