import { SalesCard } from '@/components/dashboard/sales-card'
import { Button } from '@/components/ui/button'
import { SalesChart } from '@/components/utils/sales-chart'
import { ArrowUpNarrowWide, Eye, EyeOff, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export function Dashboard(): JSX.Element {
    const [showRevenue, setShowRevenue] = useState<boolean>(false)

    return (
        <div className="flex flex-col gap-6 px-6">
            <div className="flex flex-col gap-2 rounded-3xl">
                <p className="text-xs text-muted">CURRENT REVENUE</p>
                <div className="flex gap-2">
                    <p className="text-xs text-muted font-bold">IDR</p>
                    <div className="flex items-center gap-2 w-full">
                        <p className="text-4xl font-extrabold align-middle">
                            {showRevenue ? '3.234.123.231' : '***********'}
                        </p>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto text-muted"
                            onClick={() => setShowRevenue((oldValue) => !oldValue)}
                        >
                            {showRevenue ? <EyeOff /> : <Eye />}
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <div className="flex flex-col w-full">
                        <p className="text-lg font-bold">
                            13% <TrendingUp className="inline text-success" />
                        </p>
                        <p className="text-xs text-muted">FROM TARGET</p>
                    </div>
                    <Button size="lg" className="flex gap-2 w-full">
                        Details
                        <ArrowUpNarrowWide size={18} />
                    </Button>
                </div>
            </div>
            <SalesChart />
            <div className="flex flex-col gap-1">
                <p className="text-xs text-muted">RECENT SALES</p>
                <SalesCard invoiceNo="TKLA-BDG-0124-0123" date="12 Oct 2024" value="239.000" />
                <SalesCard invoiceNo="TKLA-BDG-0124-0124" date="12 Oct 2024" value="13.239.000" />
                <SalesCard invoiceNo="TKLA-BDG-0124-0125" date="12 Oct 2024" value="2.239.000" />
                <SalesCard invoiceNo="TKLA-BDG-0124-0126" date="12 Oct 2024" value="13.500" />
            </div>
        </div>
    )
}
