import { SalesHistory } from '@/pages/sales/components/sales-history.tsx'
import { SalesRecap } from '@/pages/sales/components/sales-recap.tsx'

export function Sales(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <SalesRecap />
            <div className="flex flex-col gap-2">
                <SalesHistory />
            </div>
        </div>
    )
}
