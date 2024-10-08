import { Button } from '@/components/ui/button'
import { Recap } from '@/components/ui/recap'
import { ChartNoAxesColumn, FilePlus2 } from 'lucide-react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/utils/input'

export function SalesRecap(): JSX.Element {
    return (
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
                <Drawer>
                    <DrawerTrigger>
                        <Button size="lg" className="flex gap-2 w-full">
                            Create Invoice
                            <FilePlus2 size={18} />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Create Invoice</DrawerTitle>
                            <DrawerDescription>Create a new sales invoice.</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Input
                                name="no"
                                placeholder="No"
                                type="text"
                                className="mb-2"
                                autoFocus
                            />
                            <Input name="value" placeholder="Value" type="text" className="mb-2" />
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
