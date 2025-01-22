import { Button } from '@/components/ui/button.tsx'
import { FlatCard } from '@/components/ui/flat-card.tsx'
import { Copy, Layers2, SquareArrowOutUpRight } from 'lucide-react'

interface PurchaseCardProps {
    no: string
    title: string
    category: string
    date: string
    value: string
}

export function PurchaseCard({
    no,
    title,
    category,
    date,
    value,
}: PurchaseCardProps): JSX.Element {
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
                    >
                        <SquareArrowOutUpRight size={16} />
                    </Button>
                </div>
            </FlatCard.Header>
            <FlatCard.Body className="flex-col">
                <p className="text-sm font-bold">{title}</p>
                <p className="text-xs text-muted">
                    <Layers2 size={13} className="inline" /> {category}
                </p>
            </FlatCard.Body>
            <FlatCard.Footer>
                <p className="text-xs text-muted font-semibold">{date}</p>
                <div className="flex gap-1">
                    <p className="text-xs font-semibold">IDR</p>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </FlatCard.Footer>
        </FlatCard>
    )
}
