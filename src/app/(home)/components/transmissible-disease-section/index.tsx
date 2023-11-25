import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import TransmissibleDiseaseImage from '~/images/home/transmissible-disease.jpg';

export default function TransmissibleDiseaseSection() {
  return (
    <div className='container flex flex-col items-center justify-center py-20 lg:flex-row'>
      <div className='flex flex-col items-start justify-center'>
        <p className='mb-6 text-left text-6xl font-bold'>
          Combate a doenças transmissíveis.
        </p>
        <p className='text-muted-foreground mb-6 w-3/4 text-left text-sm'>
          Una-se a nós na luta contra doenças transmissíveis. Explore
          estratégias eficazes de prevenção, compreenda os riscos e aprenda a
          proteger você e sua comunidade. Inscreva-se agora com seu nome e
          e-mail para receber informações valiosas sobre como combater essas
          doenças e garantir um futuro mais saudável para todos.
        </p>
        <Link href='/transmissible-disease'>
          <Button variant='link'>
            Veja mais
            <ArrowRightIcon className='ml-2 h-4 w-4' />
          </Button>
        </Link>
      </div>
      <div className='relative flex w-full flex-col rounded-md'>
        <Image
          className='rounded-md'
          alt='Doenças Transmissiveis'
          src={TransmissibleDiseaseImage}
        />
      </div>
    </div>
  );
}
