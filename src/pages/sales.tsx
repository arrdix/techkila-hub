import { SalesCard } from '@/components/sales/sales-card'
import { Button } from '@/components/ui/button'
import { Recap } from '@/components/ui/recap'
import { Input } from '@/components/utils/input'
import { ChartNoAxesColumn, FilePlus2 } from 'lucide-react'

export function Sales(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <Recap>
                <Recap.Title>CURRENT SALES</Recap.Title>
                <Recap.Headline>
                    <p className="text-4xl font-extrabold align-middle">213.123.344</p>
                </Recap.Headline>
                <Recap.Body>
                    <div className="flex flex-col w-full">
                        <p className="text-lg font-bold">
                            231 <ChartNoAxesColumn size={20} className="inline text-success" />
                        </p>
                        <p className="text-xs text-muted">SALES INVOICES</p>
                    </div>
                    <Button size="lg" className="flex gap-2 w-full">
                        Create Invoice
                        <FilePlus2 size={18} />
                    </Button>
                </Recap.Body>
            </Recap>
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">SALES HISTORY</p>
                <Input name="search" placeholder="Search invoice..." type="text" className="mb-2" />
                <SalesCard no="TKLA-BDG-0124-0123" date="12 Oct 2024" value="239.000" />
                <SalesCard no="TKLA-BDG-0124-0124" date="12 Oct 2024" value="13.239.000" />
                <SalesCard no="TKLA-BDG-0124-0125" date="12 Oct 2024" value="2.239.000" />
                <SalesCard no="TKLA-BDG-0124-0126" date="12 Oct 2024" value="13.500" />
            </div>
        </div>
    )
}
