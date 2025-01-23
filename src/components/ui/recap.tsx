import { cn } from '@/libs/utils'
import { forwardRef, HTMLProps, ReactNode } from 'react'

export function Recap({ children }: { children: ReactNode }): JSX.Element {
    return <div className="flex flex-col gap-2">{children}</div>
}

export type TitleProps = HTMLProps<HTMLParagraphElement>
export const Title = forwardRef<HTMLParagraphElement, TitleProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <p
                className={cn('text-xs text-muted', className)}
                {...props}
                ref={ref}
            >
                {children}
            </p>
        )
    }
)
Title.displayName = 'Title'

export type HeadlineProps = HTMLProps<HTMLDivElement>
const Headline = forwardRef<HTMLDivElement, HeadlineProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn('flex gap-2', className)} {...props}>
                <p className="text-xs text-muted font-bold">IDR</p>
                <div className="flex items-center gap-2 w-full">{children}</div>
            </div>
        )
    }
)
Headline.displayName = 'Headline'

export type BodyProps = HTMLProps<HTMLDivElement>
const Body = forwardRef<HTMLDivElement, BodyProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('flex items-center gap-2 mt-4', className)}
                {...props}
            >
                {children}
            </div>
        )
    }
)
Body.displayName = 'Body'

Recap.Title = Title
Recap.Headline = Headline
Recap.Body = Body
