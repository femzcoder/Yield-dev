import { Grid2Container } from '@/components/Container'
import React from 'react'
import EngagementStat from './EngagementStat'
import TopCustomers from './TopCustomers'
import BottomCustomers from './BottomCustomers'
import NewEvents from './NewEvents'

const Engage = () => {
  return (
    <div>
      <Grid2Container>
        <EngagementStat/>
        <TopCustomers/>
        <BottomCustomers/>
        <NewEvents/>
      </Grid2Container>
    </div>
  )
}

export default Engage