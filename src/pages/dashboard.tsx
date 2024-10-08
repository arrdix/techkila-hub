import { DashboardRecap } from '@/components/dashboard/dashboard-recap'
import { SalesCard } from '@/components/sales/sales-card'
import { SalesChart } from '@/components/utils/sales-chart'

export function Dashboard(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <DashboardRecap />
            <div className="flex flex-col">
                <p className="text-xs text-muted">Q1 SALES CHART</p>
                <SalesChart />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">RECENT SALES</p>
                <SalesCard no="TKLA-BDG-0124-0123" date="12 Oct 2024" value="239.000" />
                <SalesCard no="TKLA-BDG-0124-0124" date="12 Oct 2024" value="13.239.000" />
                <SalesCard no="TKLA-BDG-0124-0125" date="12 Oct 2024" value="2.239.000" />
                <SalesCard no="TKLA-BDG-0124-0126" date="12 Oct 2024" value="13.500" />
            </div>
        </div>
    )
}
