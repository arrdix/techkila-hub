import { DashboardRecap } from '@/pages/dashboard/components/dashboard-recap.tsx'
import { RecentSales } from '@/pages/dashboard/components/recent-sales.tsx'
import { SalesChart } from '@/components/utils/sales-chart.tsx'

export function Dashboard(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <DashboardRecap />
            <div className="flex flex-col">
                <SalesChart />
            </div>
            <div className="flex flex-col gap-2">
                <RecentSales />
            </div>
        </div>
    )
}
