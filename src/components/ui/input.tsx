import { cn } from '@/libs/utils'
import * as React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex w-full rounded-lg bg-white px-3 py-2 text-sm text-neutral-950 shadow-sm shadow-black/5 transition-shadow placeholder:text-neutral-500/70 disabled:cursor-not-allowed disabled:opacity-50',
                    type === 'search' &&
                        '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
                    type === 'file' &&
                        'p-0 pr-3 italic text-neutral-500/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-neutral-200 file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-neutral-950 dark:text-neutral-400/70 dark:file:border-neutral-800 dark:file:text-neutral-50',
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = 'Input'

export { Input }
