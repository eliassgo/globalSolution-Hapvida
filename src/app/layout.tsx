import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

import { siteConfig } from '@/constant/config';
import { ThemeProvider } from '@/context/theme-provider';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        baseTheme: dark,
      }}
    >
      <html className='dark' style={{ colorScheme: 'dark' }}>
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='relative flex min-h-screen flex-col'>
              <SiteHeader />
              <div className='flex-1'>{children}</div>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
