import { forwardRef, ReactNode } from 'react'

import { cn } from '@/libs/utils'
import { cva, VariantProps } from 'class-variance-authority'

const navItemVariant = cva(
    'flex flex-col items-center justify-center gap-1 p-1 bg-transparent rounded-full transition-colors',
    {
        variants: {
            variant: {
                default: 'text-muted bg-transparent hover:text-foreground',
                active: 'text-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

interface NavItemProps extends VariantProps<typeof navItemVariant> {
    className?: string
    icon: ReactNode
    title: string
    onClick?: () => void
}

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(navItemVariant({ variant }), className)}
                onClick={props.onClick}
                {...props}
            >
                {props.icon}
                <p
                    className={cn(
                        navItemVariant({ variant }),
                        'text-xs font-semibold',
                        className
                    )}
                >
                    {props.title}
                </p>
            </button>
        )
    }
)
NavItem.displayName = 'NavItem'
