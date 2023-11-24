import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import AguaImage from '~/images/health-improvement/agua.png';
import BannerImage from '~/images/health-improvement/banner.png';
import ExercicioImage from '~/images/health-improvement/exercicio.png';
import MentalImage from '~/images/health-improvement/mental.png';

const HealthImprovementPage: React.FC = () => {
  return (
    <div className='container mx-auto mt-8 p-8 text-center'>
      <Head>
        <title>Melhoria geral da saúde</title>
        <meta
          name='description'
          content='Página sobre a melhoria geral da saúde'
        />
      </Head>
      <h1 className='mb-6 text-4xl font-bold'>Melhoria Geral da Saúde</h1>
      <div className='mb-8'>
        <Image
          src={BannerImage}
          alt='Banner Melhoria da Saúde'
          className='w-full rounded-lg'
        />
      </div>
      <div className='mb-8 flex items-center justify-center'>
        <div className='mx-4 flex-1' style={{ width: '33%' }}>
          <div style={{ height: '180px' }}>
            <Image
              src={AguaImage}
              alt='Imagem 1'
              className='mb-2 h-full w-full rounded-full'
            />
          </div>
          <p className='text-sm'>
            Beber água é uma das formas mais simples e eficazes de melhorar a
            saúde. Nosso corpo depende desse líquido vital para funcionar
            adequadamente.
          </p>
        </div>
        <div className='mx-4 flex-1' style={{ width: '33%' }}>
          <div style={{ height: '180px' }}>
            <Image
              src={MentalImage}
              alt='Imagem 2'
              className='mb-2 h-full w-full rounded-full'
            />
          </div>
          <p className='text-sm'>
            A saúde mental é tão importante quanto a saúde física, e várias
            práticas podem contribuir para seu aprimoramento.{' '}
          </p>
        </div>

        <div className='mx-4 flex-1' style={{ width: '33%' }}>
          <div style={{ height: '180px' }}>
            <Image
              src={ExercicioImage}
              alt='Imagem 3'
              className='mb-2 h-full w-full rounded-full'
            />
          </div>
          <p className='text-sm'>
            A prática regular de exercícios físicos oferece uma infinidade de
            benefícios para a saúde, afetando positivamente tanto o corpo quanto
            a mente.
          </p>
        </div>
      </div>

      <section className='text-foreground mx-auto w-3/5'>
        <article>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <h2 className='mb-5 text-neutral-600 hover:text-sky-700'>
                  Pontos-chave sobre como a água pode melhorar a saúde:
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <h4 className='mb-2 text-lg font-semibold'>Hidratação:</h4>
                <p className='mb-2 leading-7'>
                  A água é essencial para manter o corpo hidratado. Isso é
                  fundamental para todas <br /> as funções corporais, desde a
                  regulação da temperatura até a lubrificação das articulações.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>Saúde Digestiva:</h4>
                <p className='mb-2 leading-7'>
                  Beber água ajuda na digestão, auxiliando na quebra de
                  alimentos e na absorção de nutrientes. <br /> Também pode
                  prevenir a constipação, mantendo o trato digestivo funcionando
                  sem problemas.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>Desintoxicação:</h4>
                <p className='mb-2 leading-7'>
                  A água atua como um meio de transporte para resíduos e
                  toxinas, ajudando o corpo a eliminá-los <br /> através da
                  urina e do suor. Isso é crucial para o bom funcionamento dos
                  rins e do sistema excretor.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>Função Cerebral:</h4>
                <p className='mb-2 leading-7'>
                  Manter-se hidratado é fundamental para um bom funcionamento
                  cognitivo. A desidratação pode <br /> levar à diminuição da
                  concentração, fadiga e dores de cabeça.
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
                  Pontos-chave sobre como a saúde mental pode melhorar a saúde:
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <h4 className='mb-2 text-lg font-semibold'>
                  Descanso Adequado:
                </h4>
                <p className='mb-2 leading-7'>
                  O sono desempenha um papel crucial na saúde mental. A falta de
                  sono pode afetar o humor, a concentração <br />e a capacidade
                  de lidar com o estresse. Estabelecer uma rotina de sono
                  saudável é fundamental.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>
                  Gerenciamento de Estresse:
                </h4>
                <p className='mb-2 leading-7'>
                  Encontrar maneiras de lidar com o estresse, seja por meio de
                  técnicas de respiração, hobbies, <br />
                  atividades criativas ou terapia, é essencial para promover a
                  saúde mental.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>
                  Busca por Ajuda Profissional:
                </h4>
                <p className='mb-2 leading-7'>
                  Buscar aconselhamento de um profissional de saúde mental, como
                  um psicólogo ou psiquiatra,
                  <br /> é fundamental se estiver enfrentando dificuldades
                  emocionais significativas.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>
                  Tempo para o Lazer:
                </h4>
                <p className='mb-2 leading-7'>
                  Reservar tempo para atividades que trazem prazer e relaxamento
                  é crucial. Isso pode <br />
                  incluir hobbies, leitura, música, passeios ao ar livre, entre
                  outros.
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
                  Pontos-chave sobre como o exercício físico pode melhorar a
                  saúde:
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <h4 className='mb-2 text-lg font-semibold'>
                  Saúde Cardiovascular:
                </h4>
                <p className='mb-2 leading-7'>
                  Exercícios aeróbicos, como corrida, natação e ciclismo,
                  fortalecem o coração e os vasos sanguíneos,
                  <br /> melhorando a circulação e reduzindo o risco de doenças
                  cardíacas.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>
                  Controle do Peso:
                </h4>
                <p className='mb-2 leading-7'>
                  A atividade física ajuda na queima de calorias, auxiliando na
                  perda de peso e na manutenção de um <br />
                  peso saudável, reduzindo assim o risco de obesidade e
                  problemas associados.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>
                  Fortalecimento Muscular e Ósseo:
                </h4>
                <p className='mb-2 leading-7'>
                  Exercícios de resistência, como musculação ou levantamento de
                  peso, fortalecem os músculos e ossos, <br />
                  prevenindo a perda de massa muscular e osteoporose com o
                  envelhecimento.
                </p>
                <h4 className='mb-2 text-lg font-semibold'>
                  Redução do Risco de Doenças Crônicas:
                </h4>
                <p className='mb-2 leading-7'>
                  A atividade física regular pode ajudar na prevenção de uma
                  série de condições de saúde, como diabetes tipo 2,
                  <br /> pressão alta e certos tipos de câncer.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </section>
    </div>
  );
};

export default HealthImprovementPage;
