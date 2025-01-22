import { StockManagement } from '@/pages/stock/components/stock-management.tsx'
import { StockRecap } from '@/pages/stock/components/stock-recap.tsx'

export function Stock(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <StockRecap />
            <div className="flex flex-col gap-2">
                <StockManagement />
            </div>
        </div>
    )
}
