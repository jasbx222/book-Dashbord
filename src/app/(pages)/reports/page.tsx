import CardsSummary from '@/app/(components)/ui/Cards'
import React from 'react'
import { reports } from '@/app/(components)/reuse/data'
import ChartsPage from '@/app/(components)/charts/Charts'
const page = () => {
  return (
    <div className='grid grid-cols-1 gap-12'>
        <CardsSummary items={reports}/>
        <ChartsPage/>
    </div>
  )
}

export default page