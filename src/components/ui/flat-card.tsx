import { Separator } from '@/components/ui/separator'
import { cn } from '@/libs/utils'
import { forwardRef, HTMLProps, ReactNode } from 'react'

export function FlatCard({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="flex-flex-col border px-4 rounded-xl">{children}</div>
    )
}

export type Header = HTMLProps<HTMLDivElement>
const Header = forwardRef<HTMLDivElement, Header>(
    ({ children, className, ...props }, ref) => {
        return (
            <>
                <div
                    ref={ref}
                    className={cn('flex items-center py-4', className)}
                    {...props}
                >
                    {children}
                </div>
                <Separator />
            </>
        )
    }
)
Header.displayName = 'Header'

export type Body = HTMLProps<HTMLDivElement>

const Body = forwardRef<HTMLDivElement, Body>(
    ({ children, className, ...props }, ref) => {
        return (
            <>
                <div
                    ref={ref}
                    className={cn('flex py-3', className)}
                    {...props}
                >
                    {children}
                </div>
                <Separator />
            </>
        )
    }
)
Body.displayName = 'Body'

export type Footer = HTMLProps<HTMLDivElement>

const Footer = forwardRef<HTMLDivElement, Footer>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'flex justify-between items-center py-8',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        )
    }
)
Footer.displayName = 'Footer'

FlatCard.Header = Header
FlatCard.Body = Body
FlatCard.Footer = Footer
