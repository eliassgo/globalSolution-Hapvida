'use client';
import React from 'react';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { stats } from '@/app/transmissible-disease/components/constants';
import styles from '@/constant/style';
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export const Stats = () => (
  <section className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20`}>
    {/* <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {stats.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                >
                  {component.value}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
   */}

    <NavigationMenu>
      <NavigationMenuList className='flex flex-col sm:flex-row'>
        {stats.map((stat) => (
          <NavigationMenuItem
            key={stat.id}
            style={{ marginInline: '2rem' }}
            className='mt-4 sm:mt-0'
          >
            <NavigationMenuTrigger>
              <h4 className='font-poppins xs:text-[40px] xs:leading-[53px] text-[30px] font-semibold leading-[43px] text-white'>
                {stat.value}
              </h4>
              <p className='font-poppins xs:text-[20px] xs:leading-[26px] text-gradient ml-3 text-[15px] font-normal uppercase leading-[21px]'>
                {stat.title}
              </p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='bg-background'>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                {stat.subCategory.map((sub, index) =>
                  sub.url ? (
                    <li className='row-span-3' key={index}>
                      <NavigationMenuLink asChild>
                        <a
                          className='from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md'
                          href={sub.href}
                          style={{
                            backgroundImage: `url(${sub.url})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                          }}
                        >
                          <div className='mb-2 mt-4 text-lg font-medium'>
                            {sub.title}
                          </div>
                          <p className='text-muted-foreground text-sm leading-tight'>
                            {sub.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ) : (
                    <ListItem href={sub.href} title={sub.title} key={index}>
                      {sub.description}
                    </ListItem>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>

    {/* {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className={"font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white"}>{stat.value}</h4>
        <p className={"font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3"}>{stat.title}</p>
      </div>
    ))} */}
  </section>
);
