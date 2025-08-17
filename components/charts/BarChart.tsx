"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { month: "Jan", Hot: 186, Warm: 80, Cold: 200 },
  { month: "Feb", Hot: 305, Warm: 200,  Cold: 200 },
  { month: "Mar", Hot: 237, Warm: 120,  Cold: 200 },
  { month: "Apr", Hot: 73, Warm: 190,  Cold: 200 },
  { month: "May", Hot: 209, Warm: 130,  Cold: 200 },
  { month: "Jun", Hot: 214, Warm: 140,  Cold: 200 },
  { month: "Jul", Hot: 214, Warm: 140, Cold: 200 },
  { month: "Aug", Hot: 214, Warm: 140,  Cold: 200 },
]

const chartConfig = {
  cold: {
    label: "Cold",
    color: "var(--chart-1)",
  },
  warm: {
    label: "Warm",
    color: "var(--chart-2)",
  },
  hot: {
    label: "Hot",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarStacked() {
  return (
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Cold"
              stackId="a"
              fill="#A3E2FA"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="Warm"
              stackId="a"
              fill="#CD0067"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="Hot"
              stackId="a"
              fill="#7A003F"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>

  )
}
