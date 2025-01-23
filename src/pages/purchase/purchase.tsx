import { PurchaseHistory } from '@/pages/purchase/components/purchase-history.tsx'
import { PurchaseRecap } from '@/pages/purchase/components/purchase-recap.tsx'

export function Purchase(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <PurchaseRecap />
            <div className="flex flex-col gap-2">
                <PurchaseHistory />
            </div>
        </div>
    )
}
