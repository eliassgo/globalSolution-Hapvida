'use client';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';

import GraphsImage from '~/images/home/graph-style.png';
export default function NoTransmissibleDiseaseSection() {
  const ref = useRef(null);
  return (
    <div className='container flex flex-col items-center justify-between gap-20 py-20 lg:flex-row'>
      <div className='flex h-full min-h-[200px] items-center justify-center gap-4 md:mb-4 lg:min-w-[600px]'>
        <Image
          className='relative z-10 h-fit max-h-96 rounded-lg object-cover'
          src={GraphsImage}
          alt='Tecnologia e Sáude'
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <p className='mb-6 text-left text-6xl font-bold'>
          Prevenção e tratamento de doenças não transmissíveis.
        </p>
        <p className='text-muted-foreground mb-6 w-3/4 text-left text-sm'>
          Participe da nossa iniciativa dedicada à prevenção e tratamento de
          doenças não transmissíveis. Descubra estratégias eficazes para
          proteger sua saúde, entender os sinais precoces e adotar hábitos que
          promovam uma vida plena. Inscreva-se com seu nome e e-mail para
          receber informações valiosas sobre como construir uma jornada de
          bem-estar duradouro.
        </p>
        <Link href='/no-transmissible-disease' ref={ref}>
          <Button variant='link'>
            Veja mais
            <ArrowRightIcon className='ml-2 h-4 w-4' />
          </Button>
        </Link>
      </div>
    </div>
  );
}
