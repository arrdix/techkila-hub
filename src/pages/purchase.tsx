import { PurchaseCard } from '@/components/purchase/purchase-card'
import { PurchaseRecap } from '@/components/purchase/purchase-recap'
import { Input } from '@/components/utils/input'

export function Purchase(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <PurchaseRecap />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">RECEIPT HISTORY</p>
                <Input name="search" placeholder="Search receipt..." type="text" className="mb-2" />
                <PurchaseCard
                    no="PO-TKLA-0124-0123"
                    title="Pembelian Magnetic Lock & Bracker"
                    category="Pembelian Barang"
                    date="21 Oct 2024"
                    value="1.123.421"
                />
                <PurchaseCard
                    no="PO-TKLA-0124-0125"
                    title="Ads Shopee Bandung"
                    category="Biaya Iklan"
                    date="21 Oct 2024"
                    value="750.000"
                />
                <PurchaseCard
                    no="PO-TKLA-0124-0124"
                    title="Ongkir Barang"
                    category="Biaya Ongkir"
                    date="21 Oct 2024"
                    value="39.000"
                />
            </div>
        </div>
    )
}
