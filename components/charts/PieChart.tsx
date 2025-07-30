"use client"

import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with no separator"

const chartData = [
  { age: "young", visitors: 275, fill: "#A3E2FA" },
  { age: "early", visitors: 200, fill: "#7A003F" },
  { age: "mid", visitors: 187, fill: "#822EA7" },
  { age: "senior", visitors: 173, fill: "#7092F7" },
  { age: "retirement", visitors: 90, fill: "#CD0067" },
]

const chartConfig = {
  young: {
    label: "Young Adults",
    color:'#A3E2FA'
  },
  early: {
    label: "Early Career",
    color: "#7A003F",
  },

  mid: {
    label: "Mid Career",
    color: "#822EA7",
  },
  senior: {
    label: "Senior Professional",
    color: "#7092F7",
  },
  retirement: {
    label: "Near Retirement/Retirees",
    color: "#CD0067",
  },
} satisfies ChartConfig

export function CustomerPieChart() {
  return (
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
  )
}
