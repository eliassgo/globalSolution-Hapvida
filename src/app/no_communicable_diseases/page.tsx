import Image from 'next/image';

import { Separator } from '@/components/ui/separator';

import Article from '@/app/no_communicable_diseases/components/article';
import Banner from '@/app/no_communicable_diseases/components/banner';
import Card_diseases from '@/app/no_communicable_diseases/components/card-diseases';
import Hero from '@/app/no_communicable_diseases/components/hero';
import Ods_section from '@/app/no_communicable_diseases/components/ods_section';

import diabetes from '~/images/diabetes.png';
import health from '~/images/health.png';
import image05 from '~/images/image-05.png';

export default function No_Communicable_Diseases() {
  return (
    <>
      <div className='mx-auto w-4/5 pt-20'>
        <Hero />
      </div>
      <Banner />
      <Article />
      <section className='text-foreground mx-auto w-4/5'>
        <Card_diseases />
        <section className='text-foreground mx-auto mt-10 w-4/5'>
          <div className='grid grid-cols-1 gap-x-5 lg:grid-cols-2'>
            <div>
              <h2 className='mb-5 text-left lg:text-2xl'>
                Tendências que estão moldando a abordagem contemporânea para
                prevenção e tratamento.
              </h2>
              <p>
                {' '}
                Healing starts here The right answers the first time Effective
                treatment depends on getting the right diagnosis. Our experts
                diagnose and treat the toughest medical challenges. Top-ranked
                in the U.S. Mayo Clinic has more No. 1 rankings than any other
                hospital in the nation according to U.S. News & World Report.
                Learn more about our top-ranked specialties. Why choose Mayo
                Clinic{' '}
              </p>
            </div>
            <Image
              src={image05}
              alt='mãe e filho se exercitando'
              className='my-5 rounded-lg'
            />
          </div>
        </section>
      </section>
      <Ods_section />

      <section className='text-foreground mx-auto mt-20 w-4/5 '>
        <h3 className='text-cyan-500'>Aplicativos de Fitness e Bem-Estar</h3>
        <Separator className='mb-10 bg-cyan-500' />
        <div className='grid grid-cols-2 place-content-center gap-y-4 text-start font-bold text-sky-950'>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'> Bem-Estar</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Obesidade</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Saúde Mental</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Hipertensão</h3>
          </div>
          <div>
            <Image src={diabetes} alt='' className='w-1/2 rounded-full' />
            <h3 className='mt-5'>Diabetes</h3>
          </div>
        </div>

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
