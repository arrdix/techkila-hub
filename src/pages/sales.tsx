import { SalesHistory } from '@/components/sales/sales-history'
import { SalesRecap } from '@/components/sales/sales-recap'

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
