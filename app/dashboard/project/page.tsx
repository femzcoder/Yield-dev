import { PrimaryTabContainer } from '@/components/Container';
import React from 'react'
import Schedules from './schedules/page';
import Projects from './projects/page';
import Insights from './insights/page';
import Actions from './actions/page';

const ProjectView = () => {
  return (
    <PrimaryTabContainer TabData={TabData}/>
  )
}

export default ProjectView

const TabData = [
  { title: 'Schedule', content: <Schedules/> },
  { title: 'Projects', content: <Projects/> },
  { title: 'Insights', content: <Insights/> },
  { title: 'Actions', content: <Actions/> },
];