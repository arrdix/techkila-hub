import { Button } from '@/components/ui/button.tsx'
import { FlatCard } from '@/components/ui/flat-card.tsx'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IInvoice } from '@/types/invoice.ts'
import { formatDate } from '@/utils/format-time.ts'

interface SalesCardProps {
    invoice: IInvoice
}

export function SalesCard({ invoice }: SalesCardProps): JSX.Element {
    return (
        <FlatCard>
            <FlatCard.Header>
                <p className="text-sm font-semibold">{invoice.no}</p>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted hover:bg-transparent hover:text-foreground"
                >
                    <Copy size={16} />
                </Button>
                <div className="flex ml-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="justify-end text-muted hover:bg-transparent hover:text-foreground"
                        asChild
                    >
                        <Link to={`/sales/${invoice.id}`}>
                            <SquareArrowOutUpRight size={16} />
                        </Link>
                    </Button>
                </div>
            </FlatCard.Header>
            <FlatCard.Footer>
                <p className="text-xs text-muted font-semibold">
                    {formatDate(invoice.date)}
                </p>
                <div className="flex gap-1">
                    <p className="text-xs font-semibold">IDR</p>
                    <p className="text-2xl font-bold ">{invoice.total}</p>
                </div>
            </FlatCard.Footer>
        </FlatCard>
    )
}
