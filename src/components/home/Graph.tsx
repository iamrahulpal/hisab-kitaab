"use client";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { expense: 22 },
  { expense: 44 },
  { expense: 120 },
  { expense: 190 },
  { expense: 130 },
  { expense: 140 },
];
const chartConfig = {
  expense: {
    label: "Expense",
    color: "#7F3DFF",
  },
} satisfies ChartConfig;
export default function Graph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spend Frequency</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillexpense" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="80%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="expense"
              type="natural"
              fill="url(#fillexpense)"
              fillOpacity={0.7}
              stroke="var(--color-expense)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
