import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Overview } from '@/app/no_communicable_diseases/components/overview';

const Article = () => {
  return (
    <>
      <section className='text-foreground mx-auto w-3/5'>
        <article>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <h2 className='mb-5 text-neutral-600 hover:text-sky-700 lg:text-3xl'>
                  O que é considerada uma doença crônica?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Uma doença crônica é caracterizada pelos seguintes elementos:
                </p>
                <ul className='my-5 ml-10 list-disc font-bold leading-loose'>
                  <li>Condição não tratada em três meses;</li>
                  <li>Não fatal no curto prazo (não emergencial);</li>
                  <li>Quando apresenta quadros pontuais graves.</li>
                </ul>
                <p>
                  Apesar de não emergencial é muito importante cuidar desse tipo
                  de condição. Isso porque, na melhor das hipóteses, ela afeta a
                  qualidade de vida e pode restringir a vida da pessoa em
                  diversos aspectos.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
        <article>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <h2 className='my-5 text-neutral-600 hover:text-sky-700 lg:text-3xl'>
                  Tipos de doenças crônicas não transmissíveis
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>As DCNTs podem ser agrupadas em duas categorias:</p>
                <ul className='my-5 ml-10 list-disc leading-loose'>
                  <li>
                    {' '}
                    <span className='font-bold'>Congênitas: </span> condições
                    com as quais o indivíduo nasce ou que surgem nos primeiros
                    meses após o nascimento. Exemplos são as cardiopatias
                    congênitas, fenilcetonúria e espinha bífida;
                  </li>
                  <li>
                    {' '}
                    <span className='font-bold'>
                      Não congênitas ou infecciosas:
                    </span>{' '}
                    estas, por outro lado, são comumente originárias de
                    organismos invasores. Nesse caso, é como se hospedeiro
                    (corpo) e invasor (infecção) chegassem a um equilíbrio
                    temporário. Seu tratamento é lento e às vezes inexistente.{' '}
                  </li>
                </ul>
                <p>
                  Apesar de não emergencial é muito importante cuidar desse tipo
                  de condição. Isso porque, na melhor das hipóteses, ela afeta a
                  qualidade de vida e pode restringir a vida da pessoa em
                  diversos aspectos.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
        <article>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <h2 className='my-5 text-neutral-600 hover:text-sky-700 lg:text-3xl'>
                  Fatores de risco
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  As doenças crônicas não transmissíveis geralmente são o
                  resultado de diversos fatores como os genéticos, ambientais,
                  fisiológicos e até mesmo comportamentais, ou seja, de acordo
                  com o estilo de vida da pessoa. Nesse último sentido, podemos
                  pontuar como super fatores de risco o uso de drogas e
                  dependentes químicos, como o cigarro e álcool. .
                </p>
                <br />
                <p>
                  Além disso, a falta de atividades físicas e dietas pobres em
                  nutrientes corroboram para um sistema imunológico mais fraco e
                  consequentemente mais propenso a infecções.
                </p>
                <br />
                <p>
                  De acordo com a OMS, a poluição do ar também é contribui para
                  o aparecimento das doenças crônicas não transmissíveis. Por
                  outro lado, sexo, idade, genética e até mesmo escolaridade
                  representam fatores de risco. De acordo com a Secretaria de
                  Saúde do Estado de São Paulo:
                </p>
                <br />
                <p>
                  “Nas próximas duas décadas na América Latina e Caribe
                  estima-se que haverá quase o triplo da incidência de doença
                  isquêmica do coração e de acidente cerebrovascular. As
                  populações mais vulneráveis têm maior probabilidade de
                  desenvolver doenças crônicas e as famílias de baixa renda de
                  serem afetadas por elas”.
                </p>
                <br />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      <section className='my-20'>
        <div className='text-foreground mx-auto grid w-3/5 grid-cols-1'>
          <div>
            <h1 className='mb-5 lg:text-2xl'>
              {' '}
              Mortalidade Proporcional segundo causas selecionadas- Brasil 2003
            </h1>
            <p className='mb-5'>
              A magnitude de parte das DCNT pode ser avaliada pelas doenças
              cardiovasculares, responsáveis por 31% do total de óbitos por
              causas conhecidas. As neoplasias representam a segunda causa de
              óbitos, com cerca de 15% em 2003. No Brasil, as estimativas para o
              ano de 2005 apontam que ocorrerão 467.440 casos novos de câncer
              (INCA, 2005). Segundo projeções do Instituto Nacional do Câncer,
              os tipos de câncer com maior incidência, à exceção de pele não
              melanoma, serão os de próstata e pulmão no sexo masculino e mama e
              colo do útero para o sexo feminino, acompanhando a mesma
              tendência. observada no mundo (INCA, 2005)
              <span className='text-foreground text-xs font-bold	italic'>
                <a
                  className='hover:underline'
                  href='https://bvsms.saude.gov.br/bvs/publicacoes/DCNT.pdf'
                  target='_blanck'
                >
                  . (BVSMS Saude Gov Br
                </a>
                . Acessado em 23/11/2023.)
              </span>
            </p>
          </div>
          <div>
            <Overview />
            <span className='text-foreground ml-10 text-xs	font-bold italic'>
              Fonte: Sistema de Informações de Mortalidade – Ministério da Saúde
              - 2004{' '}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
