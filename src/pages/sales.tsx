import { SalesCard } from '@/components/sales/sales-card'
import { SalesRecap } from '@/components/sales/sales-recap'
import { Input } from '@/components/utils/input'

export function Sales(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <SalesRecap />
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
