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
import { RecapSkeleton } from '@/components/skeleton/recap-skeleton'
import { useEffect, useState } from 'react'

export function SalesRecap(): JSX.Element {
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
                    <DrawerTrigger className="inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-neutral-50 shadow hover:bg-neutral-900/90 h-10 rounded-lg px-8">
                        Issue Invoice
                        <FilePlus2 size={18} />
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
