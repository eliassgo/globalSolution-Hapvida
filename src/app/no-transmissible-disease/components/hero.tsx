'use client';

import { Terminal } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

import banner01 from '~/images/banner-01.jpg';

const Hero = () => {
  return (
    <>
      <section className='text-foreground mb-10 flex flex-col md:flex-row'>
        <Alert className='left-44 top-96 hidden w-1/3 sm:left-3 md:absolute md:left-24'>
          <Terminal className='h-4 w-4' />
          <AlertTitle>Prevenção, Automação e Precisão.</AlertTitle>
          <AlertDescription>
            Inovação e tecnologia moldando o futuro da saúde
          </AlertDescription>
        </Alert>

        <Image
          src={banner01}
          alt='imagem de paciente sendo atendido'
          className='w-full md:w-1/2'
        />

        <div className='ml-10 pt-10 md:pt-0'>
          <h2 className='mb-10 text-3xl'>Conhecendo e Combatendo:</h2>
          <h1 className='mb-10 text-4xl'>
            Estratégias de Prevenção e Tratamento de Doenças Não Transmissíveis
          </h1>
          <p className='mb-2 font-bold text-current'>
            "As doenças não transmissíveis (DNTs) são as maiores causadoras de
            mortes globalmente, sendo responsáveis por 71% de todas as mortes no
            mundo."
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
      <div className='md:hidden'>
        <Select>
          <SelectTrigger className='w-[180px] '>
            <SelectValue placeholder='EXPLORE' />
          </SelectTrigger>
          <SelectContent className=' bg-dark'>
            <SelectItem value='Saúde Mental'>
              <a href=''>Saúde Mental</a>
            </SelectItem>
            <SelectItem value='Bem-estar'>
              <a href=''>Bem-estar</a>
            </SelectItem>
            <SelectItem value='Diabetes'>
              {' '}
              <a href=''>Diabetes</a>
            </SelectItem>
            <SelectItem value='Obesidade'>
              {' '}
              <a href=''>Obesidade</a>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='text-foreground hidden h-5 items-center space-x-4 font-bold md:flex md:text-sm'>
        <div>
          <h3 className='text-emerald-500 '>EXPLORE</h3>
        </div>
        <Separator orientation='vertical' className='bg-foreground my-10 ' />
        <div className='hover:text-sky-700  hover:underline'>
          <a href=''>Saúde Mental</a>
        </div>
        <Separator orientation='vertical' className='bg-foreground my-10' />
        <div className='hover:text-sky-700 hover:underline'>
          <a href=''>Bem-estar</a>
        </div>
        <Separator orientation='vertical' className='bg-foreground my-10' />
        <div className='hover:text-sky-700 hover:underline'>
          <a href=''>Diabetes</a>
        </div>
        <Separator orientation='vertical' className='bg-foreground my-10' />
        <div className='hover:text-sky-700 hover:underline'>
          <a href=''>Trissomias</a>
        </div>
        <Separator orientation='vertical' className='bg-foreground my-10' />
        <div className='hover:text-sky-700 hover:underline'>
          <a href=''>Obesidade</a>
        </div>
        <Separator orientation='vertical' className='bg-foreground my-10' />
        <div className='hover:text-sky-700 hover:underline'>
          <a href=''>Hipertensão</a>
        </div>
      </div>
    </>
  );
};

export default Hero;
