'use client';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';

import BasketballPlayersSmilingImage from '~/images/home/basketball-players-smiling.png';
import PeopleShakingHandsImage from '~/images/home/people-shaking-hands.png';
import PeopleSmilingImage from '~/images/home/people-smiling.png';
import PeopleTogetherImage from '~/images/home/people-together.png';

export default function HealthImprovementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className='container flex flex-col items-center justify-center py-20 lg:flex-row'>
      <div className='flex flex-col items-start justify-center'>
        <p className='mb-6 text-left text-6xl font-bold'>
          Melhoria Geral da Saúde.
        </p>
        <p className='text-muted-foreground mb-6 w-3/4 text-left text-sm'>
          Junte-se a nós para explorar dicas práticas e informações valiosas
          sobre como aprimorar sua saúde de maneira geral. Vamos compartilhar
          insights sobre nutrição, exercícios, sono e bem-estar emocional. Não
          perca a oportunidade de transformar sua vida! Deixe seu nome e e-mail,
          e entraremos em contato para guiá-lo nessa jornada de melhoria da
          saúde.
        </p>
        <Link href='/health-improvement' ref={ref}>
          <Button variant='link'>
            Veja mais
            <ArrowRightIcon className='ml-2 h-4 w-4' />
          </Button>
        </Link>
      </div>
      <AnimatePresence>
        {isInView && (
          <div className='relative flex w-full flex-col'>
            <div className='flex items-center justify-end gap-4'>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Image
                  alt='Pessoas segurando as mãos na frente de uma piscina'
                  src={PeopleShakingHandsImage}
                />
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Image
                  alt='3 mulheres sorrindo em frente ao notebook'
                  src={PeopleSmilingImage}
                />
              </motion.div>
            </div>
            <div className='flex items-center justify-start gap-4'>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Image
                  alt='Pessoas segurando as mãos na frente de uma piscina'
                  src={PeopleTogetherImage}
                />
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Image
                  alt='Pessoas Sentadas junto a uma bola de basquete sorrindo'
                  src={BasketballPlayersSmilingImage}
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
