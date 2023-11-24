'use client';

import Image from 'next/image';

import { Separator } from '@/components/ui/separator';

import Article from '@/app/no_communicable_diseases/components/article';
import Banner from '@/app/no_communicable_diseases/components/banner';
import Card_diseases from '@/app/no_communicable_diseases/components/card-diseases';
import Hero from '@/app/no_communicable_diseases/components/hero';
import Living_health from '@/app/no_communicable_diseases/components/living_health';
import Ods_section from '@/app/no_communicable_diseases/components/ods_section';

import health from '~/images/health.png';

export default function No_Communicable_Diseases() {
  return (
    <>
      <div className='mx-auto w-4/5 pt-20'>
        <Hero />
      </div>
      <Banner />
      <Article />
      <Card_diseases />

      <section className='text-foreground mx-auto mt-10 grid w-4/5 grid-cols-1 lg:grid-cols-2 lg:py-10'>
        <div>
          <h2 className='mb-5 text-left lg:text-2xl'>
            Tendências que estão moldando a abordagem contemporânea para
            prevenção e tratamento.
          </h2>
          <p className='mr-4'>
            A inteligência artificial está transformando o modo como os
            profissionais de saúde diagnosticam e tratam doenças. Algoritmos de
            IA podem analisar grandes conjuntos de dados e identificar padrões
            que seriam difíceis de perceber pelos humanos. Eles vêm sendo usados
            para detectar doenças em estágios iniciais, personalizar tratamentos
            e até desenvolver novos medicamentos. A telemedicina possibilita que
            os pacientes consultem médicos e recebam cuidados médicos sem sair
            de casa. Por meio de videoconferências, mensagens e aplicativos
            móveis, a telemedicina tornou o acesso à saúde mais conveniente, em
            especial em áreas rurais e remotas.
          </p>
          <p className='text-xs font-bold italic	text-slate-700'>
            Fonte:{' '}
            <a
              className='hover:underline'
              href='https://summitsaude.estadao.com.br/tecnologia-na-saude/futuro-em-foco-5-tecnologias-que-estao-revolucionando-a-saude/#:~:text=Terapia%20gen%C3%A9tica%20e%20medicina%20personalizada&text=A%20intelig%C3%AAncia%20artificial%2C%20os%20dispositivos,inova%C3%A7%C3%B5es%20mais%20impactantes%20desse%20campo.'
              target='_blanck'
            >
              ESTADÃO - Saúde e Bem-Estar
            </a>
            . Acessado em 23/11/2023.
          </p>
        </div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/yoeRRCgnvN4?si=P6P2BhgYvdZ1u6-p'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </section>

      <Living_health />
      <Ods_section />

      <section className='text-foreground mx-auto mt-20 w-4/5 '>
        <div className='mt-10'>
          <h3 className='text-cyan-500'>Health</h3>
          <Separator className='mb-10 bg-cyan-500' />
        </div>
        <div className='mt-20 grid grid-cols-1 gap-6'>
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
    </>
  );
}
