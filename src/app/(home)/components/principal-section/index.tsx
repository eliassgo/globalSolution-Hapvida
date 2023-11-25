import Image from 'next/image';

import BannerHomeImage from '~/images/home/banner_home.jpg';
import DecorationsImage from '~/images/home/decorations.png';
import DrogaoSuperImage from '~/images/home/logo-drogao-super.png';
import HapvidaNdiImage from '~/images/home/logo-hapvida-ndi.png';
import NetshoesImage from '~/images/home/logo-netshoes.png';
import ZattiniImage from '~/images/home/logo-zattini.jpg';

export default function PrincipalSection() {
  return (
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
        <div className='flex h-[40px] w-[90%] items-center justify-between rounded-md bg-[#F1F5F9] p-4 mix-blend-luminosity'>
          <Image
            src={HapvidaNdiImage}
            alt='Logo Hapvida NDI'
            className='h-[40px] w-[150px] object-contain mix-blend-multiply'
          />

          <Image
            src={NetshoesImage}
            alt='Logo Hapvida NDI'
            className='h-[40px] w-[150px] object-contain mix-blend-multiply'
          />
          <Image
            src={DrogaoSuperImage}
            alt='Logo Hapvida NDI'
            className='h-[30px] w-[130px] object-contain mix-blend-multiply'
          />
          <Image
            src={ZattiniImage}
            alt='Logo Hapvida NDI'
            className='h-[30px] w-[130px] object-cover mix-blend-multiply'
          />
        </div>
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
  );
}
