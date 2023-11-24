import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteHeader() {
  return (
    <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur'>
      <div className='container flex h-14 items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'></div>
          <nav className='flex items-center'>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
