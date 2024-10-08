import { Button } from '@/components/ui/button'
import { FlatCard } from '@/components/ui/flat-card'
import { Barcode, Settings2 } from 'lucide-react'

interface StockCardProps {
    name: string
    type: string
    price: string
    qty: number
}

export function StockCard({ name, type, price, qty }: StockCardProps): JSX.Element {
    return (
        <FlatCard>
            <FlatCard.Header>
                <div className="flex flex-col py-2">
                    <p className="text-sm font-bold">{name}</p>
                    <p className="text-xs text-muted">
                        <Barcode size={13} className="inline" /> {type}
                    </p>
                </div>
            </FlatCard.Header>
            <FlatCard.Body>
                <div className="flex flex-col">
                    <p className="text-xs text-muted">Qty</p>
                    <p className="text-xl font-bold">
                        {qty} <span className="text-xs">Pc(s)</span>
                    </p>
                </div>
                <div className="flex-flex-col ml-auto">
                    <p className="text-xs text-muted">Price</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-semibold">IDR</p>
                        <p className="text-xl font-bold">{price}</p>
                    </div>
                </div>
            </FlatCard.Body>
            <FlatCard.Footer>
                <div className="flex-flex-col">
                    <p className="text-xs text-muted">Value</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-semibold">IDR</p>
                        <p className="text-2xl font-bold">{price}</p>
                    </div>
                </div>
                <Button variant="ghost" size="icon">
                    <Settings2 size={30} />
                </Button>
            </FlatCard.Footer>
        </FlatCard>
        // <div className="flex flex-col px-4 border rounded-lg">
        //     <div className="flex flex-col py-2">
        //         <p className="text-sm font-bold">{name}</p>
        //         <p className="text-xs text-muted">
        //             <Barcode size={13} className="inline" /> {type}
        //         </p>
        //     </div>
        //     <Separator />
        //     <div className="flex py-3">
        //         <div className="flex flex-col">
        //             <p className="text-xs text-muted">Qty</p>
        //             <p className="text-xl font-bold">
        //                 {qty} <span className="text-xs">Pc(s)</span>
        //             </p>
        //         </div>
        //         <div className="flex-flex-col ml-auto">
        //             <p className="text-xs text-muted">Price</p>
        //             <div className="flex gap-1">
        //                 <p className="text-xs font-semibold">IDR</p>
        //                 <p className="text-xl font-bold">{price}</p>
        //             </div>
        //         </div>
        //     </div>
        //     <Separator />
        //     <div className="flex justify-between items-center py-3">
        //         <div className="flex-flex-col">
        //             <p className="text-xs text-muted">Value</p>
        //             <div className="flex gap-1">
        //                 <p className="text-xs font-semibold">IDR</p>
        //                 <p className="text-2xl font-bold">{price}</p>
        //             </div>
        //         </div>
        //         <Button variant="ghost" size="icon">
        //             <Settings2 size={30} />
        //         </Button>
        //     </div>
        // </div>
    )
}
