import { StockCard } from '@/components/stock/stock-card'
import { Recap } from '@/components/ui/recap'
import { Input } from '@/components/utils/input'
import { PackageCheck } from 'lucide-react'

export function Stock(): JSX.Element {
    return (
        <div className="flex flex-col gap-6">
            <Recap>
                <Recap.Title>STOCK VALUE</Recap.Title>
                <Recap.Headline>
                    <p className="text-4xl font-extrabold align-middle">832.423.127</p>
                </Recap.Headline>
                <Recap.Body>
                    <div className="flex flex-col w-2/5">
                        <p className="text-lg font-bold">
                            89% <PackageCheck size={20} className="inline text-success" />
                        </p>
                        <p className="text-xs text-muted">OF THE STOCK LIMIT</p>
                    </div>
                    <div className="flex flex-col w-3/5 border border-foreground p-2 rounded-lg">
                        <p className="text-xs text-muted">STOCK LIMIT</p>
                        <div className="flex gap-1">
                            <p className="text-xs font-bold">IDR</p>
                            <p className="font-bold">1.000.000.000</p>
                        </div>
                    </div>
                </Recap.Body>
            </Recap>
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
