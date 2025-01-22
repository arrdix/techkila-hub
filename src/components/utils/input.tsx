import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, ...props }, ref) => {
        return (
            <>
                <input
                    type={type}
                    className={cn(
                        'flex h-16 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="text-sm text-error">{error.message}</p>}
            </>
        )
    }
)
