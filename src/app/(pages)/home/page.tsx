'use client';

import React from 'react';
import CardsSummary from '@/app/(components)/ui/Cards';
import Wellcome from '@/app/(components)/wellcome/Wellcome';
import { cards } from '@/app/(components)/reuse/data';

const Page: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <Wellcome />
      <CardsSummary items={cards} />
    </div>
  );
};

export default Page;
