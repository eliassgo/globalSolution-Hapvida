import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Article from '@/app/no-transmissible-disease/components/article';
import Banner from '@/app/no-transmissible-disease/components/banner';
import Card_diseases from '@/app/no-transmissible-disease/components/card-diseases';
import Hero from '@/app/no-transmissible-disease/components/hero';
import IMCCalculator from '@/app/no-transmissible-disease/components/imcCalculator';
import Living_health from '@/app/no-transmissible-disease/components/living_health';
import Ods_section from '@/app/no-transmissible-disease/components/ods_section';

import depression_men from '~/images/depression_men.png';
import media_holiday from '~/images/media_holidays.png';
import soup from '~/images/soup.png';
import understanding from '~/images/understanding.png';

export default function NoTrnasmissibleDisease() {
  return (
    <>
      <div className='mx-auto w-4/5 pt-20'>
        <Hero />
      </div>
      <Banner />
      <Article />
      <Card_diseases />

      <section className='text-foreground mx-auto mt-10 grid w-4/5 grid-cols-1 lg:grid-cols-2 lg:py-10'>
        <div className='text-center md:text-left'>
          <h2 className='mb-5  font-bold md:font-normal lg:text-2xl'>
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
          <p className='mb-5 text-xs font-bold	italic text-slate-700 lg:mb-0'>
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
          className='mb-5 w-11/12 md:mb-0 lg:w-full'
          height='315'
          src='https://www.youtube.com/embed/yoeRRCgnvN4?si=P6P2BhgYvdZ1u6-p'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </section>

      <Living_health />
      <div className='mx-auto grid w-4/5 grid-cols-1 gap-x-5 lg:grid-cols-2'>
        <div>
          <h1 className='mb-5 text-5xl'>Calculadora de IMC</h1>
          <h3>
            A classificação do índice de massa corporal (IMC) pode ajudar a
            identificar problemas de obesidade ou desnutrição, em crianças,
            adolescentes, adultos e idosos. Além de calcular o valor de IMC,
            esta calculadora também indica qual o intervalo de peso ideal que
            deve ter para garantir uma melhor qualidade de vida. Ter um peso
            dentro do intervalo de peso ideal ajuda ainda a evitar o
            aparecimento de várias doenças crônicas, como diabetes e
            hipertensão.
          </h3>
          <IMCCalculator />
        </div>
        <div className=''>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>IMC</TableHead>
                <TableHead className='text-right'>Classificação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Menor que 18,5 </TableCell>
                <TableCell className='text-right'>Magreza</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18,5 a 24,9 </TableCell>
                <TableCell className='text-right'>Normal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>25 a 29,9</TableCell>
                <TableCell className='text-right'>Sobrepeso</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>30 a 34,9 </TableCell>
                <TableCell className='text-right'>Obesidade grau I</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>35 a 39,9</TableCell>
                <TableCell className='text-right'>Obesidade grau II</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maior que 40</TableCell>
                <TableCell className='text-right'>Obesidade grau III</TableCell>
              </TableRow>
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <Ods_section />

      <section className='text-foreground mx-auto w-4/5 '>
        <div className=''>
          <h3 className='text-2xl text-cyan-500'>Saúdo em pauta</h3>
          <Separator className='mb-10 bg-cyan-500' />
        </div>
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4'>
          <div className='flex flex-col content-center items-center px-6'>
            <Image
              src={depression_men}
              alt='mãe e filho se exercitando'
              className='mb-5 h-1/2 w-3/4 hover:opacity-50'
            />
            <a className='hover:underline' href='https://www.healthline.com/'>
              <h4>
                Quais são os sinais e sintomas da deoressão em homens adultos?
              </h4>
            </a>
            <p className='text-xs font-bold italic	text-slate-700'>
              Fonte:{' '}
              <a
                className='hover:underline'
                href='https://www.healthline.com/'
                target='_blanck'
              >
                healthline
              </a>
              . Acessado em 23/11/2023.
            </p>
          </div>
          <div className='flex flex-col items-center px-6'>
            <Image
              src={understanding}
              alt='mãe e filho se exercitando'
              className='mb-5 h-1/2 w-3/4 hover:opacity-50'
            />
            <a className='hover:underline' href='https://www.healthline.com/'>
              <h4>
                Quais são os sinais e sintomas da deoressão em homens adultos?
              </h4>
            </a>

            <p className='text-xs font-bold italic	text-slate-700'>
              Fonte:{' '}
              <a
                className='hover:underline'
                href='https://www.healthline.com/'
                target='_blanck'
              >
                healthline
              </a>
              . Acessado em 23/11/2023.
            </p>
          </div>
          <div className='flex flex-col items-center px-6'>
            <Image
              src={soup}
              alt='mãe e filho se exercitando'
              className='mb-5 h-1/2 w-3/4 hover:opacity-50'
            />
            <a className='hover:underline' href='https://www.healthline.com/'>
              <h4>
                Quais são os sinais e sintomas da deoressão em homens adultos?
              </h4>
            </a>

            <p className='text-xs font-bold italic	text-slate-700'>
              Fonte:{' '}
              <a
                className='hover:underline'
                href='https://www.healthline.com/'
                target='_blanck'
              >
                healthline
              </a>
              . Acessado em 23/11/2023.
            </p>
          </div>
          <div className='flex flex-col items-center px-6'>
            <Image
              src={media_holiday}
              alt='mãe e filho se exercitando'
              className='mb-5 h-1/2 w-3/4 hover:opacity-50'
            />
            <a className='hover:underline' href='https://www.healthline.com/'>
              <h4>
                Quais são os sinais e sintomas da deoressão em homens adultos?
              </h4>
            </a>
            <p className='text-xs font-bold italic	text-slate-700'>
              Fonte:{' '}
              <a
                className='hover:underline'
                href='https://www.healthline.com/'
                target='_blanck'
              >
                healthline
              </a>
              . Acessado em 23/11/2023.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
