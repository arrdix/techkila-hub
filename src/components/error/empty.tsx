import { cn } from '@/libs/utils.ts'
import { Button } from '@/components/ui/button.tsx'

type Props = {
    message: string
    onBack: () => void
    className?: string
}

export function Empty({ message, onBack, className }: Props): JSX.Element {
    return (
        <div
            className={cn(
                'flex justify-center items-center w-full h-full',
                className
            )}
        >
            <div className="flex flex-col gap-4">
                <p>{message}</p>
                <Button variant="secondary" onClick={onBack}>
                    Back
                </Button>
            </div>
        </div>
    )
}
