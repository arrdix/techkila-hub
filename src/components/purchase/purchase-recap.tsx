import { Button } from '@/components/ui/button'
import { Recap } from '@/components/ui/recap'
import { Input } from '@/components/utils/input'
import { FilePlus2, Kanban } from 'lucide-react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'
import { RecapSkeleton } from '@/components/skeleton/recap-skeleton'

export function PurchaseRecap(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false)
        }, 1000)
    }, [])

    if (isPending) {
        return <RecapSkeleton />
    }

    return (
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
                <Drawer>
                    <DrawerTrigger className="inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-neutral-50 shadow hover:bg-neutral-900/90 h-10 rounded-lg px-8">
                        Issue Receipt
                        <FilePlus2 size={18} />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Create Receipt</DrawerTitle>
                            <DrawerDescription>Create a new purchase receipt.</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Input
                                name="title"
                                placeholder="Title"
                                type="text"
                                className="mb-2"
                                autoFocus
                            />
                            <Input name="value" placeholder="Value" type="text" className="mb-2" />
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue
                                        placeholder="Select Category"
                                        className="placeholder:text-muted"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="biaya ongkir">Biaya Ongkir</SelectItem>
                                    <SelectItem value="biaya iklan">Biaya Iklan</SelectItem>
                                    <SelectItem value="pembelian barang">
                                        Pembelian Barang
                                    </SelectItem>
                                    <SelectItem value="operasional">Operasional</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button size="lg" className="mt-2">
                                Create
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Recap.Body>
        </Recap>
    )
}
