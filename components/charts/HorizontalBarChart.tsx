"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { BasicCard } from "../Cards"

export const description = "A horizontal bar chart"

interface ChartDataType {
  tag: string;
  value?: number;
  Positive?: number;
  Challenge?: number;
}

interface HorizontalBarChartProps {
  title?: string;
  preTitle?: string;
  percentChange?: string;
  icon?: React.ReactNode;
  chartData?: Array<ChartDataType>;
}


export function HorizontalBarChart({ title, preTitle, chartData, percentChange }: HorizontalBarChartProps) {
  const chartConfig = {
    positive: {
      label: title,
      color: "#E8EDF2",
    },
  } satisfies ChartConfig

    if (!chartData) {
        return (
        <BasicCard>
            <CardHeader>
            <CardTitle>{preTitle}</CardTitle>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Last Month {percentChange}</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
            <p className="text-gray-500">No data available</p>
            </CardContent>
        </BasicCard>
        )
    }
  return (
    <BasicCard style="border border-[#D1DBE8]">
      <CardHeader>
        <CardTitle>{preTitle}</CardTitle>
        <CardTitle className="font-bold text-[28px]">{title}</CardTitle>
        <CardDescription className="font-medium">Last Month {percentChange}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey={Object.keys(chartData[0])[1]} hide />
            <YAxis
              dataKey={"tag"}
              type="category"
              width={100}
              tickLine={false}
              tickMargin={0}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 15)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={Object.keys(chartData[0])[1]} fill="#E8EDF2" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>

    </BasicCard>
  )
}
