import { Button } from '@/components/ui/button.tsx'
import { Recap } from '@/components/ui/recap.tsx'
import { ArrowUpNarrowWide, Eye, EyeOff, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { RecapSkeleton } from '@/components/skeleton/recap-skeleton.tsx'

export function DashboardRecap(): JSX.Element {
    const [showRevenue, setShowRevenue] = useState<boolean>(false)
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
            <Recap.Title>CURRENT REVENUE</Recap.Title>
            <Recap.Headline>
                <p className="text-4xl font-extrabold align-middle">
                    {showRevenue ? '3.234.123.231' : '***********'}
                </p>
                <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto text-muted"
                    onClick={() => setShowRevenue((oldValue) => !oldValue)}
                >
                    {showRevenue ? <EyeOff /> : <Eye />}
                </Button>
            </Recap.Headline>
            <Recap.Body>
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bold">
                        13% <TrendingUp className="inline text-success" />
                    </p>
                    <p className="text-xs text-muted">OF THE TARGET</p>
                </div>
                <Drawer>
                    <DrawerTrigger className="inline-flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-neutral-50 shadow hover:bg-neutral-900/90 h-12 rounded-lg px-8">
                        Breakdown
                        <ArrowUpNarrowWide size={18} />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Revenue Breakdown</DrawerTitle>
                            <DrawerDescription>
                                Detailed segmentation of revenue streams.
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <div className="flex flex-col border rounded-lg p-4">
                                <div className="flex flex-col justify-center gap-1 items-center pb-4">
                                    <p className="text-xs text-muted">TARGET</p>
                                    <div className="flex gap-1">
                                        <p className="text-xs font-semibold">
                                            IDR
                                        </p>
                                        <p className="text-3xl font-bold">
                                            300.234.123.231
                                        </p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex py-4">
                                    <div className="flex flex-col gap-1 items-center pr-4 border-e">
                                        <p className="text-xs text-muted">
                                            BANDUNG
                                        </p>
                                        <div className="flex gap-1">
                                            <p className="text-xs font-semibold">
                                                IDR
                                            </p>
                                            <p className="text-lg font-bold">
                                                2.234.123.231
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center pl-4">
                                        <p className="text-xs text-muted">
                                            JAKARTA
                                        </p>
                                        <div className="flex gap-1">
                                            <p className="text-xs font-semibold">
                                                IDR
                                            </p>
                                            <p className="text-lg font-bold">
                                                2.234.123.231
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col justify-center gap-1 items-center pt-4">
                                    <p className="text-xs text-muted">
                                        TOTAL REVENUE
                                    </p>
                                    <div className="flex gap-1">
                                        <p className="text-xs font-semibold">
                                            IDR
                                        </p>
                                        <p className="text-3xl font-bold">
                                            3.234.123.231
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-muted text-center mt-4">
                                Current total revenue is{' '}
                                <span className="text-sm text-success font-bold">
                                    13%
                                </span>{' '}
                                of the target.
                            </p>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Recap.Body>
        </Recap>
    )
}
