import * as React from 'react';

import { Separator } from '@/components/ui/separator';

import ChildCardsSection from '@/app/(home)/components/child-cards-section';
import HealthImprovementSection from '@/app/(home)/components/health-improvement-section';
import MembersSection from '@/app/(home)/components/members-section';
import NoTransmissibleDiseaseSection from '@/app/(home)/components/no-transmissible-disease-section';
import PrincipalSection from '@/app/(home)/components/principal-section';
import TransmissibleDiseaseSection from '@/app/(home)/components/transmissible-disease-section';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div className='w-full overflow-hidden'>
      <PrincipalSection />
      <Separator className='my-4' />
      <ChildCardsSection />
      <Separator className='my-4' />
      <HealthImprovementSection />
      <Separator className='my-4' />
      <NoTransmissibleDiseaseSection />
      <Separator className='my-4' />
      <TransmissibleDiseaseSection />
      <Separator className='my-4' />
      <MembersSection />
    </div>
  );
}
