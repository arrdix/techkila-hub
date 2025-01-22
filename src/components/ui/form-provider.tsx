import { FormProvider as Form, UseFormReturn } from 'react-hook-form'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils.ts'

type Props = {
    children: ReactNode
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    methods: UseFormReturn<any>
    onSubmit?: VoidFunction
    scrollable?: boolean
    className?: string
}

export function FormProvider({
    children,
    onSubmit,
    methods,
    scrollable,
    className,
}: Props): JSX.Element {
    return (
        <Form {...methods}>
            <div
                className={cn(
                    'bg-white flex-1',
                    scrollable && 'overflow-y-auto'
                )}
            >
                <form
                    noValidate
                    onSubmit={onSubmit}
                    className={cn('flex flex-col gap-4 px-8', className)}
                >
                    {children}
                </form>
            </div>
        </Form>
    )
}
