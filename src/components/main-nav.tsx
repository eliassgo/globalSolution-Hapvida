'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='hidden font-bold sm:inline-block'>MUDAR ISTO</span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          href='/docs'
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Documentation
        </Link>
        <Link
          href='/docs/components'
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname?.startsWith('/docs/components')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Components
        </Link>
        <Link
          href='/themes'
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname?.startsWith('/themes')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Themes
        </Link>
        <Link
          href='/examples'
          className={cn(
            'hover:text-foreground/80 transition-colors',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Examples
        </Link>
        <Link
          href='/MUDAR-ISTO'
          className={cn(
            'text-foreground/60 hover:text-foreground/80 hidden transition-colors lg:block'
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
