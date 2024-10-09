import { PurchaseHistory } from '@/components/purchase/purchase-history'
import { PurchaseRecap } from '@/components/purchase/purchase-recap'

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
