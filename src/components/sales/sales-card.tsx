import { Button } from '@/components/ui/button'
import { FlatCard } from '@/components/ui/flat-card'
import { Copy, SquareArrowOutUpRight } from 'lucide-react'

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
                    className="text-muted hover:bg-transparent hover:text-muted"
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
            <FlatCard.Footer>
                <p className="text-xs text-muted font-semibold">{date}</p>
                <div className="flex gap-1">
                    <p className="text-xs font-semibold">IDR</p>
                    <p className="text-2xl font-bold ">{value}</p>
                </div>
            </FlatCard.Footer>
        </FlatCard>
        // <div className="flex-flex-col border border-foreground bg-foreground px-4 rounded-xl">
        //     <div className="flex items-center">
        //         <p className="text-sm font-semibold">{no}</p>
        //         <Button
        //             variant="ghost"
        //             size="icon"
        //             className="hover:bg-transparent hover:text-muted"
        //         >
        //             <Copy size={16} />
        //         </Button>
        //         <div className="flex ml-auto">
        //             <Button
        //                 variant="ghost"
        //                 size="icon"
        //                 className="justify-end hover:bg-transparent hover:text-muted"
        //             >
        //                 <SquareArrowOutUpRight size={16} />
        //             </Button>
        //         </div>
        //     </div>
        //     <Separator className="bg-background" />
        //     <div className="flex justify-between items-center py-3">
        //         <p className="text-xs font-semibold">{date}</p>
        //         <div className="flex gap-1">
        //             <p className="text-xs font-semibold">IDR</p>
        //             <p className="text-2xl font-bold text-background">{value}</p>
        //         </div>
        //     </div>
        // </div>
    )
}
