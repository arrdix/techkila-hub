import { PurchaseCard } from '@/components/purchase/purchase-card'
import { Button } from '@/components/ui/button'
import { Recap } from '@/components/ui/recap'
import { Input } from '@/components/utils/input'
import { FilePlus2, Kanban } from 'lucide-react'

export function Purchase(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <Recap>
                <Recap.Title>CURRENT PURCHASES</Recap.Title>
                <Recap.Headline>
                    <p className="text-4xl font-extrabold align-middle">113.123.344</p>
                </Recap.Headline>
                <Recap.Body>
                    <div className="flex flex-col w-full">
                        <p className="text-lg font-bold">
                            101 <Kanban size={20} className="inline text-success" />
                        </p>
                        <p className="text-xs text-muted">PURCHASES RECEIPT</p>
                    </div>
                    <Button size="lg" className="flex gap-2 w-full">
                        Create Receipt
                        <FilePlus2 size={18} />
                    </Button>
                </Recap.Body>
            </Recap>
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
