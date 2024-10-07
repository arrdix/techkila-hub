import { forwardRef, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const navItemVariant = cva(
    'flex flex-col items-center justify-center gap-1 w-10 h-10 bg-transparent rounded-full transition-colors',
    {
        variants: {
            variant: {
                default: 'text-muted bg-transparent hover:bg-foreground hover:text-background',
                active: 'text-background bg-foreground',
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
}

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <button ref={ref} className={cn(navItemVariant({ variant }), className)} {...props}>
                {props.icon}
            </button>
        )
    }
)
NavItem.displayName = 'NavItem'
