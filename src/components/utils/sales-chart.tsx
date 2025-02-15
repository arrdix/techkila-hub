import { SalesChartSkeleton } from '@/components/skeleton/sales-chart-skeleton'
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from '@/components/ui/chart'
import { useEffect, useState } from 'react'
import { Bar, BarChart, XAxis } from 'recharts'

export function SalesChart(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    const chartData = [
        { month: 'January', sales: 186, expenses: 80 },
        { month: 'February', sales: 305, expenses: 200 },
        { month: 'March', sales: 237, expenses: 120 },
    ]

    const chartConfig = {
        sales: {
            label: 'Sales',
            color: '#242424',
        },
        expenses: {
            label: 'Expenses',
            color: '#cccccc',
        },
    } satisfies ChartConfig

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <SalesChartSkeleton />
    }

    return (
        <>
            <p className="text-xs text-muted">Q1 SALES CHART</p>
            <ChartContainer config={chartConfig} className="min-h-[310px] min-w-full w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
                    <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
                </BarChart>
            </ChartContainer>
        </>
    )
}
