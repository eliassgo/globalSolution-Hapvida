import Image from 'next/image';

import {
  footerLinks,
  socialMedia,
} from '@/app/transmissible-disease/components/constants';
import styles from '@/constant/style';

import hapvida from '~/images/transmissible-disease/hapvida.png';

export const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
      <div className='mr-10 flex flex-1 flex-col justify-start'>
        <Image
          src={hapvida}
          alt='hapvida'
          className='h-[72px] w-[266px] object-contain'
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Um novo jeito de olhar para a saude, Hapvida On.
        </p>
      </div>

      <div className='mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0'>
        {footerLinks.map((footerlink, index) => (
          <div key={index} className='ss:my-0 my-4 flex min-w-[150px] flex-col'>
            <h4 className='font-poppins text-[18px] font-medium leading-[27px] text-white'>
              {footerlink.title}
            </h4>
            <ul className='mt-4 list-none'>
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins text-dimWhite hover:text-secondary cursor-pointer text-[16px] font-normal leading-[24px] ${
                    index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3R45] pt-6 md:flex-row'>
      <p className='font-poppins text-center text-[18px] font-normal leading-[27px] text-white'>
        2023 Hapvida. All Rights Reserved.
      </p>
      <div className='mt-6 flex flex-row  md:mt-0'>
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`h-[21px] w-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);
