import { StockManagement } from '@/components/stock/stock-management'
import { StockRecap } from '@/components/stock/stock-recap'

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
