import Image from 'next/image';
import React from 'react';

import banner_section_01 from '~/images/banner_section_01.png';
const Banner = () => {
  return (
    <section className='mx-auto w-4/5'>
      <div className='md:mx-w-sm relative my-10 md:flex md:flex-col'>
        <div className='relative flex-shrink-0'>
          <Image src={banner_section_01} alt='' />
        </div>
        <div className='md:absolute md:mr-10 md:mt-5 md:font-bold md:text-black lg:mt-20 lg:text-white'>
          <div className='mb-5 text-center md:mb-0 md:text-right '>
            <h1 className='mb-4 text-2xl font-bold md:mb-0 md:mt-2 md:text-base lg:mb-1 lg:text-3xl'>
              Educação para a Saúde:
            </h1>
            <h1 className='text-2xl font-bold md:text-base lg:mb-3 lg:text-4xl'>
              Doenças Não Transmissíveis
            </h1>
          </div>
          <div className='mx-auto text-center md:flex md:justify-end md:text-right md:text-xs lg:text-base'>
            <p className='md:w-2/4'>
              As doenças crônicas vitimam 38 milhões de pessoas ao redor do
              planeta e são a maior causa de morte em todo o mundo. Apesar de
              soar alarmista, esses dados da Organização Mundial de Saúde (OMS)
              revelam uma realidade preocupante. A maioria das doenças crônicas
              é quase ou completamente assintomática e apresentam quadros
              críticos pontuais – que é geralmente quando o paciente resolve
              começar ou recomeçar seu tratamento.
              <br />
              <p className='md:hidden lg:block'>
                Segundo o Ministério da Saúde, 57,4 milhões dos brasileiros
                possui ao menos uma das doenças crônicas não transmissíveis
                (DCNT). Dentre as mais prevalentes neste cenário estão a
                hipertensão, os problemas de coluna, o diabetes, a artrite, o
                reumatismo, a depressão e a asma.
              </p>
              <span className='text-foreground text-xs font-bold italic md:text-black'>
                <a
                  className='hover:underline md:text-xs'
                  href='https://www.clinicaceu.com.br/blog/doencas-cronicas-nao-transmissiveis/'
                  target='_blanck'
                >
                  CLINICA CEU
                </a>
                . Acessado em 23/11/2023.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
