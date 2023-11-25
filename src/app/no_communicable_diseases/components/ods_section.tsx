import Image from 'next/image';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import meta_ods from '~/images/sem-degrade-4.png';

const Ods_section = () => {
  return (
    <>
      <section className='text-foreground mx-auto mb-10 w-4/5 pb-20'>
        <div className='relative my-10'>
          <div className='relative flex-shrink-0'>
            <Image src={meta_ods} alt='' />
          </div>
        </div>
        <div className=' text-foreground lg:3/5 mx-auto w-4/5'>
          <div>
            <h1 className='mb-5 font-bold lg:text-3xl'>
              {' '}
              METAS DA ODS 3: Assegurar uma vida saudável e promover o bem-estar
              para todos, em todas as idades.
            </h1>
            <h4 className='mb-5'> Meta 3.4</h4>
            <h4 className='mb-5'> Nações Unidas</h4>
            <p>
              Até 2030, reduzir em um terço a mortalidade prematura por doenças
              não transmissíveis via prevenção e tratamento, e promover a saúde
              mental e o bem-estar.
            </p>
            <br />
            <h4 className='mb-5'>Brasil</h4>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  <h4 className='mb-5 text-stone-300'>
                    Até 2030, reduzir em um terço a mortalidade prematura por
                    doenças não transmissíveis via prevenção e tratamento,
                    promover a saúde mental e o bem-estar, a saúde do
                    trabalhador e da trabalhadora, e prevenir o suicídio,
                    alterando significativamente a tendência de aumento. +
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <h4>Justificativa para a adequação</h4>
                  <br />
                  <p>
                    A redação foi alterada para explicitar a necessidade de
                    enfrentar os problemas de saúde causados pelas atividades
                    laborais, que incluem problemas de saúde mental, e as
                    crescentes taxas de suicídio no Brasil.
                  </p>
                  <br />
                  <h4>Conceitos importantes mencionados na meta</h4>
                  <p>
                    Mortalidade prematura: mortes que ocorrem antes que a pessoa
                    atinja uma idade esperada. Muitas dessas mortes podem ser
                    prevenidas.
                  </p>
                  <br />
                  <p>
                    Doenças não transmissíveis: também conhecidas como doenças
                    crônicas, são doenças de longa duração e geralmente de
                    progressão lenta.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h4>Indicadores</h4>
            <p>
              3.4.1 - Taxa de mortalidade por doenças do aparelho circulatório,
              tumores malignos, diabetes mellitus e doenças crônicas
              respiratórias
            </p>
            <p>3.4.2 - Taxa de mortalidade por suicídio</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ods_section;
