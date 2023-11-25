'use client';
import Image, { StaticImageData } from 'next/image';

import quotes from '~/images/quotes.svg';

type Feedback = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
};

type FeedbackCardProps = {
  feedback: Feedback;
};

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  return (
    <div className='feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10'>
      <Image
        src={quotes}
        alt='quotes'
        className='h-[27px] w-[42px] object-contain'
      />
      <p className='font-poppins my-10 text-[18px] font-normal leading-[32px] text-white'>
        {feedback.content}
      </p>
      <div className='flex flex-row'>
        <Image
          src={feedback.img}
          alt='nome'
          className='h-[48px] w-[48px] rounded-full'
        />
        <div className='ml-4 flex flex-col'>
          <h4 className='font-poppins text-[20px] font-semibold leading-[32px] text-white'>
            {feedback.name}
          </h4>
          <p className='font-poppins text-dimWhite my-10 text-[16px] font-normal leading-[24px]'>
            {feedback.title}
          </p>
        </div>
      </div>
    </div>
  );
};
