'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { RefObject } from 'react';

import { cn } from '@/lib/utils';

import DecorationsImage from '~/images/home/decorations.png';
interface ChildCardProps {
  hasDecoration?: boolean;
  image: StaticImport | string;
  className: string;
  effectDirection: 'bottom' | 'top';
  altImage: string;
  inViewRef: RefObject<HTMLDivElement>;
}
export default function ChildCard({
  hasDecoration,
  className,
  effectDirection,
  altImage,
  image,
  inViewRef,
}: ChildCardProps) {
  const isInView = useInView(inViewRef);
  return (
    <AnimatePresence>
      {isInView && (
        <motion.div
          initial={{ y: effectDirection === 'bottom' ? -50 : 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: effectDirection === 'bottom' ? 50 : -50, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className='relative h-[384px] w-[190px]'
        >
          <div className={cn('absolute h-fit w-fit', className)}>
            <div className='align-center relative h-[384px] w-[190px]'>
              <Image
                className='relative z-10 h-full w-full rounded-[20px] object-cover'
                src={image}
                alt={altImage}
              />
              {hasDecoration && (
                <Image
                  className='absolute -left-16 top-16 z-0 rotate-180 object-contain'
                  src={DecorationsImage}
                  alt='Decoração'
                  width={176}
                  height={176}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
