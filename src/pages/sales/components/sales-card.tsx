import { Button } from '@/components/ui/button.tsx'
import { FlatCard } from '@/components/ui/flat-card.tsx'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SalesCardProps {
    no: string
    date: string
    value: string
}

export function SalesCard({ no, date, value }: SalesCardProps): JSX.Element {
    return (
        <FlatCard>
            <FlatCard.Header>
                <p className="text-sm font-semibold">{no}</p>
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
                        <Link to={`/sales/${no}`}>
                            <SquareArrowOutUpRight size={16} />
                        </Link>
                    </Button>
                </div>
            </FlatCard.Header>
            <FlatCard.Footer>
                <p className="text-xs text-muted font-semibold">{date}</p>
                <div className="flex gap-1">
                    <p className="text-xs font-semibold">IDR</p>
                    <p className="text-2xl font-bold ">{value}</p>
                </div>
            </FlatCard.Footer>
        </FlatCard>
    )
}
