import { StockCard } from '@/components/stock/stock-card'
import { StockRecap } from '@/components/stock/stock-recap'
import { Input } from '@/components/utils/input'

export function Stock(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <StockRecap />
            <div className="flex flex-col gap-2">
                <p className="text-xs text-muted">STOCK MANAGEMENT</p>
                <Input name="search" placeholder="Search product..." type="text" className="mb-2" />
                <StockCard
                    name="Fingerspot Revo A-232C"
                    type="Access Control Device"
                    price="1.300.000"
                    qty={1}
                />
                <StockCard
                    name="Imou Cruiser Dual (5MP+3MP) Outdoor"
                    type="CCTV Camera"
                    price="890.000"
                    qty={1}
                />
                <StockCard name="Eppos EP-A5" type="Attendance Device" price="130.000" qty={1} />
            </div>
        </div>
    )
}
