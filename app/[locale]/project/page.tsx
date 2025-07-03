import { PrimaryTabContainer } from '@/components/Container';
import React from 'react'
import Schedules from './Schedules/page';
import Projects from './projects/page';
import Insights from './Insights/page';
import Actions from './Actions/page';

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