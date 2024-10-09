import { RecapSkeleton } from '@/components/skeleton/recap-skeleton'
import { Recap } from '@/components/ui/recap'
import { PackageCheck } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StockRecap(): JSX.Element {
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
                <div className="flex flex-col w-3/5 bg-foreground/5 p-2 rounded-lg">
                    <p className="text-xs text-muted">STOCK LIMIT</p>
                    <div className="flex gap-1">
                        <p className="text-xs font-bold">IDR</p>
                        <p className="font-bold">1.000.000.000</p>
                    </div>
                </div>
            </Recap.Body>
        </Recap>
    )
}
