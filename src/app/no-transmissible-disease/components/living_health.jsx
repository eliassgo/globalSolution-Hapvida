import Image from 'next/image';
import React from 'react';

import { Separator } from '@/components/ui/separator';

import calculate from '~/images/calculate.png';
import connecteam from '~/images/connecteam.png';
import medscape from '~/images/medscape.png';
import my_fitness_pal from '~/images/my_fitness_pal.png';

const Living_health = () => {
  return (
    <>
      <div className='text-foreground mx-auto w-4/5 '>
        <h3 className='text-2xl text-cyan-500'>
          Conectando Saúde e Tecnologia: Apps que Transformam Vidas
        </h3>
        <Separator className='mb-10 bg-cyan-500' />
        <div className='my-5 grid grid-cols-1 text-center font-bold text-sky-950 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4'>
          <div className='md mb-5 flex w-full flex-col items-center justify-center text-center'>
            <a
              className=' flex flex-col items-center rounded-full hover:opacity-50'
              href='https://connecteam.com/apps-for-healthcare-professionals/?utm_campaignid=20613406051&
            utm_group=153578212305&utm_matchtype=&utm_kwid=dsa-2203919306065&utm_accountid=3625606301&utm
            _term=&utm_campaign=s_en_tier3_dsa_e_d&utm_source=google&utm_medium=cpc&utm_content=67585838537
            6&hsa_acc=3625606301&hsa_cam=17054198357&hsa_grp=153578212305&hsa_ad=675858385376&hsa_src=g&hsa
            _tgt=dsa-2203919306065&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAsIG
            rBhAAEiwAEzMlCw5ImYp4pgFngkPFjJ0T-iWRwt_B0EpbX4jNjFzmdCTv79PKOHOznhoCgQMQAvD_BwE'
              target='_blank'
            >
              <Image src={calculate} alt='' className=' w-2/4 rounded-full' />
              <h3 className='mt-5'> Calculate</h3>
            </a>
          </div>
          <div className='mb-5 flex w-full flex-col items-center justify-center'>
            <a
              className=' flex flex-col items-center rounded-full hover:opacity-50'
              href='https://connecteam.co
        m/apps-for-healthcare-professionals/?utm_campaignid=20613406051&utm_group=153578212305&utm_matchtype
        =&utm_kwid=dsa-2203919306065&utm_accountid=3625606301&utm_term=&utm_campaign=s_en_tier3_dsa_e_d&utm_
        source=google&utm_medium=cpc&utm_content=675858385376&hsa_acc=3625606301&hsa_cam=17054198357&hsa_grp=1
        53578212305&hsa_ad=675858385376&hsa_src=g&hsa_tgt=dsa-2203919306065&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa
        _ver=3&gad_source=1&gclid=CjwKCAiAsIGrBhAAEiwAEzMlCw5ImYp4pgFngkPFjJ0T-iWRwt_B0EpbX4jNjFzmdCTv79PKOHOzn
        hoCgQMQAvD_BwE'
              target='_blank'
            >
              <Image src={medscape} alt='' className='w-3/4 rounded-full' />
              <h3 className='mt-5'>Medscape</h3>
            </a>
          </div>
          <div className='mb-5 flex w-full flex-col items-center justify-center'>
            <a
              className=' flex flex-col items-center rounded-full hover:opacity-50'
              href='https://connecteam.com/apps-for-healthcare-professionals/?utm_campaig
          nid=20613406051&utm_group=153578212305&utm_matchtype=&utm_kwid=dsa-22039193060
          65&utm_accountid=3625606301&utm_term=&utm_campaign=s_en_tier3_dsa_e_d&utm_source=goog
          le&utm_medium=cpc&utm_content=675858385376&hsa_acc=3625606301&hsa_cam=17054198357&hsa_grp
          =153578212305&hsa_ad=675858385376&hsa_src=g&hsa_tgt=dsa-2203919306065&hsa_kw=&hsa_mt=&hsa
          _net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAsIGrBhAAEiwAEzMlCw5ImYp4pgFngkPFjJ0T-iWRwt_B
          0EpbX4jNjFzmdCTv79PKOHOznhoCgQMQAvD_BwE'
              target='_blank'
            >
              <Image src={connecteam} alt='' className='w-2/4 rounded-full' />
              <h3 className='mt-5'>Connecteam</h3>
            </a>
          </div>
          <div className='mb-5 flex w-full flex-col items-center justify-center'>
            <a
              className=' flex flex-col items-center rounded-full hover:opacity-50'
              href='https://www
        .myfitnesspal.com/pt'
              target='_blank'
            >
              <Image
                src={my_fitness_pal}
                alt=''
                className='w-3/4 rounded-full'
              />
              <h3 className='mt-5'>My fitness Pal</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Living_health;
