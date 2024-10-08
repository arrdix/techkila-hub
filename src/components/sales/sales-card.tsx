import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'

interface SalesCardProps {
    invoiceNo: string
    date: string
    value: string
}

export function SalesCard({ invoiceNo, date, value }: SalesCardProps): JSX.Element {
    return (
        <div className="flex-flex-col border border-foreground bg-foreground px-4 rounded-xl">
            <div className="flex items-center">
                <p className="text-sm text-background font-semibold">{invoiceNo}</p>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-background hover:bg-transparent hover:text-muted"
                >
                    <Copy size={16} />
                </Button>
                <div className="flex ml-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="justify-end text-background hover:bg-transparent hover:text-muted"
                    >
                        <SquareArrowOutUpRight size={16} />
                    </Button>
                </div>
            </div>
            <Separator className="bg-background" />
            <div className="flex justify-between items-center py-3">
                <p className="text-xs text-background font-semibold">{date}</p>
                <div className="flex gap-1">
                    <p className="text-xs text-background font-semibold">IDR</p>
                    <p className="text-2xl font-bold text-background">{value}</p>
                </div>
            </div>
        </div>
    )
}
