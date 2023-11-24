import Image from 'next/image';
import * as React from 'react';

import { Separator } from '@/components/ui/separator';

import ChildCardsSection from '@/app/(home)/components/child-cards-section';

import BannerHomeImage from '~/images/home/banner_home.jpg';
import DecorationsImage from '~/images/home/decorations.png';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <div className='container flex h-[700px] flex-col items-center justify-center py-20 lg:flex-row'>
        <div className='flex flex-col items-start justify-center'>
          <p className='mb-6 text-left text-6xl font-bold'>
            Inovação e tecnologia moldando o futuro da saúde.
          </p>
          <p className='text-muted-foreground mb-6 w-3/4 text-left text-sm'>
            A saúde é um dos pilares fundamentais da vida humana. Não apenas ela
            influencia diretamente nossa qualidade de vida, mas também determina
            nossa capacidade de realizar nossos sonhos, aspirações e potencial
            criativo.
          </p>
          <div className='flex items-center justify-between'></div>
        </div>
        <div className='relative h-96 w-full'>
          <Image
            className='relative z-10 h-fit max-h-96 rounded-lg object-cover'
            src={BannerHomeImage}
            alt='Tecnologia e Sáude'
            layout='responsive'
            objectFit='cover'
          />
          <Image
            className='absolute -bottom-16 -right-16 z-0 object-contain'
            src={DecorationsImage}
            alt='Decoração'
            width={176}
            height={176}
          />
        </div>
      </div>
      <Separator className='my-4' />
      <ChildCardsSection />
    </>
  );
}
