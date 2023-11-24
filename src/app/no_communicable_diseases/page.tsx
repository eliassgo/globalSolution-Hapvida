import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

import { Overview } from '@/app/no_communicable_diseases/components/overview';

import banner_section_01 from '~/images/banner_section_01.png';
import banner01 from '~/images/banner-01.jpg';
import bem_estar from '~/images/bem-estar.png';
import diabetes from '~/images/diabetes.png';
import health from '~/images/health.png';
import hipertensão from '~/images/hipertensão.png';
import image05 from '~/images/image-05.png';
import mental_health from '~/images/mental-health.png';
import obesidade from '~/images/obesidade.png';
import meta_ods from '~/images/sem-degrade-4.png';

export default function No_Communicable_Diseases() {
  return (
    <main className='bg-slate-200'>
      <div className='mx-auto w-4/5 pt-20'>
        <section className='mb-10 flex text-black'>
          <Image
            src={banner01}
            alt='imagem de paciente sendo atendido'
            className='w-1/2'
          />
          <div className='ml-10'>
            <h2 className='mb-10'>Conhecendo e Combatendo:</h2>
            <h1 className='mb-10'>
              Estratégias de Prevenção e Tratamento de Doenças Não
              Transmissíveis
            </h1>
            <p className='mb-2 font-bold text-current'>
              "As doenças não transmissíveis (DNTs) são as maiores causadoras de
              mortes globalmente, sendo responsáveis por 71% de todas as mortes
              no mundo."
            </p>
            <p className='text-xs font-bold italic	text-slate-700'>
              Fonte:{' '}
              <a
                className='hover:underline'
                href='https://unaids.org.br/tag/dnts/'
                target='_blanck'
              >
                UNAIDS Brasil
              </a>
              . Acessado em 23/11/2023.
            </p>
          </div>
        </section>
        <Separator className='my-5 h-0.5 bg-zinc-600 ' />
        <div className='flex h-5 items-center space-x-4 font-bold text-black'>
          <div>
            <h3 className='text-emerald-500 '>EXPLORE</h3>
          </div>
          <Separator orientation='vertical' className='my-10 bg-black ' />
          <div className='hover:text-sky-700  hover:underline'>
            <a href=''>Saúde Mental</a>
          </div>
          <Separator orientation='vertical' className='my-10 bg-black' />
          <div className='hover:text-sky-700 hover:underline'>
            <a href=''>Bem-estar</a>
          </div>
          <Separator orientation='vertical' className='my-10 bg-black' />
          <div className='hover:text-sky-700 hover:underline'>
            <a href=''>Diabetes</a>
          </div>
          <Separator orientation='vertical' className='my-10 bg-black' />
          <div className='hover:text-sky-700 hover:underline'>
            <a href=''>Trissomias</a>
          </div>
          <Separator orientation='vertical' className='my-10 bg-black' />
          <div className='hover:text-sky-700 hover:underline'>
            <a href=''>Obesidade</a>
          </div>
          <Separator orientation='vertical' className='my-10 bg-black' />
          <div className='hover:text-sky-700 hover:underline'>
            <a href=''>Hipertensão</a>
          </div>
        </div>
      </div>
      <section className='mx-auto w-4/5'>
        <div className='relative my-10'>
          <div className='relative flex-shrink-0'>
            <Image src={banner_section_01} alt='' />
          </div>
          <div className='absolute inset-1 flex flex-col items-end justify-center pr-20 text-white '>
            <div className='mb-5 text-right'>
              <h1 className='mb-4 text-4xl font-bold'>
                Educação para a Saúde:
              </h1>
              <h1 className='text-4xl font-bold'>Doenças Não Transmissíveis</h1>
            </div>
            <div className='mx-auto flex justify-end text-right'>
              <p className='w-1/2 '>
                As doenças crônicas vitimam 38 milhões de pessoas ao redor do
                planeta e são a maior causa de morte em todo o mundo. Apesar de
                soar alarmista, esses dados da Organização Mundial de Saúde
                (OMS) revelam uma realidade preocupante. A maioria das doenças
                crônicas é quase ou completamente assintomática e apresentam
                quadros críticos pontuais – que é geralmente quando o paciente
                resolve começar ou recomeçar seu tratamento. Segundo o
                Ministério da Saúde, 57,4 milhões dos brasileiros possui ao
                menos uma das doenças crônicas não transmissíveis (DCNT). Dentre
                as mais prevalentes neste cenário estão a hipertensão, os
                problemas de coluna, o diabetes, a artrite, o reumatismo, a
                depressão e a asma. <br />
                <span className='text-xs font-bold italic	text-black'>
                  <a
                    className='hover:underline'
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

      <section className='mx-auto w-3/5 text-black'>
        <article>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <h2 className='mb-5 text-neutral-600 hover:text-sky-700'>
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
                <h2 className='my-5 text-neutral-600 hover:text-sky-700'>
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
                <h2 className='my-5 text-neutral-600 hover:text-sky-700'>
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
        <div className='mx-auto grid w-3/5 grid-cols-1 text-black'>
          <div>
            <h1 className='mb-5'>
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
              <span className='text-xs font-bold italic	text-black'>
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
            <span className='ml-10 text-xs font-bold	italic text-black'>
              Fonte: Sistema de Informações de Mortalidade – Ministério da Saúde
              - 2004{' '}
            </span>
          </div>
        </div>
      </section>

      <section className='mx-auto w-4/5 text-black'>
        <h3 className='text-cyan-500'>CONDIÇÕES</h3>
        <Separator className='mb-10 bg-cyan-500' />
        <div className='grid grid-cols-5 gap-x-6 text-center font-bold text-sky-950'>
          <div className=''>
            <Image src={bem_estar} alt='' className='h-48' />
            <h3 className='mt-5 hover:text-sky-700'> Bem-Estar</h3>
          </div>
          <div>
            <Image src={obesidade} alt='' className='h-48' />
            <h3 className='mt-5 hover:text-sky-700'>Obesidade</h3>
          </div>
          <div>
            <Image src={mental_health} alt='' className='h-48' />
            <h3 className='mt-5 hover:text-sky-700'>Saúde Mental</h3>
          </div>
          <div>
            <Image src={hipertensão} alt='' className='h-48' />
            <h3 className='mt-5 hover:text-sky-700'>Hipertensão</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='h-48' />
            <h3 className='mt-5 hover:text-sky-700'>Diabetes</h3>
          </div>
        </div>

        <section className='mx-auto mt-20 w-4/5 text-black'>
          <div className='grid grid-cols-2 gap-x-5'>
            <div>
              <h2 className='mb-5 text-left'>
                Tendências que estão moldando a abordagem contemporânea para
                prevenção e tratamento.
              </h2>
              <p>
                {' '}
                Healing starts here The right answers the first time Effective
                treatment depends on getting the right diagnosis. Our experts
                diagnose and treat the toughest medical challenges. Top-ranked
                in the U.S. Mayo Clinic has more No. 1 rankings than any other
                hospital in the nation according to U.S. News & World Report.
                Learn more about our top-ranked specialties. Why choose Mayo
                Clinic{' '}
              </p>
            </div>
            <Image
              src={image05}
              alt='mãe e filho se exercitando'
              className='rounded-lg'
            />
          </div>
        </section>
      </section>
      <section className='mx-auto w-4/5 text-black'>
        <div className='relative my-10'>
          <div className='relative flex-shrink-0'>
            <Image src={meta_ods} alt='' />
          </div>
        </div>
        <div className=' mx-auto w-3/5 text-black'>
          <div>
            <h1 className='mb-5'>
              {' '}
              Assegurar uma vida saudável e promover o bem-estar para todos, em
              todas as idades.
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
                  <h4 className='mb-5 text-neutral-600'>
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
      <section className='mx-auto mt-20 w-4/5 text-black '>
        <h3 className='text-cyan-500'>Aplicativos de Fitness e Bem-Estar</h3>
        <Separator className='mb-10 bg-cyan-500' />
        <div className='grid grid-cols-5 gap-x-6 text-start font-bold text-sky-950'>
          <div className=''>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'> Bem-Estar</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Obesidade</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Saúde Mental</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Hipertensão</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Diabetes</h3>
          </div>
        </div>

        <div className='mt-10'>
          <h3 className='text-cyan-500'>Health</h3>
          <Separator className='mb-10 bg-cyan-500' />
        </div>
        <div className='mt-20 grid grid-cols-2 gap-6'>
          <div className='flex'>
            <Image
              src={health}
              alt='mãe e filho se exercitando'
              className='mr-5 h-1/2 w-1/3'
            />
            <div>
              <h4>
                How to Find Wisdom in Food Cravings, Plus 7 Ways to Make Peace
                With…
              </h4>
              Cravings aren't the enemy. They're a tool to help you heal.
            </div>
          </div>
          <div className='flex'>
            <Image
              src={health}
              alt='mãe e filho se exercitando'
              className='mr-5 h-1/2 w-1/3'
            />
            <div>
              <h4>
                How to Find Wisdom in Food Cravings, Plus 7 Ways to Make Peace
                With…
              </h4>
              Cravings aren't the enemy. They're a tool to help you heal.
            </div>
          </div>
          <div className='flex'>
            <Image
              src={health}
              alt='mãe e filho se exercitando'
              className='mr-5 h-1/2 w-1/3'
            />
            <div>
              <h4>
                How to Find Wisdom in Food Cravings, Plus 7 Ways to Make Peace
                With…
              </h4>
              Cravings aren't the enemy. They're a tool to help you heal.
            </div>
          </div>
          <div className='flex'>
            <Image
              src={health}
              alt='mãe e filho se exercitando'
              className='mr-5 h-1/2 w-1/3'
            />
            <div>
              <h4>
                How to Find Wisdom in Food Cravings, Plus 7 Ways to Make Peace
                With…
              </h4>
              Cravings aren't the enemy. They're a tool to help you heal.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
