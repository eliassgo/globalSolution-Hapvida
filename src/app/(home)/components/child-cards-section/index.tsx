'use client';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';

import ChildCard from '@/app/(home)/components/child-cards-section/child-card';

import ChildrenTecOneImage from '~/images/home/children-tec-1.jpg';
import ChildrenTecTwoImage from '~/images/home/children-tec-2.jpeg';
import ChildrenTecThreeImage from '~/images/home/children-tec-3.png';

export default function ChildCardsSection() {
  const ref = useRef(null);
  return (
    <div className='container flex flex-col items-center justify-between gap-20 py-20 lg:flex-row'>
      <div className='flex h-full min-h-[200px] items-center justify-center gap-4 md:mb-4 lg:min-w-[600px]'>
        <ChildCard
          className='top-20'
          hasDecoration={true}
          image={ChildrenTecOneImage}
          altImage='Criança Sorrindo na frente de um notebook'
          effectDirection='top'
          inViewRef={ref}
        />
        <ChildCard
          className='-top-4'
          image={ChildrenTecTwoImage}
          altImage='Criança Sorrindo com celular na mão'
          effectDirection='bottom'
          inViewRef={ref}
        />
        <ChildCard
          className='top-16'
          image={ChildrenTecThreeImage}
          altImage='Criança Sorrindo brincando com 2 celulares'
          effectDirection='top'
          inViewRef={ref}
        />
      </div>
      <div className='flex flex-col gap-4 text-left'>
        <p className='mb-6 text-left text-6xl font-bold'>
          Redução da mortalidade Infantil.
        </p>
        <p className='text-muted-foreground mb-6 w-3/4 text-left text-sm'>
          A redução da mortalidade infantil é uma meta global crucial, abordada
          por meio de estratégias como cuidados de saúde materna, programas de
          imunização e melhorias na nutrição e saneamento. Essas medidas visam
          diminuir as mortes de crianças, promovendo um impacto positivo na
          saúde global e no bem-estar infantil.
        </p>
        <Link href='/reduction-mortality'>
          <Button variant='link'>
            Veja mais
            <ArrowRightIcon className='ml-2 h-4 w-4' />
          </Button>
        </Link>
        <div className='h-1 w-full' ref={ref} />
      </div>
    </div>
  );
}
