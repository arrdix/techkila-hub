import { Recap } from '@/components/ui/recap.tsx'
import { ChartNoAxesColumn, FilePlus2 } from 'lucide-react'
import { RecapSkeleton } from '@/components/skeleton/recap-skeleton.tsx'
import { useEffect, useState } from 'react'
import { SalesEcommerceForm } from '@/pages/sales/components/sales-ecommerce-form.tsx'
import { SalesDirectForm } from '@/pages/sales/components/sales-direct-form.tsx'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { Button } from '@/components/ui/button.tsx'
import { SalesServiceForm } from '@/pages/sales/components/sales-service-form.tsx'

export function SalesRecap(): JSX.Element {
    const [isPending, setIsPending] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
                <p className="text-4xl font-extrabold align-middle">
                    213.123.344
                </p>
            </Recap.Headline>
            <Recap.Body>
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bold">
                        231{' '}
                        <ChartNoAxesColumn
                            size={20}
                            className="inline text-success"
                        />
                    </p>
                    <p className="text-xs text-muted">SALES INVOICES</p>
                </div>

                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerTrigger className="inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-neutral-50 shadow hover:bg-neutral-900/90 h-10 rounded-lg px-8">
                        Issue Invoice
                        <FilePlus2 size={18} />
                    </DrawerTrigger>
                    <DrawerContent className="gap-10">
                        <DrawerHeader>
                            <DrawerTitle>Issue Invoice</DrawerTitle>
                            <DrawerDescription>
                                Select new invoice type
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-4">
                            <SalesEcommerceForm
                                title="Ecommerce Invoice"
                                subtitle="Issue new ecommerce invoice"
                            />
                            <SalesDirectForm
                                title="Direct Invoice"
                                subtitle="Issue new direct invoice"
                            />
                            <SalesServiceForm
                                title="Service Invoice"
                                subtitle="Issue new service invoice"
                            />
                        </div>
                        <DrawerFooter>
                            <Button
                                size="xl"
                                className="w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Recap.Body>
        </Recap>
    )
}
