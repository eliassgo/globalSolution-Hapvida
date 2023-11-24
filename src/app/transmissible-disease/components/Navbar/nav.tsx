"use client"

import Image from "next/image";
import {useState} from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {navLinks} from "@/app/transmissible-disease/components/constants";

import close from '~/images/transmissible-disease/close.svg';
import menu from '~/images/transmissible-disease/menu.svg';
import hapvida from '~/images/transmissible-disease/OnHapvida.png';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [link, setLink] = useState("home");

    const handleClose = (e: boolean) => {
        setToggle(e)
    }

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <Image src={hapvida} alt="logo" className="w-[124px] h-[42px]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1" >
                {navLinks.map((nav, index) => (
                    <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
                        <a href={`#${nav.id}`} >{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <DropdownMenu onOpenChange={handleClose}>
                    <DropdownMenuTrigger asChild>
                        <Image src={toggle ? close : menu} alt="menu" className="w-[24px] h-[24px] mr-6" onClick={() => setToggle((prev) => !prev)} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel className='ml-5'>Paginas</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={link} onValueChange={setLink}>
                            {navLinks.map((nav, index) => (
                                <DropdownMenuRadioItem key={index} value={nav.id}>{nav.title}</DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    );
}

export default Navbar;