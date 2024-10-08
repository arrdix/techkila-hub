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

export function PurchaseRecap(): JSX.Element {
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
                    <DrawerTrigger>
                        <Button size="lg" className="flex gap-2 w-full">
                            Create Receipt
                            <FilePlus2 size={18} />
                        </Button>
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
                                    <SelectItem value="light">Biaya Ongkir</SelectItem>
                                    <SelectItem value="dark">Biaya Iklan</SelectItem>
                                    <SelectItem value="system">Pembelian Barang</SelectItem>
                                    <SelectItem value="system">operasional</SelectItem>
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
