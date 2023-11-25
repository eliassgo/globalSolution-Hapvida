'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { navLinks } from '@/app/transmissible-disease/components/constants';

import close from '~/images/transmissible-disease/close.png';
import menu from '~/images/transmissible-disease/menu.png';
import hapvida from '~/images/transmissible-disease/OnHapvida.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClose = (e: boolean) => {
    setToggle(e);
  };

  return (
    <nav className='navbar flex w-full items-center justify-between py-6'>
      <Image src={hapvida} alt='logo' className='h-[42px] w-[124px]' />

      <ul className='hidden flex-1 list-none items-center justify-end sm:flex'>
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins cursor-pointer text-[16px] font-normal text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } `}
          >
            <Link href={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='flex flex-1 items-center justify-end md:hidden'>
        <DropdownMenu onOpenChange={handleClose}>
          <DropdownMenuTrigger asChild>
            <Image
              src={toggle ? close : menu}
              alt='menu'
              className='mr-6 h-[24px] w-[24px]'
              onClick={() => setToggle((prev) => !prev)}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel className='ml-5'>Paginas</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              {navLinks.map((nav, index) => (
                <DropdownMenuRadioItem key={index} value={nav.id}>
                  <Link href={nav.link}>{nav.title}</Link>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
