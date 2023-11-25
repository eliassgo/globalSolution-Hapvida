import Image, { StaticImageData } from 'next/image';

import Quotes from '@/components/Icons/Quotes';

interface MemberCardProps {
  img: StaticImageData | null;
  name: string;
  title: string;
}
export default function MemberCard({ name, title, img }: MemberCardProps) {
  return (
    <div className='feedback-card flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12'>
      <Quotes />
      <div className='mt-10 flex flex-row'>
        {img && (
          <Image
            src={img}
            alt={name}
            className='h-[48px] w-[48px] rounded-full'
          />
        )}
        <div className='ml-4 flex flex-col'>
          <h4 className='font-poppins text-[20px] font-semibold leading-[32px] text-white'>
            {name}
          </h4>
          <p className='font-poppins text-dimWhite my-10 text-[16px] font-normal leading-[24px]'>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
