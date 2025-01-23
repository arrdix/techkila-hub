import { Button } from '@/components/ui/button.tsx'
import { FlatCard } from '@/components/ui/flat-card.tsx'
import { Barcode, Settings2 } from 'lucide-react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { Input } from '@/components/utils/input.tsx'

interface StockCardProps {
    name: string
    type: string
    price: string
    qty: number
}

export function StockCard({
    name,
    type,
    price,
    qty,
}: StockCardProps): JSX.Element {
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
                <div className="flex flex-col ml-auto">
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
                <Drawer>
                    <DrawerTrigger className="bg-foreground/5 text-foreground p-2 rounded-lg transition-colors hover:bg-foreground/15">
                        <Settings2 size={24} />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Edit Stock</DrawerTitle>
                            <DrawerDescription>
                                Edit item's available stock.
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Input
                                name="type"
                                placeholder="Type"
                                type="text"
                                className="mb-2"
                                value={type}
                                disabled
                            />
                            <Input
                                name="name"
                                placeholder="Name"
                                type="text"
                                className="mb-2"
                                value={name}
                                disabled
                            />
                            <div className="flex gap-2">
                                <Input
                                    name="price"
                                    placeholder="Price"
                                    type="text"
                                    className="mb-2 w-4/5"
                                    value={`IDR ${price}`}
                                    disabled
                                />
                                <Input
                                    name="qty"
                                    placeholder="Qty"
                                    type="text"
                                    className="mb-2 w-1/5"
                                    value={qty}
                                    autoFocus
                                />
                            </div>
                            <Button size="lg" className="mt-2">
                                Edit
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </FlatCard.Footer>
        </FlatCard>
    )
}
