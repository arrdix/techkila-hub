import { DashboardRecap } from '@/components/dashboard/dashboard-recap'
import { RecentSales } from '@/components/dashboard/recent-sales'
import { SalesChart } from '@/components/utils/sales-chart'

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
