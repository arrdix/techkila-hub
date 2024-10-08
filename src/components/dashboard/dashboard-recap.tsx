import { Button } from '@/components/ui/button'
import { Recap } from '@/components/ui/recap'
import { ArrowUpNarrowWide, Eye, EyeOff, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'

export function DashboardRecap(): JSX.Element {
    const [showRevenue, setShowRevenue] = useState<boolean>(false)

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
                    <DrawerTrigger>
                        <Button size="lg" className="flex gap-2 w-full">
                            Breakdown
                            <ArrowUpNarrowWide size={18} />
                        </Button>
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
                                        <p className="text-xs font-semibold">IDR</p>
                                        <p className="text-3xl font-bold">300.234.123.231</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex py-4">
                                    <div className="flex flex-col gap-1 items-center pr-4 border-e">
                                        <p className="text-xs text-muted">BANDUNG</p>
                                        <div className="flex gap-1">
                                            <p className="text-xs font-semibold">IDR</p>
                                            <p className="text-lg font-bold">2.234.123.231</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center pl-4">
                                        <p className="text-xs text-muted">JAKARTA</p>
                                        <div className="flex gap-1">
                                            <p className="text-xs font-semibold">IDR</p>
                                            <p className="text-lg font-bold">2.234.123.231</p>
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col justify-center gap-1 items-center pt-4">
                                    <p className="text-xs text-muted">TOTAL REVENUE</p>
                                    <div className="flex gap-1">
                                        <p className="text-xs font-semibold">IDR</p>
                                        <p className="text-3xl font-bold">3.234.123.231</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex flex-col px-4 gap-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-1 mb-4">
                                        <p className="text-xs text-muted">TARGET</p>
                                        <div className="flex gap-1">
                                            <p className="text-xs font-semibold">IDR</p>
                                            <p className="text-3xl font-bold">3.234.123.231</p>
                                        </div>
                                    </div>
                                    <Crosshair />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-muted">BANDUNG REVENUE</p>
                                    <div className="flex gap-1">
                                        <p className="text-xs font-semibold">IDR</p>
                                        <p className="text-3xl font-bold">1.234.123.231</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-muted">JAKARTA REVENUE</p>
                                    <div className="flex gap-1">
                                        <p className="text-xs font-semibold">IDR</p>
                                        <p className="text-3xl font-bold">1.234.123.231</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-muted">
                                        TOTAL REVENUE{' '}
                                        <TrendingUp
                                            size={15}
                                            className="inline text-success ml-1"
                                        />
                                    </p>
                                    <div className="flex gap-1">
                                        <p className="text-xs font-semibold">IDR</p>
                                        <p className="text-3xl font-bold">3.234.123.231</p>
                                    </div>
                                </div>
                            </div> */}
                            <p className="text-xs text-muted text-center mt-4">
                                Current total revenue is{' '}
                                <span className="text-sm text-success font-bold">13%</span> of the
                                target.
                            </p>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Recap.Body>
        </Recap>
    )
}
